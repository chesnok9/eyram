import * as React from 'react';

import DashboardWidget from './DashboardWidget';
import CheckboxTable from './CheckboxTable';

const columns = [
    {
        field: 'title',
        headerName: 'Major Indices & ETFs',
        width: 140,
    },
    { field: 'ticker', headerName: 'Ticker', width: 60, sortable: false },
    {
        field: 'price',
        headerName: 'Price',
        align: 'right',
        width: 75,
        
    },
    {
        field: 'chg',
        headerName: 'Chg',
        align: 'right',
        width: 70,
        sortable: false,
    },
    {
        field: 'percentage',
        headerName: '%',
        align: 'right',
        width: 50,
        sortable: false,
    },
];
const rows = [
    {
        id: 1,
        title: 'Nasdaq 100',
        ticker: 'NDX',
        price: '18,043.85',
        chg: '+169.35',
        percentage: '0.9%',
    },
    {
        id: 2,
        title: 'Russell 2000',
        ticker: 'IWM',
        price: '203.73',
        chg: '+1.41',
        percentage: '0.7%',
    },
    {
        id: 3,
        title: 'S&P 500',
        ticker: 'SPX',
        price: '5,096.77',
        chg: '+26.51',
        percentage: '0.5%',
    },
    {
        id: 4,
        title: 'Dow Jones',
        ticker: 'INDU',
        price: '38,996.39',
        chg: '+47.37',
        percentage: '0.1%',
    },
];

const EquityMarkets = () => {
    return (
        <DashboardWidget title="U.S. Equity Markets" height="141">
            <CheckboxTable
                rows={rows}
                columns={columns}
            />
        </DashboardWidget>
    );
};

export default EquityMarkets;
