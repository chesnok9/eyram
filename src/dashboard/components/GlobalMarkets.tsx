import * as React from 'react';

import DashboardWidget from './DashboardWidget';
import CheckboxTable from './CheckboxTable';

const columns = [
    { field: 'title', headerName: 'Major Indices & ETFs', width: 140  },
    { field: 'ticker', headerName: 'Ticker', width: 60 },
    { field: 'price', headerName: 'Price', align: 'right', width: 75 },
    { field: 'chg', headerName: 'Chg', align: 'right', width: 70 },
    { field: 'percentage', headerName: '%', align: 'right', width: 50 },
];
const rows = [
    {
        id: 1,
        title: 'Nigeria',
        ticker: 'NGR',
        price: '27.15',
        chg: '+0.51',
        percentage: '1.5%',
    },
    {
        id: 2,
        title: 'South Africa',
        ticker: 'EZA',
        price: '38.06',
        chg: '+0.91',
        percentage: '2.5%',
    },
    {
        id: 3,
        title: 'Kenya',
        ticker: 'KNY',
        price: '28.31',
        chg: '+0.21',
        percentage: '0.5%',
    },
    {
        id: 4,
        title: 'Ghana',
        ticker: 'GHN',
        price: '32.21',
        chg: '+0.73',
        percentage: '1.0%',
    },
    {
        id: 5,
        title: 'Egypt',
        ticker: 'EGP',
        price: '29.25',
        chg: '+0.51',
        percentage: '2.1%',
    },
];

const GlobalMarkets = () => {
    return (
        <DashboardWidget title="Global Markets" height="141">
            <CheckboxTable
                rows={rows}
                columns={columns}
            />
        </DashboardWidget>
    );
};

export default GlobalMarkets;
