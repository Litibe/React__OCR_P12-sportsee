import { useParams } from "react-router-dom";

import { useFetchGetDataUser } from "../utils/api/fetchData";

import Error404 from "./Error404";
import Loading from "../components/Loading/Loading";
import CardHome from "../components/Card/Home.card";

import fire from "../assets/svg/fire.png";
import proteine from "../assets/svg/proteine.png";
import apple from "../assets/svg/apple.png";
import burger from "../assets/svg/cheeseburger.png";
import ActivityChart from "../components/Graph/Activite.graph";
import ScoreGraph from "../components/Graph/Score.graph";
import SpiderChart from "../components/Graph/intensity.graph";
import SessionTimeChart from "../components/Graph/session.graph";
import SignIn from "../components/SignIn";

export default function HomePage() {
    document.title = "SportSee - Votre Coach Sportif !";
    const mocked = true;

    const { userId } = useParams();
    const { dataUser, isLoadingDataUser } = useFetchGetDataUser(userId, mocked);
    return (
        <>
            {userId === undefined ? (
                <SignIn />
            ) : isLoadingDataUser === true ? (
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
                    <h2>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </h2>
                    <section className="graph__home">
                        <div className="graph__home__graph">
                            <div className="graph__activite">
                                <div className="graph__activite-header">
                                    <div className="graph__activite-title">
                                        Activité quotidienne
                                    </div>
                                    <div className="graph__activite-legend">
                                        <div>
                                            <svg
                                                className="graph__activite-legend-svg"
                                                width="8"
                                                height="8"
                                                viewBox="0 0 8 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                                                    fill="#000000"
                                                />
                                            </svg>
                                            Poids (kg)
                                        </div>
                                        <div>
                                            <svg
                                                className="graph__activite-legend-svg"
                                                width="8"
                                                height="8"
                                                viewBox="0 0 8 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                                                    fill="#E60000"
                                                />
                                            </svg>
                                            Calories brûlées (kCal)
                                        </div>
                                    </div>
                                </div>
                                <ActivityChart
                                    width={800}
                                    height={300}
                                    userId={userId}
                                    mocked={mocked}
                                />
                            </div>
                            <div className="graph__other-time">
                                <div className="graph__other-time-title">
                                    Durée moyenne des sessions
                                </div>
                                <SessionTimeChart
                                    userId={userId}
                                    mocked={mocked}
                                    height={250}
                                    width={250}
                                />
                            </div>
                            <div className="graph__other-intensity">
                                {userId !== undefined && (
                                    <SpiderChart
                                        userId={userId}
                                        mocked={mocked}
                                    />
                                )}
                            </div>
                            <div className="graph__other-score">
                                <div className="graph__other-score-title">
                                    Score
                                </div>
                                {dataUser.todayScore !== undefined ? (
                                    <ScoreGraph
                                        todayScore={dataUser.todayScore}
                                        height={250}
                                        width={250}
                                    />
                                ) : (
                                    <ScoreGraph
                                        todayScore={dataUser.score}
                                        height={250}
                                        width={250}
                                    />
                                )}
                            </div>
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
