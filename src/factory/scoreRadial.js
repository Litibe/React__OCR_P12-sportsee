export function ScoreRadialFactory(dataUser) {
    let dataGraphReturn = [];
    dataGraphReturn.push({
        name: "fullRing",
        value: 100,
        fill: "transparent",
    });
    if (dataUser.hasOwnProperty("todayScore")) {
        dataGraphReturn.push({
            name: "todayScore",
            value: dataUser.todayScore * 100,
            fill: "#ff0101",
        });
    } else if (dataUser.hasOwnProperty("score")) {
        dataGraphReturn.push({
            name: "todayScore",
            value: dataUser.score * 100,
            fill: "#ff0101",
        });
    }

    return { dataGraphReturn };
}
