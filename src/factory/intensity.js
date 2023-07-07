export default function IntensityFactory(dataUserIntensity) {
    // eslint-disable-next-line array-callback-return
    let dataGraphReturn = undefined;

    let dataGraph = [];
    for (let number of dataUserIntensity.data) {
        let newData = {};
        newData["subjectEN"] =
            dataUserIntensity.kind[number.kind].charAt(0).toUpperCase() +
            dataUserIntensity.kind[number.kind].slice(1);
        if (dataUserIntensity.kind[number.kind] === "cardio") {
            newData["subjectFr"] = "Cardio";
        } else if (dataUserIntensity.kind[number.kind] === "energy") {
            newData["subjectFr"] = "Energie";
        } else if (dataUserIntensity.kind[number.kind] === "endurance") {
            newData["subjectFr"] = "Endurance";
        } else if (dataUserIntensity.kind[number.kind] === "strength") {
            newData["subjectFr"] = "Force";
        } else if (dataUserIntensity.kind[number.kind] === "speed") {
            newData["subjectFr"] = "Vitesse";
        } else if (dataUserIntensity.kind[number.kind] === "intensity") {
            newData["subjectFr"] = "Intensité";
        }
        newData["value"] = number.value;
        dataGraph.push(newData);
    }
    dataGraphReturn = dataGraph.reverse();

    return { dataGraphReturn };
}
