export function ScoreFactory(dataUser) {
    let dataGraphReturn = [];
    if (dataUser.hasOwnProperty("todayScore")) {
        dataGraphReturn.push({
            name: "todayScore",
            value: dataUser.todayScore,
        });
        dataGraphReturn.push({
            name: "restScrore",
            value: 1 - dataUser.todayScore,
        });
    } else if (dataUser.hasOwnProperty("score")) {
        dataGraphReturn.push({ name: "todayScore", value: dataUser.score });
        dataGraphReturn.push({ name: "restScrore", value: 1 - dataUser.score });
    }

    return { dataGraphReturn };
}
