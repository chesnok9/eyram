import * as React from 'react';

import DashboardWidget from './DashboardWidget';
import CollapsedList from '../../layout/CollapsedList';
import { MenuItemLink } from 'react-admin';

const rows = [
    {
        id: 1,
        title: 'Real Estate',
    },
    {
        id: 2,
        title: 'Cons. Discretionary',
    },
    {
        id: 3,
        title: 'Financials',
    },
    {
        id: 4,
        title: 'Industrials',
    },
    {
        id: 5,
        title: 'Materials',
    },
    {
        id: 6,
        title: 'Utilities',
    },
    {
        id: 7,
        title: 'Cons. Stapies',
    },
    {
        id: 8,
        title: 'Energy',
    },
    {
        id: 9,
        title: 'Technology',
    },
    {
        id: 10,
        title: 'Health Care',
    },
    {
        id: 11,
        title: 'Communications',
    },
];

const EquitySectors = () => {
    return (
        <DashboardWidget title="African Equity Sectors" height="141">
            {rows.map((row) => (
                <CollapsedList key={row.id} handleToggle={() => {}} name={row.title} dense>
                    <MenuItemLink
                        to="#"
                        state={{ _scrollToTop: true }}
                        primaryText="Link"
                        dense
                    />
                </CollapsedList>
            ))}
        </DashboardWidget>
    );
};

export default EquitySectors;
