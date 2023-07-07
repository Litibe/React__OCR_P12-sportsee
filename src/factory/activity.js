export default function ActivityFactory(dataUserActivity) {
    // eslint-disable-next-line array-callback-return
    let dataGraphReturn = undefined;
    let dataGraph = [];
    let dataKilo = [];
    dataUserActivity.map((element) => {
        let newData = {};
        // if day == 01 - delete 0
        if (element["day"].slice(element["day"].length - 2)[0] === "0") {
            newData["day"] =
                element["day"].slice(element["day"].length - 1) +
                element["day"].slice(element["day"].length);
        } else {
            newData["day"] =
                element["day"].slice(element["day"].length - 2) +
                element["day"].slice(element["day"].length);
        }
        newData["kilogram"] = element["kilogram"];
        dataKilo.push(element["kilogram"]);
        newData["calories"] = element["calories"] / 75;
        dataGraph.push(newData);
        return true;
    });

    dataGraph.map(
        (element) =>
            (element["kilogram"] =
                element["kilogram"] - Math.min.apply(0, dataKilo) + 1)
    );

    dataGraphReturn = dataGraph;
    return { dataGraphReturn, dataKilo };
}
