import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header.js";

describe("Header", () => {
    test("Should render without crash", async () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
    });
});
