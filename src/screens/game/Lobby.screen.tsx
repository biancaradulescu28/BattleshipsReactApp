import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/authContext";
import { listGames } from "../../api";
import GameListItem from "../../components/GameListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { GameRouteNames } from "../../router/route-names";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 8px;
`;

const GameList = styled.ScrollView``;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
`;

const GameListContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const Button = styled.TouchableOpacity<{ active: boolean }>`
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? "red" : "gray")};
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const LobbyScreen = () => {
  const auth = useAuth();
  const navigation = useNavigation();
  const [games, setGames] = useState([]);
  const [showMyGames, setShowMyGames] = useState(true);

  useEffect(() => {
    // Funcția pentru a obține lista de jocuri
    const fetchGames = async () => {
      try {
        const gamesResponse = await listGames(auth.token);
        setGames(gamesResponse.games);
        console.log(gamesResponse.games)
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };

    fetchGames(); // Apelăm funcția pentru a obține jocurile inițiale
  }, []);

  // Funcție pentru a filtra jocurile după player ID
  const filterGamesByPlayerId = (games: any[], playerId: any) => {
    return games.filter((game: any) => {
      // Verificăm dacă utilizatorul curent este player1 sau player2 în joc
      return game.player1Id === playerId || game.player2Id === playerId;
    });
  };
  

  // Funcție pentru a afișa doar jocurile ale userului curent
  const handleShowMyGames = () => {
    setShowMyGames(true);
  };

  // Funcție pentru a afișa toate jocurile
  const handleShowAllGames = () => {
    setShowMyGames(false);
  };

  return (
    <Container>
      <ButtonContainer>
        <Button active={showMyGames} onPress={handleShowMyGames}>
          <ButtonText>My Games</ButtonText>
        </Button>
        <Button active={!showMyGames} onPress={handleShowAllGames}>
          <ButtonText>All Games</ButtonText>
        </Button>
      </ButtonContainer>
      <GameListContainer>
      <GameList>
    {games.length > 0 ? (
      showMyGames
        ? filterGamesByPlayerId(games, auth.userData.user.id).map((game: any) => (
            <GameListItem
              id={game.id}
              player1={game.player1}
              player2={game.player2}
              key={game.id}
              
            />
          ))
        : games.map((game: any) => (
            <GameListItem
              id={game.id}
              player1={game.player1}
              player2={game.player2}
              key={game.id}
              
            />
          ))
    ) : (
      <Text>Loading...</Text>
    )}
  </GameList>
      </GameListContainer>

    </Container>
  );
};

export default LobbyScreen;