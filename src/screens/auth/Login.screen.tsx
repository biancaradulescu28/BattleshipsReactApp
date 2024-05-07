import { NavigationProp, useNavigation } from "@react-navigation/native"
import Login from "../../components/Login"
import { AuthRouteNames } from "../../router/route-names"
import { useAuth } from "../../hooks/authContext"

const LoginScreen = () => {
    const navigation = useNavigation<any>()

    const handleGoToRegister = () => {
        navigation.navigate(AuthRouteNames.REGISTER)
    }
    const auth = useAuth()

    const handleSubmit = async (email: string, password: string) => {
    
        await auth.login(email, password);
    
    
        navigation.navigate(AuthRouteNames.USERDETAILS);
    };
    return <Login onSubmit={handleSubmit} goToRegister={handleGoToRegister}/> 
}

export default LoginScreen