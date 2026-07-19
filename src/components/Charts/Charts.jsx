import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


export default function Charts({ data }) {

  return (
    <div style={{ width: "100%", height: "300px" }}>

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

          <CartesianGrid />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="students"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}