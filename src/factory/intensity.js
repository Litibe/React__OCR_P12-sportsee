export default function IntensityFactory(dataUserIntensity, userId) {
    // eslint-disable-next-line array-callback-return
    let dataGraphReturn = undefined;
    dataUserIntensity.map((element) => {
        if (element.userId === parseInt(userId)) {
            let dataGraph = [];
            for (let number of element.data) {
                let newData = {};
                newData["subjectEN"] =
                    element.kind[number.kind].charAt(0).toUpperCase() +
                    element.kind[number.kind].slice(1);
                if (element.kind[number.kind] === "cardio") {
                    newData["subjectFr"] = "Cardio";
                } else if (element.kind[number.kind] === "energy") {
                    newData["subjectFr"] = "Energie";
                } else if (element.kind[number.kind] === "endurance") {
                    newData["subjectFr"] = "Endurance";
                } else if (element.kind[number.kind] === "strength") {
                    newData["subjectFr"] = "Force";
                } else if (element.kind[number.kind] === "speed") {
                    newData["subjectFr"] = "Vitesse";
                } else if (element.kind[number.kind] === "intensity") {
                    newData["subjectFr"] = "Intensité";
                }
                newData["value"] = number.value;
                dataGraph.push(newData);
            }
            dataGraphReturn = dataGraph.reverse();
        }
    });
    return { dataGraphReturn };
}
