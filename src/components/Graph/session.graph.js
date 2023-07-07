import React, { PureComponent, useState, useEffect } from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import SessionTimeFactory from "../../factory/sessionTime";

import { useFetchGetDataUserSessionTime } from "../../utils/api/fetchData";
import Loading from "../Loading/Loading";

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props;
        let newX = 0;
        if (payload.value === "L") {
            newX = x + 10;
        } else if (payload.value === "S") {
            newX = x - 1;
        } else if (payload.value === "D") {
            newX = x - 10;
        } else {
            newX = x + 4;
        }
        return (
            <text
                x={newX}
                y={y + 10}
                fontSize={12}
                textAnchor="middle"
                fill="#fff"
                fillOpacity={0.6}
            >
                {payload.value}
            </text>
        );
    }
}

export default function SessionTimeChart({ userId, mocked, height, width }) {
    const { dataUserSessionTime, isLoadingDataUserSessionTime } =
        useFetchGetDataUserSessionTime(userId, mocked);
    const [dataGraph, setDataGraph] = useState(undefined);

    useEffect(() => {
        if (dataUserSessionTime !== undefined) {
            const { dataGraphReturn } = SessionTimeFactory(dataUserSessionTime);
            setDataGraph(dataGraphReturn);
        }
    }, [dataUserSessionTime]);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <>
                    <div className="custom-tooltip-time"></div>
                    <div className="label-time">
                        {payload[0].payload.sessionLength} min
                    </div>
                </>
            );
        }
        return null;
    };
    return (
        <>
            {isLoadingDataUserSessionTime !== true &&
            dataGraph !== undefined ? (
                <LineChart
                    width={width + 18}
                    height={height - 80}
                    data={dataGraph}
                    transform={"translate(-5,80)"}
                >
                    <XAxis
                        dataKey="dayFr"
                        tick={<CustomizedAxisTick />}
                        stroke="transparent"
                        tickMargin={10}
                    />

                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#ffff"
                        dot={{ r: 0 }}
                        activeDot={{ r: 4 }}
                    />
                </LineChart>
            ) : (
                <Loading />
            )}
        </>
    );
}
