export default function ActivityFactory(dataUserActivity) {
    // eslint-disable-next-line array-callback-return
    let dataGraphReturn = undefined;
    let dataGraph = [];
    let dataKilo = [];
    let dataCalories = [];
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
        dataKilo.push(element["kilogram"] - 1);
        dataCalories.push(element["calories"]);
        newData["calories"] = element["calories"];
        dataGraph.push(newData);
        return true;
    });

    dataGraph.map((element) => {
        element["calories"] =
            (element["calories"] * Math.max.apply(0, dataKilo)) /
            Math.max.apply(0, dataCalories);
        element["kilogram"] = element["kilogram"] - Math.min.apply(0, dataKilo);
    });

    dataGraphReturn = dataGraph;
    return { dataGraphReturn, dataKilo, dataCalories };
}
