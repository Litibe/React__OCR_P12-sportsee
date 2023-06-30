import * as d3 from "d3";
import React, { useRef, useEffect } from "react";
import { axisLeft } from "d3-axis";
import { useFetchGetDataUserActivity } from "../../utils/api/fetchData";

const duration = 500;
function BarChart({ parentWidth, parentHeight, userId, mocked }) {
    const { dataUserActivity, isLoadingDataUserActivity } =
        useFetchGetDataUserActivity(userId, mocked);

    useEffect(() => {
        if (dataUserActivity !== undefined) {
            const listKilogram = [];
            dataUserActivity.map((element) => {
                listKilogram.push(element.kilogram);
            });
            const listCalories = [];
            dataUserActivity.map((element) => {
                listCalories.push(element.calories);
            });

            console.log(listKilogram, listCalories);
            draw(listKilogram, listCalories);
        }
    }, [dataUserActivity]); // eslint-disable-line react-hooks/exhaustive-deps

    const draw = (listKilogram, listCalories) => {
        const deltaKilogram =
            Math.max.apply(0, listKilogram) - Math.min.apply(0, listKilogram);
        console.log(deltaKilogram);
        const deltaCalories =
            Math.max.apply(0, listCalories) - Math.min.apply(0, listCalories);

        // set the dimensions and margins of the graph
        var margin = { top: 10, right: 30, bottom: 20, left: 40 },
            width = parentWidth - margin.left - margin.right,
            height = parentHeight - margin.top - margin.bottom;
        // init svg to draw graph

        // append the svg object to the body of the page
        var svg = d3
            .select(".graph__activite")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr(
                "transform",
                "translate(" + margin.left + "," + margin.top + ")"
            );

        // X axis: scale and draw:
        var x = d3
            .scaleLinear()
            .domain([1, listKilogram.length]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([30, width - 60]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(listKilogram.length));
        // Y axis: scale and draw:
        var y = d3
            .scaleLinear()
            .domain([
                Math.min.apply(0, listKilogram),
                Math.max.apply(0, listKilogram),
            ])
            .range([height, 0]);
        y.domain([
            0,
            d3.max(listKilogram, function (d) {
                return d.length;
            }),
        ]); // d3.hist has to be called before the Y axis obviously
        svg.append("g").call(d3.axisLeft(y));

        svg.selectAll(".bar-kilogram")
            .data(listKilogram)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i + 1) - 10)
            .attr("y", (d) => height - d)
            .attr("width", 10)
            .attr("height", (d) => d)
            .style("fill", "#69b3a2");

        svg.selectAll(".bar-calories")
            .data(listCalories)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i + 1) + 10)
            .attr("y", (d) => height - d)
            .attr("width", 10)
            .attr("height", (d) => d)
            .attr("fill", "red");
    };

    return true;
}

export default BarChart;
