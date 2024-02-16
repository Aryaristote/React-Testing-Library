import { screen, render } from "@testing-library/react";
import Header from "../Header";

//If the component has props, make sur you pass them.
describe("Header", () => {
    test("should renders text passed into the title", async () => {
        render(<Header title="My Header" />);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    })
});

// FindBy only works with async / await

// test("should renders text passed into the title", async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
// })

// QueryBy works with negatioon (.not.)

// test("should renders text passed into the title", async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
// })