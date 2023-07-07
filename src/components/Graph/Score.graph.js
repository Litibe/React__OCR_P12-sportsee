import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function ScoreGraph({ todayScore, height, width }) {
    const data = [
        { name: "todayScore", value: todayScore },
        { name: "restScrore", value: 1 - todayScore },
    ];
    const COLORS = ["red", "white"];
    const COLORSIn = ["white", "white"];
    return (
        <PieChart width={width} height={height}>
            <Pie
                data={data}
                cx={width / 2}
                cy={height / 2 - 20}
                startAngle={180}
                endAngle={-180}
                innerRadius={0}
                outerRadius={100}
                cornerRadius={0}
                paddingAngle={0}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORSIn[index % COLORSIn.length]}
                    />
                ))}
            </Pie>
            <Pie
                data={data}
                cx={width / 2}
                cy={height / 2 - 20}
                startAngle={180}
                endAngle={-180}
                innerRadius={88}
                outerRadius={100}
                cornerRadius={10}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
            <text
                x={width / 2}
                y={height / 2 - 20}
                dy={-10}
                textAnchor="middle"
                fill={"282D30"}
                style={{ fontSize: "26px" }}
            >
                {parseFloat(todayScore * 100)} %
            </text>
            <text
                x={width / 2}
                y={height / 2 - 20}
                dy={30}
                textAnchor="middle"
                fill={"74798C"}
                fillOpacity={0.4}
                style={{ fontSize: "18px" }}
            >
                de votre objectif
            </text>
        </PieChart>
    );
}
