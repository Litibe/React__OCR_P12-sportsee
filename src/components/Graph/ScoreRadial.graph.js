import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { ScoreRadialFactory } from "../../factory/scoreRadial";
export default function ScoreRadialGraph({ dataUser, height, width }) {
    const [dataGraph, setDataGraph] = useState(undefined);
    useEffect(() => {
        if (dataUser !== undefined) {
            const { dataGraphReturn } = ScoreRadialFactory(dataUser);
            console.log(dataGraphReturn);

            setDataGraph(dataGraphReturn);
        }
    }, [dataUser]);

    const data = [
        {
            uv: 12,
            fill: "#8884d8",
        },
        {
            name: "full",
            uv: 100,
            fill: "transparent",
        },
    ];

    return (
        <>
            {dataGraph !== undefined && (
                <>
                    <RadialBarChart
                        width={width}
                        height={height}
                        innerRadius="80%"
                        outerRadius="105%"
                        barSize={22}
                        data={dataGraph}
                        className="score-bg"
                        fill="#ff0101"
                    >
                        <RadialBar dataKey="value" cornerRadius={10} />
                    </RadialBarChart>
                    <div className="title__score">
                        <span className="f-bold">
                            {parseFloat(dataGraph[1].value)}
                        </span>
                        %
                    </div>
                    <div className="legend__score">de votre objectif</div>
                </>
            )}
        </>
    );
}
