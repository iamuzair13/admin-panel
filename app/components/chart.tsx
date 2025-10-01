import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";


const monthdata = [
  { name: "Jan", uv: -1500, pv: 150, amt: 300 },
  { name: "Fab", uv: 800, pv: 400, amt: 100 },
  { name: "Mar", uv: 300, pv: 500, amt: 800 },
  { name: "Apr", uv: 300, pv: 800, amt: 500 },
  { name: "May", uv: 800, pv: 100, amt: 600 },
];
const weekData = [
  { name: "Week 1", uv: -400, pv: 150, amt: 300 },
  { name: "Week 2", uv: 800, pv: 400, amt: 100 },
  { name: "Week 3", uv: 300, pv: 500, amt: 800 },
  { name: "Week 4", uv: 300, pv: 800, amt: 500 },
];

const data = [
  { name: "Page A", Credit: 400, Debit: 2400, amt: 2400 },
  { name: "Page A", Credit: 400, Debit: 2400, amt: 2400 },
];


export const MyChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={monthdata}
      margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />

      {/* Credit */}
      <Line
        type="monotone"
        dataKey="uv"
        stroke="green"
        strokeWidth={2}
        name="Credit"
      />

      {/* Balance */}
      <Line
        type="monotone"
        dataKey="pv"
        stroke="orange"
        strokeWidth={2}
        name="Balance"
      />

      {/* Debit */}
      <Line
        type="monotone"
        dataKey="amt"
        stroke="red"
        strokeWidth={2}
        name="Debit"
      />

      <XAxis dataKey="name" />
      <YAxis
        width={40}
        label={{ value: "", position: "insideLeft", angle: -90 }}
      />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

export const RenderBarChart = () => (
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
    <Legend
      width={100}
      wrapperStyle={{
        top: 40,
        right: 20,
        backgroundColor: "#f5f5f5",
        border: "1px solid #d5d5d5",
        borderRadius: 3,
        lineHeight: "40px",
      }}
    />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="Credit" fill="green" barSize={30} />
    <Bar dataKey="Debit" fill="red" barSize={30} />
  </BarChart>
);




export const CircleChart = () => (

<PieChart width={400} height={400}>
<Pie
  activeShape={{
    fill: 'red',
  }}
  data={[
    { name: 'Trip Earning', uv: 590 },
    { name: 'Fuel Expense', uv: 590 },
    { name: 'Adjustments', uv: 200 },
    { name: 'Maintainance', uv: 88 },
    { name: 'Total Expense', uv: 68 },
  ]}
  dataKey="uv"
/>
<Tooltip defaultIndex={2} />
</PieChart>
)