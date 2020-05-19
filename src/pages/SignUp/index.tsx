import React from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
    Container,
    Title,
    BackToSignIn,
    BackToSignInText
} from './styles';

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <Container>
                    <Image source={logoImg} />

                    <Title>Crie a sua conta</Title>

                    <Input name="email" icon="user" placeholder="Nome" />

                    <Input name="email" icon="mail" placeholder="E-mail" />

                    <Input name="password" icon="lock" placeholder="Senha" />

                    <Button
                        onPress={() => {
                            console.log('button')
                        }}>Entrar
                    </Button>
                </Container>
            </ScrollView>

            <BackToSignIn
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <Icon name="arrow-left" size={20} color="#FFF" />
                <BackToSignInText>Voltar para logon</BackToSignInText>

            </BackToSignIn>
        </>
    )
};

export default SignUp;
