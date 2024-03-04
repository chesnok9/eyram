import * as React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    DefaultTooltipContent,
    Legend,
    Line,
} from 'recharts';
import { useTranslate } from 'react-admin';
import { format, subDays, addDays } from 'date-fns';

import { Order } from '../../types';
import DashboardWidget from './DashboardWidget';

const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);

const dateFormatter = (date: number): string =>
    new Date(date).toLocaleDateString();

const aggregateOrdersByDay = (orders: Order[]): { [key: string]: number } =>
    orders
        .filter((order: Order) => order.status !== 'cancelled')
        .reduce((acc, curr) => {
            const day = format(new Date(curr.date), 'yyyy-MM-dd');
            if (!acc[day]) {
                acc[day] = 0;
            }
            acc[day] += curr.total;
            return acc;
        }, {} as { [key: string]: number });

const getRevenuePerDay = (orders: Order[]): TotalByDay[] => {
    const daysWithRevenue = aggregateOrdersByDay(orders);
    return lastMonthDays.map((date) => ({
        date: date.getTime(),
        total: daysWithRevenue[format(new Date(date), 'yyyy-MM-dd')] || 0,
    }));
};

const data = [
    {
      name: 'Jan 2023',
      uv: 2000,
      pv: 2000,
      amt: 2290,
    },
    {
      name: 'Apr 2023',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Jun 2023',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Oct 2023',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jan 2024',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
const DashboardChart = (props: { orders?: Order[] }) => {
    const { orders } = props;
    const translate = useTranslate();
    if (!orders) return null;

    return (
        <DashboardWidget title="Normalized Performance" height="400">
            <div style={{ width: '100%', height: 400, padding: '10px' }}>
            <ResponsiveContainer>
                <LineChart data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <DefaultTooltipContent />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </DashboardWidget>
    );
};

interface TotalByDay {
    date: number;
    total: number;
}

export default DashboardChart;
