import { NavigationProp, useNavigation } from "@react-navigation/native"
import UserDetails from "../../components/UserDetails"
import { AuthRouteNames } from "../../router/route-names"
import { GameRouteNames } from "../../router/route-names"
import { useAuth } from "../../hooks/authContext"
import React, { useEffect, useState } from "react";
import { getUserDetails } from "../../api";

const UserDetailsScreen = () => {
    const navigation = useNavigation<any>();
    const auth = useAuth();
    const [userDetails, setUserDetails] = useState<any>(null); // Definiți starea pentru informațiile utilizatorului

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userDetailsResponse = await getUserDetails();
                setUserDetails(userDetailsResponse);
                await auth.userDetails();
                 // Setează informațiile utilizatorului în starea locală
            } catch (error) {
                console.error("Failed to fetch user details:", error);
            }
            
        };

        fetchData();
    }, []);

    const handleOnLogOut = () => {
        navigation.navigate(AuthRouteNames.LOGIN);
    };

    const handleGoToLobby = () => {
        navigation.navigate(GameRouteNames.LOBBY);
    };

    // Returnați componenta UserDetails și treceți informațiile utilizatorului ca proprietăți
    return userDetails ? (
        <UserDetails
            email={userDetails.user.email}
            currentlyGamesPlaying={userDetails.currentlyGamesPlaying}
            gamesLost={userDetails.gamesLost}
            gamesPlayed={userDetails.gamesPlayed}
            gamesWon={userDetails.gamesWon}
            onLogOut={handleOnLogOut}
            goToLobby={handleGoToLobby}
        />
    ) : null;
};

export default UserDetailsScreen;
