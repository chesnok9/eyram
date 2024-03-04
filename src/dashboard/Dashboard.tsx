import React, { useMemo, CSSProperties } from 'react';
import { useGetList } from 'react-admin';
import { useMediaQuery, Theme, Paper } from '@mui/material';
import { subDays, startOfDay } from 'date-fns';

import { Order } from '../types';
import { MarketNews } from './components/MarketNews';
import EquityMarkets from './components/EquityMarkets';
import EquitySectors from './components/EquitySectors';
import GlobalMarkets from './components/GlobalMarkets';
import ChartWidget from './components/ChartWidget';

interface OrderStats {
    revenue: number;
    nbNewOrders: number;
    pendingOrders: Order[];
}

interface State {
    nbNewOrders?: number;
    pendingOrders?: Order[];
    recentOrders?: Order[];
    revenue?: string;
}

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    middleCol: { flex: 2 },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '2em' }} />;
const VerticalSpacer = () => <span style={{ height: '2em' }} />;

const Dashboard = () => {
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );
    const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);

    const { data: orders } = useGetList<Order>('commands', {
        filter: { date_gte: aMonthAgo.toISOString() },
        sort: { field: 'date', order: 'DESC' },
        pagination: { page: 1, perPage: 50 },
    });

    const aggregation = useMemo<State>(() => {
        if (!orders) return {};
        const aggregations = orders
            .filter((order) => order.status !== 'cancelled')
            .reduce(
                (stats: OrderStats, order) => {
                    if (order.status !== 'cancelled') {
                        stats.revenue += order.total;
                        stats.nbNewOrders++;
                    }
                    if (order.status === 'ordered') {
                        stats.pendingOrders.push(order);
                    }
                    return stats;
                },
                {
                    revenue: 0,
                    nbNewOrders: 0,
                    pendingOrders: [],
                }
            );
        return {
            recentOrders: orders,
            revenue: aggregations.revenue.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }),
            nbNewOrders: aggregations.nbNewOrders,
            pendingOrders: aggregations.pendingOrders,
        };
    }, [orders]);

    const { nbNewOrders, pendingOrders, revenue, recentOrders } = aggregation;
    return isXSmall ? (
        <div>
            <div style={styles.flexColumn as CSSProperties}>
                <EquityMarkets />
                <VerticalSpacer />
                <EquitySectors />
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as CSSProperties}>
            <div style={styles.flex}>
                <EquityMarkets />
                <Spacer />
                <EquitySectors />
            </div>
            <div style={styles.singleCol}>
                <DashboardChart orders={recentOrders} />
            </div>
            <div style={styles.singleCol}>
                <GlobalMarkets />
            </div>
        </div>
    ) : (
        <Paper style={{background: '#fff', border: 'none', padding: 8}} elevation={0}>
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <EquityMarkets />
                    <div style={styles.singleCol}>
                        <EquitySectors />
                    </div>
                </div>
                <div style={styles.middleCol}>
                    <div>
                        <MarketNews />
                    </div>
                    <div style={styles.singleCol}>
                        {/* <DashboardChart orders={recentOrders} /> */}
                        <ChartWidget />
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <GlobalMarkets />
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default Dashboard;
