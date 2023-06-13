import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Error404 from "./Error404.js";

describe("Error404", () => {
    test("Should render without crash", async () => {
        const noop = () => {};
        Object.defineProperty(window, "scrollTo", {
            value: noop,
            writable: true,
        });
        render(
            <MemoryRouter>
                <Error404 />
            </MemoryRouter>
        );
    });
});
