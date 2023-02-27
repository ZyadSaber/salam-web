import { memo, useCallback, useState } from 'react';
import CardButton from '../../components/button/cardButton';
import "./style.css";
import BasicData from "./Partials/basicData"
import Invoices from "./Partials/Invoices";
import Employees from "./Partials/Employees";
import Reports from './Partials/Reports';
import IncomeAndExpens from "./Partials/IncomeAndExpens";
import SystemTools from './Partials/SystemTools';

const Home = () => {
    const [defineData, setDefineData] = useState({
        view: BasicData
    })

    const cardButtonMargin = "10px"
    const data = useCallback((element: any) => {
        setDefineData({ view: element })
    }, [])
    return (
        <>
            <div className="main">
                <div className='side-bar' >
                    <CardButton label='bscdat' width='100%' margin={cardButtonMargin} onClick={() => { data(BasicData) }} />
                    <CardButton label='invcs' width='100%' margin={cardButtonMargin} onClick={() => { data(Invoices) }} />
                    <CardButton label='emplys' width='100%' margin={cardButtonMargin} onClick={() => { data(Employees) }} />
                    <CardButton label='incmandexpns' width='100%' margin={cardButtonMargin} onClick={() => { data(IncomeAndExpens) }} />
                    <CardButton label='rprts' width='100%' margin={cardButtonMargin} onClick={() => { data(Reports) }} />
                    <CardButton label='SystemTools' width='100%' margin={cardButtonMargin} onClick={() => { data(SystemTools) }} />
                </div>
                <div className='button-actions'>
                    {<defineData.view />}
                </div>
            </div>
        </>
    )
};

export default memo(Home);
