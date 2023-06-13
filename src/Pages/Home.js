import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchGetDataUser from "../utils/api/fetchData";
import Error404 from "./Error404";
import Loading from "../components/Loading/Loading";

export default function HomePage() {
    document.title = "SportSee - Votre Coach Sportif !";

    const { userId } = useParams();
    const { dataUser, isLoadingDataUser } = useFetchGetDataUser(userId);
    console.log(dataUser);
    return (
        <>
            {isLoadingDataUser === true ? (
                <Loading />
            ) : dataUser === undefined ? (
                <Error404 />
            ) : (
                <main>
                    <h1>
                        Bonjour{" "}
                        <span className="text-primary">
                            {dataUser.userInfos.firstName}
                        </span>
                    </h1>
                </main>
            )}
        </>
    );
}
