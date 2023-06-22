import React, { memo, ReactText, useState } from "react";
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
import { Button, LinkButton } from "@commons/button";
import EmployeeAttendance from "@pages/employee-attendance-page"
import EmployeeLeaving from "@pages/employee-leaving-page";
//@ts-ignore
import { NavLink } from 'react-router-dom';
import { useLocalStorage } from "@commons/hooks";

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SideBar = ({ onClose, ...rest }: SidebarProps) => {
    const { t } = useTranslation()
    const { appName } = useLocalStorage()

    const [modalProps, setModalProps] = useState<any>({
    })
    const handleClickModal = (modal: string) => {
        setModalProps({ [modal]: true })
    }
    const handleCloseModal = () => {
        setModalProps({})
    }

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
                        <LinkButton label="home" pathTo="home" bg="none" width="100%" margin="5% 0" />
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
                            <Box as="span" flex='1' textAlign='left' >
                                {t("bscdat")}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <LinkButton label="splrs" pathTo="suppliers" width="100%" margin="5% 0" />
                            <LinkButton label="cstmrs" pathTo="customers" width="100%" margin="5% 0" />
                            <LinkButton label="itms" pathTo="items" width="100%" margin="5% 0" />
                            <LinkButton label="prntptn" pathTo="printOptions" width="100%" margin="5% 0" />
                            <LinkButton label="expnstyp" pathTo="expensesType" width="100%" margin="5% 0" />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
                                <Box as="span" flex='1' textAlign='left' >
                                    {t("invcs")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <LinkButton label="splrsinvcs" pathTo="supplierInvoices" width="100%" margin="5% 0" />
                            <LinkButton label="cstmrsinvs" pathTo="customerInvoices" width="100%" margin="5% 0" />
                            {/* <LinkButton label="return" pathTo="return" width="100%" margin="5% 0" /> */}
                            <LinkButton label="invsrch" pathTo="invoicesSearch" width="100%" margin="5% 0" />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
                                <Box as="span" flex='1' textAlign='left' >
                                    {t("emplys")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Button variant="outline" bg="cyan.300" color="white.200" label="emplyatndnc" width="100%" onClick={() => { handleClickModal("employeeAttendance") }} margin="5% 0" disabled />
                            <Button label="emplylvng" width="100%" onClick={() => { handleClickModal("employeeLeaving") }} margin="5% 0" disabled />
                            <LinkButton label="emplyslry" pathTo="employeeSalary" width="100%" margin="5% 0" disabled />
                            <LinkButton label="emplydat" pathTo="employeeData" width="100%" margin="5% 0" disabled />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
                                <Box as="span" flex='1' textAlign='left' >
                                    {t("incmandexpns")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <LinkButton label="cshrcptvchr" pathTo="casherReceiptVoucher" width="100%" margin="5% 0" />
                            <LinkButton label="cshpymntvchr" pathTo="casherPaymentVoucher" width="100%" margin="5% 0" />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
                                <Box as="span" flex='1' textAlign='left' >
                                    {t("rprts")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <LinkButton label="cstmrsmry" pathTo="customersSummary" width="100%" margin="5% 0" />
                            <LinkButton label="splrsmry" pathTo="suppliersSummary" width="100%" margin="5% 0" />
                            <LinkButton label="itmsmry" pathTo="itemsSummary" width="100%" margin="5% 0" />
                            <LinkButton label="dltls" pathTo="dailyTotals" width="100%" margin="5% 0" />
                            <LinkButton label="mnthltl" pathTo="monthlyTotals" width="100%" margin="5% 0" />
                            <LinkButton label="yrltls" pathTo="yearlyTotals" width="100%" margin="5% 0" />
                            <LinkButton label="expnstls" pathTo="expensesTotals" width="100%" margin="5% 0" />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
                                <Box as="span" flex='1' textAlign='left' >
                                    {t("SystemTools")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <LinkButton label="users" pathTo="users" width="100%" margin="5% 0" />
                            <LinkButton label="labels" pathTo="labels" width="100%" margin="5% 0" />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </>
    )
}

export default memo(SideBar)