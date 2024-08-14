import React from 'react';
import {
    BarChart as BarGraph,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    LineChart,
    Line,
    Legend,
} from 'recharts';

interface Props { }

const data = [
    {
        name: 'Mon',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Tue',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Wed',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Thu',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Fri',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Sat',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Sun',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
];

const maxTotal = Math.max(...data.map(item => item.total));
const dataWithPercentages = data.map(item => ({
    ...item,
    total: ((item.total / maxTotal) * 100).toFixed(2),
    percentage: (item.total / maxTotal) * 100,
}));

export default function BarChart({ }: Props) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={dataWithPercentages}>
                <CartesianGrid vertical={false} horizontal={true} />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis
                    tickFormatter={(value) => `${value}%`}
                    domain={[20, 120]}
                    ticks={[20, 40, 60, 80, 100, 120]}
                    fontSize={12}
                    color='#6b7280'
                />
                <Tooltip formatter={(value) => `${value}%`} />
                <Line type="monotone" dataKey="percentage" stroke="#e84c3d" />
                <Bar dataKey="percentage" fill="#e84c3d" radius={[4, 4, 0, 0]} />
            </LineChart>
        </ResponsiveContainer>
    );
}
