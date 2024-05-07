import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity, Alert, ToastAndroid } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid;
  margin-bottom: 10px;
  padding: 8px;
`;

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

const RegisterText = styled.Text`
  margin-top: 10px;
  text-align: center;
`;

const RegisterLink = styled.Text`
  color: blue;
  padding-top: 10px;
  text-decoration: underline;
`;

const ErrorMessage = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

export interface ILogin {
  onSubmit: (email: string, password: string) => void;
  goToRegister: () => void;
}

const Login: React.FC<ILogin> = ({ onSubmit, goToRegister }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = () => {
      if (!isValidEmail(email)) {
        setError("Please enter a valid email");
        return;
      }
      onSubmit(email, password);
      ToastAndroid.show("Login successful!", ToastAndroid.SHORT);
    };
  
    const isValidEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
      {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
      <Button onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
      <RegisterText>
        Already have an account?{" "}
        <TouchableOpacity onPress={goToRegister}>
          <RegisterLink>Register</RegisterLink>
        </TouchableOpacity>
      </RegisterText>
    </Container>
  );
};

export default Login;
