import React, { useState, useEffect } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";
import IntensityFactory from "../../factory/intensity";

import { useFetchGetDataUserIntensity } from "../../utils/api/fetchData";
import Loading from "../Loading/Loading";

export default function SpiderChart({ userId, mocked }) {
    const { dataUserIntensity, isLoadingDataUserIntensity } =
        useFetchGetDataUserIntensity(userId, mocked);
    const [dataGraph, setDataGraph] = useState(undefined);

    useEffect(() => {
        if (dataUserIntensity !== undefined) {
            const { dataGraphReturn } = IntensityFactory(dataUserIntensity);
            setDataGraph(dataGraphReturn);
        }
    }, [dataUserIntensity]);

    return (
        <>
            {isLoadingDataUserIntensity !== true &&
            dataUserIntensity !== undefined &&
            dataGraph !== undefined ? (
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="73%"
                        data={dataGraph}
                    >
                        <PolarGrid stroke="white" />
                        <PolarAngleAxis
                            dataKey="subjectFr"
                            style={{ fontSize: "12px" }}
                            tick={{ fill: "white", fillOpacity: "0.8" }}
                        />
                        <Radar
                            name="Intensity"
                            dataKey="value"
                            fill="#FF0101"
                            fillOpacity={0.7}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            ) : (
                <Loading />
            )}
        </>
    );
}
