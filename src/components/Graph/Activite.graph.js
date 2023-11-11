import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import React, { PureComponent, useState, useEffect } from "react";
import ActivityFactory from "../../factory/activity";

import { useFetchGetDataUserActivity } from "../../utils/api/fetchData";
import Loading from "../Loading/Loading";

class CustomizedAxisXTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props;

        return (
            <text
                x={x}
                y={y + 20}
                fontSize={12}
                textAnchor="middle"
                fill="grey"
                fillOpacity={0.6}
            >
                {payload.value}
            </text>
        );
    }
}

class CustomizedAxisYTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props;
        return (
            <text
                x={x + 20}
                y={y}
                fontSize={12}
                textAnchor="middle"
                fill="grey"
                fillOpacity={0.6}
            >
                {payload.value}
            </text>
        );
    }
}

export default function ActivityChart({ width, height, userId, mocked }) {
    const { dataUserActivity, isLoadingDataUserActivity } =
        useFetchGetDataUserActivity(userId, mocked);
    const [dataGraph, setDataGraph] = useState(undefined);
    const [dataKilo, setDataKilo] = useState(undefined);
    const [dataCalories, setDataCalories] = useState(undefined);

    useEffect(() => {
        if (dataUserActivity !== undefined) {
            const { dataGraphReturn, dataKilo, dataCalories } =
                ActivityFactory(dataUserActivity);
            setDataGraph(dataGraphReturn);
            setDataKilo(dataKilo);
            setDataCalories(dataCalories);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataUserActivity]);

    const CustomTooltip = ({ active, payload, dataCalories }) => {
        if (active && payload && payload.length) {
            return (
                <>
                    <div className="custom-tooltip"></div>
                    <div className="label">
                        <span>{payload[0].payload.kilogram} Kg</span>
                        <span>
                            {dataCalories[payload[0].payload.day - 1]}
                            Kcal
                        </span>
                    </div>
                </>
            );
        }
        return null;
    };

    return (
        <>
            {isLoadingDataUserActivity !== true &&
            dataUserActivity !== undefined ? (
                <BarChart
                    width={width}
                    height={height - 80}
                    data={dataGraph}
                    transform={"translate(20,60)"}
                >
                    <XAxis
                        dataKey="day"
                        stroke="transparent"
                        tick={<CustomizedAxisXTick />}
                    />
                    <YAxis
                        dataKey="kilogram"
                        orientation="right"
                        stroke="transparent"
                        tick={
                            <CustomizedAxisYTick
                                dataKilo={dataKilo}
                                dataCalories={dataCalories}
                            />
                        }
                        domain={[
                            Math.min.apply(0, dataKilo) - 1,
                            Math.max.apply(0, dataKilo),
                        ]}
                    />
                    <Tooltip
                        content={
                            <CustomTooltip
                                dataKilo={dataKilo}
                                dataCalories={dataCalories}
                            />
                        }
                    />

                    <CartesianGrid
                        vertical={false}
                        stroke="#ccc"
                        strokeDasharray="2 5"
                    />
                    <Bar
                        dataKey="kilogram"
                        fill="black"
                        barSize={8}
                        radius={[10, 10, 0, 0]}
                        transform={"translate(-2, 0)"}
                    />
                    <Bar
                        dataKey="calories"
                        fill="red"
                        barSize={8}
                        radius={[10, 10, 0, 0]}
                        transform={"translate(2,0)"}
                    />
                </BarChart>
            ) : (
                <Loading />
            )}
        </>
    );
}
