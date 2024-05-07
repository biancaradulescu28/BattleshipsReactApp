import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login.screen';
import RegisterScreen from '../screens/auth/Register.screen';
import { AuthRouteNames } from './route-names';
import { Text } from 'react-native'
import UserDetailsScreen from '../screens/auth/UserDetails.screen';
import { GameRouteNames } from './route-names';
import LobbyScreen from '../screens/game/Lobby.screen';

const AuthStack = createNativeStackNavigator()

const authRoutes = (
    <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen name={AuthRouteNames.LOGIN} component={LoginScreen} options={{
            headerTitle: (props) => <Text {...props}>Login</Text>
        }}/>
        <AuthStack.Screen name={AuthRouteNames.REGISTER} component={RegisterScreen} options={{
            headerTitle: (props) => <Text {...props}>Register</Text>
        }}/>
        <AuthStack.Screen name={AuthRouteNames.USERDETAILS} component={UserDetailsScreen} options={{
            headerTitle: (props) => <Text {...props}>User Details</Text>
        }}/>
        <AuthStack.Screen name={GameRouteNames.LOBBY} component={LobbyScreen} options={{
            headerTitle: (props) => <Text {...props}>Lobby</Text>
        }}/>
    </AuthStack.Navigator>
)

export default authRoutes;