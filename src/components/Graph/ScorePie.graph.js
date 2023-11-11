import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { ScoreFactory } from "../../factory/score";
export default function ScorePieGraph({ dataUser, height, width }) {
    const [dataGraph, setDataGraph] = useState(undefined);
    useEffect(() => {
        if (dataUser !== undefined) {
            const { dataGraphReturn } = ScoreFactory(dataUser);
            console.log(dataGraphReturn);

            setDataGraph(dataGraphReturn);
        }
    }, [dataUser]);

    const COLORS = ["red", "white"];
    const COLORSIn = ["white", "white"];
    return (
        <>
            {dataGraph !== undefined && (
                <PieChart width={width} height={height}>
                    <Pie
                        data={dataGraph}
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
                        {dataGraph.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORSIn[index % COLORSIn.length]}
                            />
                        ))}
                    </Pie>
                    <Pie
                        data={dataGraph}
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
                        {dataGraph.map((entry, index) => (
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
                        {parseFloat(dataGraph[0].value * 100)} %
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
            )}
        </>
    );
}
