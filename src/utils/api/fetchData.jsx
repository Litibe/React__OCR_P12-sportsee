import { useState, useEffect } from "react";

export function useFetchGetDataUser(userId, mocked) {
    const [dataUser, setData] = useState(undefined);
    const [isLoadingDataUser, setLoading] = useState(true);
    useEffect(() => {
        if (mocked === true) {
            setData({
                id: 22,
                userInfos: {
                    firstName: "Lionel",
                    lastName: "TISSIER",
                    age: 32,
                },
                todayScore: 0.82,
                keyData: {
                    calorieCount: 1330,
                    proteinCount: 255,
                    carbohydrateCount: 590,
                    lipidCount: 120,
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
                        setData(data.data);
                        setLoading(false);
                    } else {
                        console.log(response.status, data);
                        setData(undefined);
                        setLoading(false);
                    }
                } catch (err) {
                    console.log(err);
                    setLoading(undefined);
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
                    kilogram: 68,
                    calories: 240,
                },
                {
                    day: "2020-07-02",
                    kilogram: 69,
                    calories: 220,
                },
                {
                    day: "2020-07-03",
                    kilogram: 68,
                    calories: 280,
                },
                {
                    day: "2020-07-04",
                    kilogram: 70,
                    calories: 290,
                },
                {
                    day: "2020-07-05",
                    kilogram: 71,
                    calories: 160,
                },
                {
                    day: "2020-07-06",
                    kilogram: 69,
                    calories: 162,
                },
                {
                    day: "2020-07-07",
                    kilogram: 70,
                    calories: 390,
                },
                {
                    day: "2020-07-08",
                    kilogram: 68,
                    calories: 240,
                },
                {
                    day: "2020-07-09",
                    kilogram: 67,
                    calories: 120,
                },
                {
                    day: "2020-07-10",
                    kilogram: 69,
                    calories: 280,
                },
                {
                    day: "2020-07-11",
                    kilogram: 70,
                    calories: 290,
                },
                {
                    day: "2020-07-12",
                    kilogram: 68,
                    calories: 360,
                },
                {
                    day: "2020-07-13",
                    kilogram: 69,
                    calories: 162,
                },
                {
                    day: "2020-07-14",
                    kilogram: 70,
                    calories: 420,
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

export function useFetchGetDataUserIntensity(userId, mocked) {
    const [dataUserIntensity, setData] = useState(undefined);
    const [isLoadingDataUserIntensity, setLoading] = useState(true);
    useEffect(() => {
        if (mocked === true) {
            setData({
                userId: 22,
                kind: {
                    1: "cardio",
                    2: "energy",
                    3: "endurance",
                    4: "strength",
                    5: "speed",
                    6: "intensity",
                },
                data: [
                    {
                        value: 90,
                        kind: 1,
                    },
                    {
                        value: 100,
                        kind: 2,
                    },
                    {
                        value: 140,
                        kind: 3,
                    },
                    {
                        value: 150,
                        kind: 4,
                    },
                    {
                        value: 160,
                        kind: 5,
                    },
                    {
                        value: 60,
                        kind: 6,
                    },
                ],
            });
            setLoading(false);
        } else {
            async function fetchData() {
                try {
                    setLoading(true);

                    const response = await fetch(
                        `http://localhost:3000/user/${userId}/performance`
                    );

                    if (response.status === 200) {
                        const dataResponse = await response.json();
                        setData(dataResponse.data);
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
    return { dataUserIntensity, isLoadingDataUserIntensity };
}

export function useFetchGetDataUserSessionTime(userId, mocked) {
    const [dataUserSessionTime, setData] = useState(undefined);
    const [isLoadingDataUserSessionTime, setLoading] = useState(true);
    useEffect(() => {
        if (mocked === true) {
            setData({
                userId: 22,
                sessions: [
                    {
                        day: 1,
                        sessionLength: 10,
                    },
                    {
                        day: 2,
                        sessionLength: 33,
                    },
                    {
                        day: 3,
                        sessionLength: 27,
                    },
                    {
                        day: 4,
                        sessionLength: 45,
                    },
                    {
                        day: 5,
                        sessionLength: 32,
                    },
                    {
                        day: 6,
                        sessionLength: 15,
                    },
                    {
                        day: 7,
                        sessionLength: 50,
                    },
                ],
            });
            setLoading(false);
        } else {
            async function fetchData() {
                try {
                    setLoading(true);

                    const response = await fetch(
                        `http://localhost:3000/user/${userId}/average-sessions`
                    );

                    if (response.status === 200) {
                        const dataResponse = await response.json();
                        setData(dataResponse.data);
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
    return { dataUserSessionTime, isLoadingDataUserSessionTime };
}
