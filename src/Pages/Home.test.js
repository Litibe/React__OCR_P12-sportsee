import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home.js";

describe("Home", () => {
    test("Should render without crash", async () => {
        const noop = () => {};
        Object.defineProperty(window, "scrollTo", {
            value: noop,
            writable: true,
        });
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
    });
});
