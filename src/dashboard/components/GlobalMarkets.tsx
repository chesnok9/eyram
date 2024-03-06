import * as React from 'react';

import DashboardWidget from './DashboardWidget';
import CollapsedList from '../../layout/CollapsedList';
import { MenuItemLink } from 'react-admin';

const rows = [
    {
        id: 1,
        title: 'Financial Statements',
    },
    {
        id: 2,
        title: 'Currencies',
    },
    {
        id: 3,
        title: 'Exchanges',
    },
    {
        id: 4,
        title: 'Central Banks',
    },
    {
        id: 5,
        title: 'Government',
    },
    {
        id: 6,
        title: 'Fixed Income',
    },
];

const GlobalMarkets = () => {
    return (
        <DashboardWidget title="Relevant Links" height="141">
            {rows.map((row) => (
                <CollapsedList
                    key={row.id}
                    handleToggle={() => {}}
                    name={row.title}
                    dense
                >
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

export default GlobalMarkets;
