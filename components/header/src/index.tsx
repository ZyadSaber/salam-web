import React, { memo, useCallback } from "react";
import {
    IconButton,
    Avatar,
    Box,
    Flex,
    HStack,
    VStack,
    useColorModeValue,
    Text,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import {
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from "@commons/hooks"


interface MobileProps extends FlexProps {
    onOpen: () => void;
}

const Header = ({ onOpen }: MobileProps) => {

    const { t } = useTranslation()
    const { buildName, appName, displayName, role, clearLocalStorage } = useLocalStorage()

    const handleSignOut = useCallback(() => {
        clearLocalStorage()
        window.location.replace("/")
    }, [clearLocalStorage])

    return (
        <>
            <Flex
                ml={{ base: 0, md: 60 }}
                px={{ base: 4, md: 4 }}
                height="20"
                alignItems="center"
                bg={useColorModeValue('white', 'gray.900')}
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                justifyContent={{ base: 'space-between', md: 'space-between' }}
            >
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onOpen}
                    variant="outline"
                    aria-label="open menu"
                    icon={<FiMenu />}
                />

                <Text
                    display={{ base: 'none', md: 'flex' }}
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold">
                    {t(buildName)}
                </Text>

                <Text
                    display={{ base: 'flex', md: 'none' }}
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold">
                    {t(appName)}
                </Text>

                <HStack spacing={{ base: '0', md: '6' }}>
                    <IconButton
                        size="lg"
                        variant="ghost"
                        aria-label="open menu"
                        icon={<FiBell />}
                    />
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                py={2}
                                transition="all 0.3s"
                                _focus={{ boxShadow: 'none' }}>
                                <HStack>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'http://192.168.1.250:5000/application_logo/primary_logo'
                                        }
                                    />
                                    <VStack
                                        display={{ base: 'none', md: 'flex' }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2">
                                        <Text fontSize="sm">{displayName}</Text>
                                        <Text fontSize="xs" color="gray.600">
                                            {role}
                                        </Text>
                                    </VStack>
                                    <Box display={{ base: 'none', md: 'flex' }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList
                                bg={useColorModeValue('white', 'gray.900')}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                                <MenuItem>{t("Profile")}</MenuItem>
                                <MenuItem>{t("Settings")}</MenuItem>
                                <MenuItem>{t("Billing")}</MenuItem>
                                <MenuDivider />
                                <MenuItem onClick={handleSignOut}>{t("sgnot")}</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack>
            </Flex>
        </>
    );
};

export default memo(Header)