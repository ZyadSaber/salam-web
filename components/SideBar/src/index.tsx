import React, { memo } from "react";
import {
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Text,
    Accordion,
    BoxProps,
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
    AccordionButton,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LinkButton } from "@commons/button";
// import EmployeeAttendance from "@pages/employee-attendance-page"
// import EmployeeLeaving from "@pages/employee-leaving-page";
//@ts-ignore
// import { NavLink } from 'react-router-dom';
import { useLocalStorage, useFetch, useCurrentUserName } from "@commons/hooks";

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SideBar = ({ onClose, ...rest }: SidebarProps) => {
    const { t } = useTranslation()
    const { appName } = useLocalStorage()
    const user_name = useCurrentUserName()

    // const [modalProps, setModalProps] = useState<any>({
    // })
    // const handleClickModal = (modal: string) => {
    //     setModalProps({ [modal]: true })
    // }
    // const handleCloseModal = () => {
    //     setModalProps({})
    // }

    const { data } = useFetch({
        link: "QUERY_SIDE_PAGES_DATA",
        fetchOnFirstRun: true,
        params: {
            user_name
        },
    })

    return (
        <>
            <Box
                transition="3s ease"
                bg={useColorModeValue('white', 'gray.900')}
                borderRight="1px"
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                w={{ base: 'full', md: 60 }}
                pos="fixed"
                h="full"
                {...rest}
            >
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                        {t(appName)}
                    </Text>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Flex>
                <Accordion width="100%" allowToggle defaultIndex={[1]}>
                    <AccordionItem>
                        <LinkButton label="home" pathTo="home" width="100%" margin="5% 0" />
                    </AccordionItem>

                    {
                        Array.isArray(data) && data?.map((event: any) => {
                            return (
                                <AccordionItem key={event.page_parent_id}>
                                    <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
                                        <Box as="span" flex='1' textAlign='left' >
                                            {t(event.page_parent_name)}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        {event.app_pages.map((page: any) => {
                                            return page.run_in_modal === "N" ? (
                                                <LinkButton key={page.page_id} label={page.page_name} pathTo={page.page_link} width="100%" margin="5% 0" />
                                            ) : <></>
                                        })}
                                    </AccordionPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </Box>
        </>
    )
}

export default memo(SideBar)