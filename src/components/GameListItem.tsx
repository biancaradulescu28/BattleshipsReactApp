import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled.TouchableOpacity<{color: string}>`
    padding: 8px;
    border: 1px solid ${props => props.color};
    border-radius: 4px;
    margin-bottom: 10px;
`

export interface IGameListItem {
    id: number;
    onPress?: () => void;
    player1: { email: string };
    player2: { email: string };
}

const GameListItem: React.FC<IGameListItem> = ({ id, player1, player2, onPress }) => {
    return (
    
        <Container color="black" onPress={onPress}>
            <Text>Game id: {id}</Text>
            <Text>Player 1: {player1.email}</Text>
            <Text>Player 2: {player2.email}</Text>
        </Container>
    );
};

export default GameListItem