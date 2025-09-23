import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
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


const MyChart = () => (
  <LineChart
    width={1500}
    height={300}
    data={monthdata}
    margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
  >
    <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />

    {/* First Line */}
    <Line
      type="monotone"
      dataKey="uv"
      stroke="green"
      strokeWidth={2}
      name="Credit"
    />

    {/* Second Line */}
    <Line
      type="monotone"
      dataKey="pv"
      stroke="orange"
      strokeWidth={2}
      name="Balance"
    />
    {/* Second Line */}
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
    {/* <Legend align="right" /> */}
    <Tooltip />
  </LineChart>
);

export default MyChart