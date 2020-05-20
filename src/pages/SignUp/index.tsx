import React, { useRef } from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

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
    const formRef = useRef<FormHandles>(null);

    return (
        <>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <Container>
                    <Image source={logoImg} />

                    <Title>Crie a sua conta</Title>
                    <Form ref={formRef} onSubmit={(data) => {
                        console.log(data)
                    }}>
                        <Input name="name" icon="user" placeholder="Nome" />

                        <Input name="email" icon="mail" placeholder="E-mail" />

                        <Input name="password" icon="lock" placeholder="Senha" />

                        <Button
                            onPress={() => {
                                formRef.current?.submitForm();
                            }}>
                            Entrar
                    </Button>
                    </Form>
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
