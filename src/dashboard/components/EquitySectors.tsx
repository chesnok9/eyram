import * as React from 'react';

import DashboardWidget from './DashboardWidget';
import CheckboxTable from './CheckboxTable';

const columns = [
    { field: 'title', headerName: 'S&P Sector ETFs', width: 140  },
    { field: 'ticker', headerName: 'Ticker', width: 60 },
    { field: 'price', headerName: 'Price', align: 'right', width: 75 },
    { field: 'chg', headerName: 'Chg', align: 'right', width: 70 },
    { field: 'percentage', headerName: '%', align: 'right', width: 50 },
];
const rows = [
    {
        id: 1,
        title: 'Technology',
        ticker: 'XLK',
        price: '210.66',
        chg: '+3.73',
        percentage: '1.8%',
    },
    {
        id: 2,
        title: 'Energy',
        ticker: 'XLE',
        price: '87.10',
        chg: '+0.95',
        percentage: '1.1%',
    },
    {
        id: 3,
        title: 'Communications',
        ticker: 'XLC',
        price: '80.19',
        chg: '+0.81',
        percentage: '1.0%',
    },
    {
        id: 4,
        title: 'Health Care',
        ticker: 'XLV',
        price: '146.10',
        chg: '+1.27',
        percentage: '0.9%',
    },
    {
        id: 5,
        title: 'Real Estate',
        ticker: 'XLRE',
        price: '39.30',
        chg: '+0.20',
        percentage: '0.5%',
    },
    {
        id: 6,
        title: 'Materials',
        ticker: 'XLB',
        price: '87.87',
        chg: '+0.29',
        percentage: '0.3%',
    },
];

const EquitySectors = () => {
    return (
        <DashboardWidget title="U.S. Equity Sectors" height="141">
            <CheckboxTable
                rows={rows}
                columns={columns}
            />
        </DashboardWidget>
    );
};

export default EquitySectors;
