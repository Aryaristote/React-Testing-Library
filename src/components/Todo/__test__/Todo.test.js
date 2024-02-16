import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Todo from "../Todo";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

//A ffunction to check if we're having all tasks in stead of checking if one by one was added.
const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    //For each task execute the down codes.
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: "Any task name" } })
        fireEvent.click(buttonElement)
    });
}

describe("Todo", () => {
    it("should renders added task to the list", async () => {
        render(<MockTodo />);
        addTask(["Any task name"])

        const divElement = screen.getByText(/Any task name/i);
        expect(divElement).toBeInTheDocument();
    })

    it("should renders added differentss tasks to the list", async () => {
        render(<MockTodo />);
        addTask(["Any task name", "Another task name", "One more task name"]) //In case then we have a different task added to the list.

        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(3);
    })

    it("task should not have completed class when initially render", async () => {
        render(<MockTodo />);
        addTask(["Any task name"])
        const divElement = screen.getByText(/Any task name/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    })

    it("task should have completed class when clicked", async () => {
        render(<MockTodo />);
        addTask(["Any task name"])

        const divElement = screen.getByText(/Any task name/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    })
})