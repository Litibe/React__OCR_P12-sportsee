import { useState, useEffect } from "react";

export function useFetchGetDataUser(userId, mocked) {
    const [dataUser, setData] = useState(undefined);
    const [isLoadingDataUser, setLoading] = useState(true);
    useEffect(() => {
        if (mocked === true) {
            setData({
                id: 12,
                userInfos: {
                    firstName: "Karl",
                    lastName: "Dovineau",
                    age: 31,
                },
                todayScore: 0.12,
                keyData: {
                    calorieCount: 1930,
                    proteinCount: 155,
                    carbohydrateCount: 290,
                    lipidCount: 50,
                },
            });
            setLoading(false);
        } else {
            async function fetchData() {
                try {
                    setLoading(true);
                    const response = await fetch(
                        `http://localhost:3000/user/${userId}`
                    );
                    const data = await response.json();
                    if (response.status === 200) {
                        setData(data);
                        setLoading(false);
                    } else {
                        console.log(response.status, data);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            fetchData();
        }
    }, [mocked, userId]);
    return { dataUser, isLoadingDataUser };
}

export function useFetchGetDataUserActivity(userId, mocked) {
    const [dataUserActivity, setData] = useState(undefined);
    const [isLoadingDataUserActivity, setLoading] = useState(true);
    useEffect(() => {
        if (mocked === true) {
            setData([
                {
                    day: "2020-07-01",
                    kilogram: 80,
                    calories: 240,
                },
                {
                    day: "2020-07-02",
                    kilogram: 80,
                    calories: 220,
                },
                {
                    day: "2020-07-03",
                    kilogram: 81,
                    calories: 280,
                },
                {
                    day: "2020-07-04",
                    kilogram: 81,
                    calories: 290,
                },
                {
                    day: "2020-07-05",
                    kilogram: 80,
                    calories: 160,
                },
                {
                    day: "2020-07-06",
                    kilogram: 78,
                    calories: 162,
                },
                {
                    day: "2020-07-07",
                    kilogram: 76,
                    calories: 390,
                },
            ]);
            setLoading(false);
        } else {
            async function fetchData() {
                try {
                    setLoading(true);

                    const response = await fetch(
                        `http://localhost:3000/user/${userId}/activity`
                    );

                    if (response.status === 200) {
                        const dataResponse = await response.json();
                        setData(dataResponse.data.sessions);
                        setLoading(false);
                    } else {
                        console.log(response.status, response.data);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            fetchData();
        }
    }, [mocked, userId]);
    return { dataUserActivity, isLoadingDataUserActivity };
}
