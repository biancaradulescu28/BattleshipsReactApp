import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GameRouteNames } from './route-names';
import { Text } from 'react-native'
import LobbyScreen from '../screens/game/Lobby.screen';

const GameStack = createNativeStackNavigator()

const gameRoutes = (
    <GameStack.Navigator>
        <GameStack.Screen name={GameRouteNames.LOBBY} component={LobbyScreen} options={{
            headerTitle: (props) => <Text {...props}>Lobby</Text>
        }}/>
        
    </GameStack.Navigator>
)

export default gameRoutes;