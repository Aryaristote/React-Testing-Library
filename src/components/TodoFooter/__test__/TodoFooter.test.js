import { screen, render } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

//When you want to use routers outside of compoonents.
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {
    it("should renders the correct amount of imcomplete tasks", async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />); //5 is just a var that must match with /var tasks left/
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    })

    it("should renders 'task' if number of imcomplete task is equal to 1", async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />); //5 is just a var that must match with /var tasks left/
        const paragraphElement = screen.getByTestId("taskId");
        expect(paragraphElement.textContent).toBe("1 task left");
    })
})