import * as d3 from "d3";
import { useEffect } from "react";
import { useFetchGetDataUserActivity } from "../../../utils/api/fetchData";

export default function BarChart({
    parentWidth,
    parentHeight,
    userId,
    mocked,
}) {
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

            draw(listKilogram, listCalories);
        }
    }, [dataUserActivity]); // eslint-disable-line react-hooks/exhaustive-deps

    const draw = (listKilogram, listCalories) => {
        const deltaKilogram =
            Math.max.apply(0, listKilogram) - Math.min.apply(0, listKilogram);

        // set the dimensions and margins of the graph
        var margin = { top: 20, right: 30, bottom: 10, left: 40 },
            width = parentWidth - margin.left - margin.right,
            height = parentHeight - margin.top - margin.bottom;
        // init svg to draw graph

        // append the svg object to the body of the page
        var svg = d3
            .select(".graph__activite")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g");

        // X axis: scale and draw:
        var x = d3
            .scaleLinear()
            .domain([1, listKilogram.length])
            .range([40, width]);
        svg.append("g")
            .attr("transform", "translate(0," + (height - 10) + ")")
            .style("stroke-width", 0)
            .style("font-size", "12px")
            .style("color", "#9B9EAC")
            .call(d3.axisBottom(x).ticks(listKilogram.length));

        // Y axis: scale and draw:
        var y = d3
            .scaleLinear()
            .domain([
                Math.max.apply(0, listKilogram),
                Math.min.apply(0, listKilogram) - 1,
            ])
            .range([80, height]);
        svg.append("g")
            .call(
                d3
                    .axisRight(y)
                    .ticks(deltaKilogram + 1)
                    .tickSizeInner([-width])
                    .tickSizeOuter([0])
            )
            .attr("transform", `translate(${width + 40}, -30)`)
            .style("stroke-width", 0.5)
            .attr("stroke-dasharray", "1,6")
            .style("font-size", "12px")
            .style("color", "#9B9EAC");

        svg.selectAll(".bar-kilogram")
            .data(listKilogram)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", (d, i) => x(i + 1) - 11)
            .attr(
                "y",
                (d) =>
                    height -
                    30 -
                    ((d - Math.min.apply(0, listKilogram) + 1) /
                        (deltaKilogram + 1)) *
                        (height - 80)
            )
            .attr("width", 8)
            .attr(
                "height",
                (d) =>
                    ((d - Math.min.apply(0, listKilogram) + 1) /
                        (deltaKilogram + 1)) *
                    (height - 80)
            )
            .attr("fill", "transparent")
            .transition()
            .duration(1000)
            .delay(500)
            .style("fill", "black");

        svg.selectAll(".bar-calories")
            .data(listCalories)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i + 1) + 3)
            .attr("y", (d) => height - 30 - d / 3)
            .attr("width", 8)
            .attr("height", (d) => d / 3)
            .attr("fill", "transparent")
            .transition()
            .duration(1000)
            .delay(1000)
            .attr("fill", "red");

        var tip = d3
            .select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // Add events to circles
        svg.selectAll(".bar-calories")
            .on("mouseover", function (d) {
                tip.style("opacity", 1).html(
                    d.country +
                        "<br/> Gold: " +
                        d.gold +
                        "<br/> Silver: " +
                        d.silver
                );
            })
            .on("mouseout", function (d) {
                tip.style("opacity", 0);
            });
    };

    return true;
}
