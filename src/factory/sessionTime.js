export default function SessionTimeFactory(dataUserSessionTime) {
    // eslint-disable-next-line array-callback-return
    let dataGraphReturn = undefined;

    let dataGraph = [];
    for (let details of dataUserSessionTime.sessions) {
        let newData = {};

        if (details.day === 1) {
            newData["dayFr"] = "L";
            newData["dayEn"] = "M";
        } else if (details.day === 2) {
            newData["dayFr"] = "M";
            newData["dayEn"] = "T";
        } else if (details.day === 3) {
            newData["dayFr"] = "M";
            newData["dayEn"] = "W";
        } else if (details.day === 4) {
            newData["dayFr"] = "J";
            newData["dayEn"] = "T";
        } else if (details.day === 5) {
            newData["dayFr"] = "V";
            newData["dayEn"] = "F";
        } else if (details.day === 6) {
            newData["dayFr"] = "S";
            newData["dayEn"] = "S";
        } else if (details.day === 7) {
            newData["dayFr"] = "D";
            newData["dayEn"] = "S";
        }
        newData["sessionLength"] = details.sessionLength;
        dataGraph.push(newData);
    }
    dataGraphReturn = dataGraph;

    return { dataGraphReturn };
}
