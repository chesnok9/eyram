import * as React from 'react';
import { format, subDays, addDays } from 'date-fns';

import { Order } from '../../types';
import DashboardWidget from './DashboardWidget';
import ReactApexChart from 'react-apexcharts';
import { Button } from '@mui/material';
import { time } from 'console';

const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);

const series = [
    {
        name: 'NDX',
        data: [
            [1672531200000, 0],
            [1675209600000, 9],
            [1677628800000, 22],
            [1680307200000, 19],
            [1682899200000, 15],
            [1685577600000, 26],
            [1688169600000, 33],
            [1690848000000, 29],
            [1693526400000, 37],
            [1696118400000, 42],
            [1698796800000, 30],
            [1701388800000, 36],
            [1704067200000, 41],
            [1706745600000, 45],
        ],
    },
    {
        name: 'SPX',
        data: [
            [1672531200000, 0],
            [1675209600000, 1],
            [1677628800000, -2],
            [1680307200000, 3],
            [1682899200000, 6],
            [1685577600000, 2],
            [1688169600000, 8],
            [1690848000000, 12],
            [1693526400000, 8],
            [1696118400000, 2],
            [1698796800000, 6],
            [1701388800000, 11],
            [1704067200000, 27],
            [1706745600000, 31],
        ],
    },
    {
        name: 'IWM',
        data: [
            [1672531200000, 0],
            [1675209600000, -5],
            [1677628800000, -3],
            [1680307200000, -5],
            [1682899200000, -9],
            [1685577600000, 2],
            [1688169600000, 0],
            [1690848000000, 6],
            [1693526400000, -1],
            [1696118400000, 1],
            [1698796800000, -11],
            [1701388800000, 12],
            [1704067200000, 13],
            [1706745600000, 16],
        ],
    },
    {
        name: 'INDU',
        data: [
            [1672531200000, 0],
            [1675209600000, -2],
            [1677628800000, 0],
            [1680307200000, 2],
            [1682899200000, 5],
            [1685577600000, 2],
            [1688169600000, 0],
            [1690848000000, 6],
            [1693526400000, 8],
            [1696118400000, 3],
            [1698796800000, 0],
            [1701388800000, 14],
            [1704067200000, 23],
            [1706745600000, 27],
        ],
    },
];
const options = {
    chart: {
        id: 'dashboard-chart',
        height: 350,
        type: 'line',
        toolbar: {
            show: false
        },
        zoom: {
            // type: 'x',
            // enabled: true,
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
    // annotations: {
    //     yaxis: [{
    //       y: 30,
    //       borderColor: '#999',
    //       label: {
    //         show: true,
    //         text: 'Support',
    //         style: {
    //           color: "#fff",
    //           background: '#00E396'
    //         }
    //       }
    //     }],
    // },
    stroke: {
        curve: 'straight',
        width: 1,
    },
    // title: {
    //     text: '.',
    //     align: 'left',
    // },
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
    tooltip: {
        x: {
            format: 'dd MMM yyyy',
        },
    },
    xaxis: {
        type: 'datetime',
        min: new Date('01 Jan 2023').getTime(),
        tickAmount: 6,
    },
    yaxis: {
        labels: {
            formatter: function (val: Number) {
                return val.toFixed(2) + '%';
            },
        },
        position: 'right',
        opposite: true,
        min: -20,
        max: 100,
    },
    selection: '1Y',
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
    },
};

const periods = [
    {
        name: '1D',
        start: '30 Jan 2024',
        end: '31 Jan 2024',
    },
    {
        name: '5D',
        start: '26 Jan 2024',
        end: '31 Jan 2024',
    },
    {
        name: '1M',
        start: '1 Jan 2024',
        end: '1 Feb 2024',
    },
    {
        name: '3M',
        start: '1 Nov 2023',
        end: '1 Feb 2024',
    },
    {
        name: '6M',
        start: '1 Aug 2023',
        end: '1 Feb 2024',
    },
    {
        name: 'YTD',
        start: '1 Jan 2024',
        end: '1 Feb 2024',
    },
    {
        name: '1Y',
        start: '1 Feb 2023',
        end: '1 Feb 2024',
    },
    {
        name: '3Y',
        start: '1 Feb 2021',
        end: '1 Feb 2024',
    },
    {
        name: '5Y',
        start: '1 Feb 2019',
        end: '1 Feb 2024',
    },
    {
        name: '10Y',
        start: '1 Feb 2014',
        end: '1 Feb 2024',
    },
];
const ChartWidget = (props: { orders?: Order[] }) => {
    const [selection, setSelection] = React.useState('1Y');

    const updateData = (timeline: string) => {
        setSelection(timeline);

        const period = periods.find(p => p.name === timeline);

        if (period) {
            ApexCharts.exec(
                'dashboard-chart',
                'zoomX',
                new Date(period.start).getTime(),
                new Date(period.end).getTime(),
            );
        }
    };

    return (
        <DashboardWidget title="Normalized Performance" height="400">
            <div style={{ width: '100%', height: 420, padding: '10px' }}>
                <div className="toolbar">
                    {periods.map((period) => (
                        <Button
                            key={period.name}
                            onClick={() => updateData(period.name)}
                            variant={
                                selection === period.name ? 'outlined' : 'text'
                            }
                            size="small"
                            sx={{ padding: 0, minWidth: '40px' }}
                        >
                            {period.name}
                        </Button>
                    ))}
                </div>
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
