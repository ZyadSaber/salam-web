import React, { memo, useState } from "react";
import Flex from "@commons/flex";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Button, LinkButton } from "@commons/button";
import EmployeeAttendance from "@pages/employee-attendance-page"
import EmployeeLeaving from "@pages/employee-leaving-page";
//@ts-ignore
import { NavLink } from 'react-router-dom';
import { useLocalStorage } from "@commons/hooks"

const SideBar = () => {
    const { t } = useTranslation()
    const { displayName } = useLocalStorage()
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
            <EmployeeAttendance
                visible={modalProps.employeeAttendance}
                handleCloseModal={handleCloseModal}
            />
            <EmployeeLeaving
                visible={modalProps.employeeLeaving}
                handleCloseModal={handleCloseModal}
            />
            <Flex backgroundColor="#3c8dcf" width="100%" margin="0" height="100%" borderRadius="0" flexDirection="column">
                <Flex width="100%" height="17%" flexDirection="column" justifyContent="space-around" margin="15px 0px 35px" textAlign="center">
                    <NavLink to='/home' className="navbar-brand m-0 w-100" >
                        <Flex width="100%" flexDirection="column" justifyContent="centre" margin="0">
                            <img src="http://144.24.209.19:9090/api/v1/logo" alt="Logo" className="rounded mx-auto d-block w-50 mb-3" />
                            <h4>{t("aptl")}</h4>
                        </Flex>
                    </NavLink>
                    {displayName && <span className="navbar-brand mb-0 h1 " >{`${t("crntsrs")} ${displayName} `}</span>}
                </Flex>
                <Accordion width="100%" allowToggle defaultIndex={[1]}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#c0dcf3', color: 'black' }} borderRadius="0 0 5px 5px">
                                <Box as="span" flex='1' textAlign='left' >
                                    {t("bscdat")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <LinkButton label="splrs" pathTo="suppliers" width="100%" margin="5% 0" />
                            <LinkButton label="cstmrs" pathTo="customers" width="100%" margin="5% 0" />
                            <LinkButton label="itms" pathTo="items" width="100%" margin="5% 0" />
                            <LinkButton label="prntptn" pathTo="printOptions" width="100%" margin="5% 0" />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#c0dcf3', color: 'black' }} borderRadius="0 0 5px 5px">
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
                            <AccordionButton _expanded={{ bg: '#c0dcf3', color: 'black' }} borderRadius="0 0 5px 5px">
                                <Box as="span" flex='1' textAlign='left' >
                                    {t("emplys")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Button label="emplyatndnc" width="100%" onClick={() => { handleClickModal("employeeAttendance") }} margin="5% 0" />
                            <Button label="emplylvng" width="100%" onClick={() => { handleClickModal("employeeLeaving") }} margin="5% 0" />
                            <LinkButton label="emplyslry" pathTo="employeeSalary" width="100%" margin="5% 0" />
                            <LinkButton label="emplydat" pathTo="employeeData" width="100%" margin="5% 0" />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#c0dcf3', color: 'black' }} borderRadius="0 0 5px 5px">
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
                            <AccordionButton _expanded={{ bg: '#c0dcf3', color: 'black' }} borderRadius="0 0 5px 5px">
                                <Box as="span" flex='1' textAlign='left' >
                                    {t("rprts")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <LinkButton label="cstmrsmry" pathTo="customersSummary" width="100%" margin="5% 0" />
                            <LinkButton label="suppliersSummary" pathTo="suppliersSummary" width="100%" margin="5% 0" />
                            <LinkButton label="itemsSummary" pathTo="itemsSummary" width="100%" margin="5% 0" />
                            <LinkButton label="dailyTotals" pathTo="dailyTotals" width="100%" margin="5% 0" />
                            <LinkButton label="monthlyTotals" pathTo="monthlyTotals" width="100%" margin="5% 0" />
                            <LinkButton label="yearlyTotals" pathTo="yearlyTotals" width="100%" margin="5% 0" />
                            <LinkButton label="expensesTotals" pathTo="expensesTotals" width="100%" margin="5% 0" />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#c0dcf3', color: 'black' }} borderRadius="0 0 5px 5px">
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
            </Flex>
        </>
    )
}

export default memo(SideBar)