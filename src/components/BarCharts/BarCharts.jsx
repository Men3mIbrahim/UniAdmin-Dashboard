import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


export default function BarCharts({ data }) {

    return (
        <div style={{ width: "100%", height: "300px" }}>

            <ResponsiveContainer width="100%" height="100%">

                <BarChart data={data}>

                    <CartesianGrid />

                    <XAxis dataKey="department" />

                    <YAxis />

                    <Tooltip />

                    <Bar dataKey="students" />

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
}