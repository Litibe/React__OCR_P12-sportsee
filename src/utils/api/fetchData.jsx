import { useState, useEffect } from "react";

export default function useFetchGetDataUser(userId) {
    const [dataUser, setData] = useState(undefined);
    const [isLoadingDataUser, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const response = await fetch(
                `http://localhost:3000/user/${userId}`
            );
            const dataResponse = await response.json();
            setData(dataResponse.data);
            setLoading(false);
            return true;
        }
        fetchData();
    }, [userId]);
    return { dataUser, isLoadingDataUser };
}
