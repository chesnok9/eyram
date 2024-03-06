import * as React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';

import DashboardWidget from './DashboardWidget';

const items = [
    {
        id: 1,
        title: '$1.2bn power listing lights up Nigerian exchange.',
        source: 'MarketWatch.com - Top Stories',
        datetime: '5:51 PM',
    },
    {
        id: 2,
        title: 'Electronic trading system for the new Ethiopian Securities Exchange.',
        source: 'NYT > Business',
        datetime: '5:33 PM',
    },
    {
        id: 3,
        title: 'BluePeak private debt fund raises $156m.',
        source: 'WSJ.com: World News',
        datetime: '5:21 PM',
    },
    {
        id: 4,
        title: 'Telco Orange rings up the last share listing of 2022.',
        source: 'NYT > Business',
        datetime: '4:15 PM',
    },
    {
        id: 5,
        title: 'Stock Exchange of Mauritius\'s new trading system launches this week.',
        source: 'News - Investor\'s Business Daily',
        datetime: '4:02 PM',
    },
    {
        id: 6,
        title: 'What $1 million buys in the world’s most expensive real-estate markets',
        source: 'MarketWatch.com - Top Stories',
        datetime: '3:51 PM',
    },
    {
        id: 7,
        title: 'Oprah to Leave Weight Watchers Board',
        source: 'NYT > Business',
        datetime: '2:23 PM',
    },
    {
        id: 8,
        title: 'U.S. Natural Gas Futures Lower After Storage Report',
        source: 'WSJ.com: World News',
        datetime: '1:02 PM',
    },
    {
        id: 9,
        title: 'Nursing Home Staffing Shortages and Other Problems Still Persist',
        source: 'NYT > Business',
        datetime: '12:10 AM',
    },
    {
        id: 10,
        title: 'Oil Field Services Firm, IBD Stock Of The Day, Could See 160% EPS Growth In 2024',
        source: "News - Investor's Business Daily",
        datetime: '10:54 AM',
    },
];

const styles = {
    row: {
        fontSize: '12px',
        paddingLeft: 8,
        paddingRight: 8,
        whiteSpace: 'nowrap',
    },
    rowWrapped: {
        fontSize: '12px',
        paddingLeft: 8,
        paddingRight: 8,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
};

export const MarketNews = () => {
    return (
        <DashboardWidget title="Market News" height="89px">
            <Table size="small">
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell style={styles.rowWrapped}>
                                {item.title}
                            </TableCell>
                            <TableCell style={styles.row}>
                                {item.source}
                            </TableCell>
                            <TableCell style={styles.row} align="right">
                                {item.datetime}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </DashboardWidget>
    );
};
