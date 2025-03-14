import React from 'react';
import { BarChart, AreaChart,
    Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the bar chart
const data = [
    { name: 'Eye', levels: 6 },
    { name: 'Neuro', levels: 5 },
    { name: 'Surgical', levels: 8 },
    { name: 'Lungs', levels: 10 },
    { name: 'Nutrition', levels: 6},
];

const BarGraph = () => {
    return (
        <ResponsiveContainer width="100%" height={350} minWidth={400}>
            <BarChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{fontSize: 14}}/>
                <YAxis domain={[0, 12]} tick={{
                    fontSize: 14
                }}/>
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="levels" fill="#339cff" radius={[10, 10, 0, 0]} barSize={30}/>
            </BarChart>
        </ResponsiveContainer>
    );
};


// Sample data for the area chart
const data_2 = [
  { name: 'Jan', value: 150 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 270 },
  { name: 'May', value: 180 },
  { name: 'Jun', value: 290 },
  { name: 'Aug', value: 350 },
  { name: 'Sep', value: 250 },
  { name: 'Oct', value: 200 },
  { name: 'Nov', value: 240 },
  { name: 'Dec', value: 200 },
];

const SmoothAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400} minWidth={450}>
      <AreaChart data={data_2}>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#339cff" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#339cff" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#339cff" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#339cff" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{fontSize: 14}}/>
        <YAxis tick={{fontSize: 14}} domain={[0, 500]}/>
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#339cff" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );

};


export {BarGraph, SmoothAreaChart};