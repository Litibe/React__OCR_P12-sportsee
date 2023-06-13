import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchGetDataUser from "../utils/api/fetchData";
import Error404 from "./Error404";
import Loading from "../components/Loading/Loading";
import ActiviteGraph from "../components/Graph/Activite.graph";
import CardHome from "../components/Card/Home.card";

import fire from "../assets/svg/fire.png";
import proteine from "../assets/svg/proteine.png";
import apple from "../assets/svg/apple.png";
import burger from "../assets/svg/cheeseburger.png";

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
                    <section className="graph__home">
                        <div>
                            <ActiviteGraph />
                        </div>
                        <div className="graph__home__cards">
                            <CardHome
                                class={"card__home--calorie"}
                                logo={fire}
                                alt={"Icone Feu"}
                                title={dataUser.keyData.calorieCount}
                                unit={"kCal"}
                                details={"Calories"}
                            />
                            <CardHome
                                class={"card__home--proteine"}
                                logo={proteine}
                                alt={"Icone Protéines"}
                                title={dataUser.keyData.proteinCount}
                                unit={"g"}
                                details={"Proteine"}
                            />
                            <CardHome
                                class={"card__home--glucide"}
                                logo={apple}
                                alt={"Icone Glucides"}
                                title={dataUser.keyData.carbohydrateCount}
                                unit={"g"}
                                details={"Glucides"}
                            />
                            <CardHome
                                class={"card__home--lipide"}
                                logo={burger}
                                alt={"Icone Burger"}
                                title={dataUser.keyData.lipidCount}
                                unit={"g"}
                                details={"Lipides"}
                            />
                        </div>
                    </section>
                </main>
            )}
        </>
    );
}
