import Register from "../../components/Register"
import { useAuth } from "../../hooks/authContext"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { AuthRouteNames } from "../../router/route-names"

const RegisterScreen = () => {
    const navigation = useNavigation<any>()
    const auth = useAuth()

    const handleSubmit = async (email: string, password: string) => {
        await auth.register(email, password);
    
        navigation.navigate(AuthRouteNames.LOGIN);
    };
    
    return <Register onSubmit={handleSubmit} />
}

export default RegisterScreen