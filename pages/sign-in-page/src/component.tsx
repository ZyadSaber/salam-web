import React, { memo, useCallback, useEffect } from 'react';
import { Button } from "@commons/button";
import { InputText } from "@commons/input-text";
import { useLocalStorage, useMutation, useFormManager } from "@commons/hooks"
import {
    Flex,
    FormControl,
    Heading,
    Stack,
    Image,
} from '@chakra-ui/react';

const SignInPage = () => {
    //TODO: redesign this page with different ui

    const { setRow, success } = useMutation({ link: "USER_LOG_IN", noAuthorization: true })
    const { state, onChange } = useFormManager({
        initialValues: {
            user_name: "",
            password: ""
        }
    })
    const { changeLocalStorage } = useLocalStorage()

    if (success) {
        changeLocalStorage([
            {
                name: "salam",
                //@ts-ignore
                data: { ...success }
            }
        ])
    }


    useEffect(() => {
        if (success && success.response === "success") {
            window.location.assign("/home")
        }
    }, [success])

    const handleLogIn = useCallback(() => {
        setRow(state)

    }, [setRow, state])

    return (
        <>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                        <FormControl id="email">
                            <InputText
                                name='user_name'
                                Label='usrnm'
                                onChange={onChange}
                                width="100%"
                                margin={0}
                                padding={0}
                                value={state.user_name}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <InputText
                                name='password'
                                Label='pswrd'
                                onChange={onChange}
                                type="password"
                                width="100%"
                                margin={0}
                                padding={0}
                                value={state.password}
                            />
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                            </Stack>
                            <Button backGround={'blue'} label='login' onClick={handleLogIn} />
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                        }
                    />
                </Flex>
            </Stack>
        </>
    )
};

export default memo(SignInPage);