import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SlideBarMenu from "./SlideBarMenu.js";

describe("SlideBarMenu", () => {
    test("Should render without crash", async () => {
        render(
            <MemoryRouter>
                <SlideBarMenu />
            </MemoryRouter>
        );
    });
});
