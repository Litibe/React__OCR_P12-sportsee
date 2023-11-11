/* eslint-disable array-callback-return */
export default function ActivityFactory(dataUserActivity) {
    let dataGraphReturn = [];
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
        newData["calories"] = element["calories"];
        dataKilo.push(element["kilogram"]);
        dataCalories.push(element["calories"]);
        dataGraphReturn.push(newData);
        return true;
    });
    // interval graph * %calories + min kilo for datacalorie
    dataGraphReturn.map((element) => {
        element["calories"] =
            ((Math.max.apply(0, dataKilo) + 1 - Math.min.apply(0, dataKilo)) *
                element["calories"]) /
                Math.max.apply(0, dataCalories) +
            Math.min.apply(0, dataKilo);
    });

    return { dataGraphReturn, dataKilo, dataCalories };
}
