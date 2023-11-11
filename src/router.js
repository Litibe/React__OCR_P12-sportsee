import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Header from "./components/Header.js";
import HomePage from "./Pages/Home.js";
import Error404 from "./Pages/Error404.js";
import SlideBarMenu from "./components/SlideBarMenu.js";
import ModalWidthMin from "./components/ModalWidthMin.js";

export default function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route
                    index
                    path="/"
                    element={
                        <>
                            <Header url={"home"} />
                            <SlideBarMenu />
                            <ModalWidthMin />
                            <HomePage />
                        </>
                    }
                />
                <Route
                    index
                    path="/user/:userId"
                    element={
                        <>
                            <Header url={"profil"} />
                            <SlideBarMenu />
                            <ModalWidthMin />
                            <HomePage />
                        </>
                    }
                />
                <Route
                    path="*"
                    element={
                        <>
                            <Header />
                            <SlideBarMenu />
                            <ModalWidthMin />
                            <Error404 />
                        </>
                    }
                />
            </Route>
        )
    );
    return router;
}
