import React, {useState} from "react";
import styled from "styled-components/native";
import { Text, Alert, ToastAndroid } from "react-native";

const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px;
`

const Input = styled.TextInput`
    width: 100%;
    height: 40px;
    border: 1px solid;
    margin-bottom: 10px;
    padding: 8px;
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

const ErrorMessage = styled.Text`
  color: red;
  margin-bottom: 10px;
`;


export interface IRegister {
    onSubmit: (email: string, password: string) => void;
  }
  
  const Register: React.FC<IRegister> = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
  

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      };

    const handleSubmit = () => {
        if (!isValidEmail(email)) {
            setError("Please enter a valid email");
            return;
          }
          else{
            if (password !== confirmPassword) {
                setError("Passwords do not match");
              } else {
                onSubmit(email, password);
                ToastAndroid.show("Registered successful!", ToastAndroid.SHORT);
              }
          }
    

    };
  
    return (
      <Container>
        <Input
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder="Email"
        />
        <Input
          secureTextEntry
          onChangeText={setPassword}
          placeholder="Password"
        />
        <Input
          secureTextEntry
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
        />
        {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
        <Button onPress={handleSubmit}>
          <ButtonText>Submit</ButtonText>
        </Button>
      </Container>
    );
  };
  
  export default Register;