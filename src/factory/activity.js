export default function ActivityFactory(dataUserActivity, userId) {
    // eslint-disable-next-line array-callback-return
    let dataGraphReturn = undefined;
    let dataGraph = [];
    let dataKilo = [];
    dataUserActivity.map((element) => {
        let newData = {};

        newData["day"] =
            element["day"].slice(element["day"].length - 1) +
            element["day"].slice(element["day"].length);
        newData["kilogram"] = element["kilogram"];
        dataKilo.push(element["kilogram"]);
        newData["calories"] = element["calories"] / 100;
        dataGraph.push(newData);
    });

    dataGraph.map((element) => {
        element["kilogram"] =
            element["kilogram"] - Math.min.apply(0, dataKilo) + 1;
    });

    dataGraphReturn = dataGraph;
    return { dataGraphReturn, dataKilo };
}
