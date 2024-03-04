import * as React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';

import DashboardWidget from './DashboardWidget';

const items = [
    {
        id: 1,
        title: 'What $1 million buys in the world’s most expensive real-estate markets',
        source: 'MarketWatch.com - Top Stories',
        datetime: '5:51 PM',
    },
    {
        id: 2,
        title: 'Oprah to Leave Weight Watchers Board',
        source: 'NYT > Business',
        datetime: '2:23 PM',
    },
    {
        id: 3,
        title: 'U.S. Natural Gas Futures Lower After Storage Report',
        source: 'WSJ.com: World News',
        datetime: '1:02 PM',
    },
    {
        id: 4,
        title: 'Nursing Home Staffing Shortages and Other Problems Still Persist',
        source: 'NYT > Business',
        datetime: '12:10 AM',
    },
    {
        id: 5,
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
