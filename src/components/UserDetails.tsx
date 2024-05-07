import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px;
`

const Button = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 70px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const UserText = styled.Text`
  font-size: 18px;
  margin-bottom: 50px;
`;

const UserDetailsContainer = styled.View`
  margin-bottom: 50px;
`;

const UserDetailsText = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

export interface IUserDetails {
    email: string;
    currentlyGamesPlaying: number;
    gamesLost: number;
    gamesPlayed: number;
    gamesWon: number;
    onLogOut: () => void;
    goToLobby: () => void;
}

const UserDetails: React.FC<IUserDetails> = ({ email, currentlyGamesPlaying, gamesLost, gamesPlayed, gamesWon, onLogOut, goToLobby }) => {
    return (
        <Container>
            <UserDetailsContainer>
                <UserText>User {email}</UserText>
                <UserDetailsText>Games playing: {currentlyGamesPlaying}</UserDetailsText>
                <UserDetailsText>Games lost: {gamesLost}</UserDetailsText>
                <UserDetailsText>Games played: {gamesPlayed}</UserDetailsText>
                <UserDetailsText>Games won: {gamesWon}</UserDetailsText>
            </UserDetailsContainer>
            <Button onPress={goToLobby}>
                <ButtonText>Lobby</ButtonText>
            </Button>
            <Button onPress={onLogOut}>
                <ButtonText>Log out</ButtonText>
            </Button>
        </Container>
    )
}

export default UserDetails;
