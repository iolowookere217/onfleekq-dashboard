import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Nov",
    uv: 4000,
    year: 2400,
    amt: 2400,
  },
  {
    name: "Dec",
    uv: 3000,
    year: 1398,
    amt: 2210,
  },
  {
    name: "Jan",
    uv: 2000,
    year: 9800,
    amt: 2290,
  },
  {
    name: "Feb",
    uv: 2780,
    year: 3908,
    amt: 2000,
  },
  {
    name: "Mar",
    uv: 1890,
    year: 4800,
    amt: 2181,
  },
  {
    name: "Apr",
    uv: 2390,
    year: 3800,
    amt: 2500,
  },
  {
    name: "May",
    uv: 3490,
    year: 4300,
    amt: 2100,
  },
  {
    name: "Jun",
    uv: 3790,
    year: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <BarChart
      width={660}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={5}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="year" fill="#3326AE" background={{ fill: "#eee" }} />
    </BarChart>
  );
};
export default Chart;
