import { memo } from "react"
import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';

const CallToActionWithAnnotation = () => {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Make money from <br />
                        <Text as={'span'} color={'green.400'}>
                            your audience
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Monetize your content by charging your most loyal readers and reward
                        them loyalty points. Give back to your loyal readers by granting
                        them access to your pre-releases and sneak-peaks.
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Box>
                            <Icon
                                // as={Arrow}
                                color={useColorModeValue('gray.800', 'gray.300')}
                                w={71}
                                position={'absolute'}
                                right={-71}
                                top={'10px'}
                            />
                            <Text
                                fontSize={'lg'}
                                fontFamily={'Caveat'}
                                position={'absolute'}
                                right={'-125px'}
                                top={'-15px'}
                                transform={'rotate(10deg)'}>
                                Starting at $15/mo
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}

export default memo(CallToActionWithAnnotation)