import * as React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    DefaultTooltipContent,
    Legend,
    Line,
} from 'recharts';
import { useTranslate } from 'react-admin';
import { format, subDays, addDays } from 'date-fns';

import { Order } from '../../types';
import DashboardWidget from './DashboardWidget';
import ReactApexChart from 'react-apexcharts';

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

const series = [
    {
        name: 'NDX',
        data: [0, 9, 22, 19, 15, 26, 33, 29, 37, 42, 30, 36, 41],
    },
    {
        name: 'SPX',
        data: [0, 1, -2, 3, 6, 2, 8, 12, 8, 2, 6, 11, 27],
    },
    {
        name: 'IWM',
        data: [0, -5, -3, -5, -9, 2, 0, 6, -1, 1, -11, 12, 13],
    },
    {
        name: 'INDU',
        data: [0, -2, 0, 2, 5, 2, 0, 6, 8, 3, 0, 14, 23],
    },
];
const options = {
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            autoSelected: 'zoom',
        },
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true,
        },
    },
    colors: [
        'rgb(125, 0, 255)',
        'hsl(210, 100%, 50%)',
        'rgb(252, 115, 53)',
        'rgb(179, 233, 0)',
        'rgb(255, 211, 51)',
    ],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'straight',
        width: 1,
    },
    title: {
        text: '.',
        align: 'right',
    },
    grid: {
        position: 'front',
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    markers: {
        size: 0,
    },
    xaxis: {
        categories: [
            'Jan 2023',
            'Feb 2023',
            'Mar 2023',
            'Apr 2023',
            'May 2023',
            'Jun 2023',
            'Jul 2023',
            'Aug 2023',
            'Sep 2023',
            'Oct 2023',
            'Nov 2023',
            'Dec 2023',
            'Jan 2024',
            'Feb 2024',
        ],
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return val.toFixed(2) + '%';
            },
        },
        position: 'right',
        opposite: true,
        min: -20,
        max: 100,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        floating: true,
        offsetY: -25,
        offsetX: -5,
    },
};
const ChartWidget = (props: { orders?: Order[] }) => {
    const { orders } = props;
    const translate = useTranslate();
    // if (!orders) return null;

    return (
        <DashboardWidget title="Normalized Performance" height="400">
            <div style={{ width: '100%', height: 400, padding: '10px' }}>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height={350}
                />
            </div>
        </DashboardWidget>
    );
};

interface TotalByDay {
    date: number;
    total: number;
}

export default ChartWidget;
