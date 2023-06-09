import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            month: 'Mar',
            investment: 100000,
            sell: 241,
            revenue: 10401,
        },
        {
            month: 'Apr',
            investment: 200000,
            sell: 423,
            revenue: 24500,
        },
        {
            month: 'May',
            investment: 500000,
            sell: 726,
            revenue: 67010,
        },
        {
            month: 'Jun',
            investment: 500000,
            sell: 529,
            revenue: 40405,
        },
        {
            month: 'Jul',
            investment: 600000,
            sell: 601,
            revenue: 50900,
        },
        {
            month: 'Aug',
            investment: 700000,
            sell: 670,
            revenue: 61000,
        },
    ];
    return (
        <div className="flex flex-wrap justify-center">
            <div className="mx-32">
                <h1 className="text-xl text-blue-600 font-medium ml-32 my-8">MONTH WISE SELL</h1>
                <LineChart width={400} height={250} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
            <div className="mx-32">
                <h1 className="text-xl text-blue-600 font-medium ml-28 my-8">Investment VS Revenue</h1>
                <AreaChart width={400} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
            <div className="mx-32">
                <h1 className="text-xl text-blue-600 font-medium ml-28 my-8">Investment VS Revenue</h1>
                <BarChart width={400} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;
