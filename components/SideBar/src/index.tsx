import React, { memo, ReactText } from "react";
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    Accordion,
    BoxProps,
    FlexProps,
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
    AccordionButton,
    MenuList,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Button, LinkButton } from "@commons/button";
import EmployeeAttendance from "@pages/employee-attendance-page"
import EmployeeLeaving from "@pages/employee-leaving-page";
//@ts-ignore
import { NavLink } from 'react-router-dom';
import { useLocalStorage } from "@commons/hooks";
import { IconType } from 'react-icons';

interface SidebarProps extends BoxProps {
    onClose: () => void;
}
interface LinkItemProps {
    name: string;
    icon: IconType;
}

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
}

const SideBar = ({ onClose, ...rest }: SidebarProps) => {
    const { t } = useTranslation()
    const { appName } = useLocalStorage()

    const LinkItems: Array<LinkItemProps> = [
        { name: 'Home', icon: FiHome },
        { name: 'Trending', icon: FiTrendingUp },
        { name: 'Explore', icon: FiCompass },
        { name: 'Favourites', icon: FiStar },
        { name: 'Settings', icon: FiSettings },
    ];

    // const [modalProps, setModalProps] = useState<any>({
    // })
    // const handleClickModal = (modal: string) => {
    //     setModalProps({ [modal]: true })
    // }
    // const handleCloseModal = () => {
    //     setModalProps({})
    // }

    const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
        return (
            <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: 'cyan.400',
                        color: 'white',
                    }}
                    {...rest}>
                    {icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={icon}
                        />
                    )}
                    {/* {children} */}
                </Flex>
            </Link>
        );
    };

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
                            {/* <Button label="emplyatndnc" width="100%" onClick={() => { handleClickModal("employeeAttendance") }} margin="5% 0" />
                            <Button label="emplylvng" width="100%" onClick={() => { handleClickModal("employeeLeaving") }} margin="5% 0" /> */}
                            <LinkButton label="emplyslry" pathTo="employeeSalary" width="100%" margin="5% 0" />
                            <LinkButton label="emplydat" pathTo="employeeData" width="100%" margin="5% 0" />
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

//  <EmployeeAttendance
//                 visible={modalProps.employeeAttendance}
//                 handleCloseModal={handleCloseModal}
//             />
//             <EmployeeLeaving
//                 visible={modalProps.employeeLeaving}
//                 handleCloseModal={handleCloseModal}
//             />

// < Accordion width = "100%" allowToggle defaultIndex = { [1]} >
//                 <AccordionItem>
//                     <h2>
//                         <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
//                             <Box as="span" flex='1' textAlign='left' >
//                                 {t("bscdat")}
//                             </Box>
//                             <AccordionIcon />
//                         </AccordionButton>
//                     </h2>
//                     <AccordionPanel>
//                         <LinkButton label="splrs" pathTo="suppliers" width="100%" margin="5% 0" />
//                         <LinkButton label="cstmrs" pathTo="customers" width="100%" margin="5% 0" />
//                         <LinkButton label="itms" pathTo="items" width="100%" margin="5% 0" />
//                         <LinkButton label="prntptn" pathTo="printOptions" width="100%" margin="5% 0" />
//                         <LinkButton label="expnstyp" pathTo="expensesType" width="100%" margin="5% 0" />
//                     </AccordionPanel>
//                 </AccordionItem>
//                 <AccordionItem>
//                     <h2>
//                         <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
//                             <Box as="span" flex='1' textAlign='left' >
//                                 {t("invcs")}
//                             </Box>
//                             <AccordionIcon />
//                         </AccordionButton>
//                     </h2>
//                     <AccordionPanel>
//                         <LinkButton label="splrsinvcs" pathTo="supplierInvoices" width="100%" margin="5% 0" />
//                         <LinkButton label="cstmrsinvs" pathTo="customerInvoices" width="100%" margin="5% 0" />
//                         {/* <LinkButton label="return" pathTo="return" width="100%" margin="5% 0" /> */}
//                         <LinkButton label="invsrch" pathTo="invoicesSearch" width="100%" margin="5% 0" />
//                     </AccordionPanel>
//                 </AccordionItem>
//                 <AccordionItem>
//                     <h2>
//                         <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
//                             <Box as="span" flex='1' textAlign='left' >
//                                 {t("emplys")}
//                             </Box>
//                             <AccordionIcon />
//                         </AccordionButton>
//                     </h2>
//                     <AccordionPanel>
//                         <Button label="emplyatndnc" width="100%" onClick={() => { handleClickModal("employeeAttendance") }} margin="5% 0" />
//                         <Button label="emplylvng" width="100%" onClick={() => { handleClickModal("employeeLeaving") }} margin="5% 0" />
//                         <LinkButton label="emplyslry" pathTo="employeeSalary" width="100%" margin="5% 0" />
//                         <LinkButton label="emplydat" pathTo="employeeData" width="100%" margin="5% 0" />
//                     </AccordionPanel>
//                 </AccordionItem>
//                 <AccordionItem>
//                     <h2>
//                         <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
//                             <Box as="span" flex='1' textAlign='left' >
//                                 {t("incmandexpns")}
//                             </Box>
//                             <AccordionIcon />
//                         </AccordionButton>
//                     </h2>
//                     <AccordionPanel>
//                         <LinkButton label="cshrcptvchr" pathTo="casherReceiptVoucher" width="100%" margin="5% 0" />
//                         <LinkButton label="cshpymntvchr" pathTo="casherPaymentVoucher" width="100%" margin="5% 0" />
//                     </AccordionPanel>
//                 </AccordionItem>
//                 <AccordionItem>
//                     <h2>
//                         <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
//                             <Box as="span" flex='1' textAlign='left' >
//                                 {t("rprts")}
//                             </Box>
//                             <AccordionIcon />
//                         </AccordionButton>
//                     </h2>
//                     <AccordionPanel>
//                         <LinkButton label="cstmrsmry" pathTo="customersSummary" width="100%" margin="5% 0" />
//                         <LinkButton label="splrsmry" pathTo="suppliersSummary" width="100%" margin="5% 0" />
//                         <LinkButton label="itmsmry" pathTo="itemsSummary" width="100%" margin="5% 0" />
//                         <LinkButton label="dltls" pathTo="dailyTotals" width="100%" margin="5% 0" />
//                         <LinkButton label="mnthltl" pathTo="monthlyTotals" width="100%" margin="5% 0" />
//                         <LinkButton label="yrltls" pathTo="yearlyTotals" width="100%" margin="5% 0" />
//                         <LinkButton label="expnstls" pathTo="expensesTotals" width="100%" margin="5% 0" />
//                     </AccordionPanel>
//                 </AccordionItem>
//                 <AccordionItem>
//                     <h2>
//                         <AccordionButton _expanded={{ bg: 'cyan.400', color: 'black' }} borderRadius="0 0 5px 5px">
//                             <Box as="span" flex='1' textAlign='left' >
//                                 {t("SystemTools")}
//                             </Box>
//                             <AccordionIcon />
//                         </AccordionButton>
//                     </h2>
//                     <AccordionPanel>
//                         <LinkButton label="users" pathTo="users" width="100%" margin="5% 0" />
//                         <LinkButton label="labels" pathTo="labels" width="100%" margin="5% 0" />
//                     </AccordionPanel>
//                 </AccordionItem>