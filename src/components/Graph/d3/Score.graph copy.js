import * as d3 from "d3";
import { useEffect } from "react";
import { useFetchGetDataUserActivity } from "../../../utils/api/fetchData";

export default function PieChart({ todayScore }) {
    useEffect(() => {
        if (todayScore !== undefined) {
            draw(todayScore);
        }
    }, [todayScore]); // eslint-disable-line react-hooks/exhaustive-deps

    const draw = (todayScore) => {
        // set the dimensions and margins of the graph
        const width = 230,
            height = 230,
            margin = 30;

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        const radius = Math.min(width, height) / 2 - margin;

        // append the svg object to the div called 'my_dataviz'
        const svg = d3
            .select(".graph__other-score")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr(
                "transform",
                ` translate(${width / 2 + 15},${height / 2 - 15})`
            );

        //Draw the Circle
        svg.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 99)
            .attr("fill", "white");
        // Create dummy data
        const data = {
            todayScore: todayScore * 360,
            deltatodayScore: (1 - todayScore) * 360,
        };

        // set the color scale
        const color = d3.scaleOrdinal().range(["red", "transparent"]);

        // Compute the position of each group on the pie:
        const pie = d3.pie().value((d) => d[1]);

        const data_ready = pie(Object.entries(data));

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg.selectAll("whatever")
            .data(data_ready)
            .join("path")
            .attr(
                "d",
                d3
                    .arc()
                    .innerRadius(100) // This is the size of the donut hole
                    .outerRadius(radius)
            )
            .attr("fill", (d) => color(d.data[0]))
            .attr("stroke", "white")
            .style("stroke-width", "0px");

        svg.append("text")
            .attr("dy", "-.5em")
            .style("text-anchor", "middle")
            .attr("class", "inside")
            .style("font-size", "26px")
            .attr("fill", "#282D30")
            .text(function (d) {
                return `${todayScore * 100}%`;
            });
        svg.append("text")
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .attr("class", "data")
            .style("font-size", "20px")
            .attr("fill", "#9B9EAC")
            .text(function (d) {
                return "de votre objectif";
            });
    };
}
