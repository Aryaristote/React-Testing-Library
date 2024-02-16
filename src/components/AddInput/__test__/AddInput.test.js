import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

//Mock a function passed as a props.
const MockedSetTodos = jest.fn();

describe("AddInput", () => {
    it("should renders input element", async () => {
        render(<AddInput todos={[]} setTodos={MockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        expect(inputElement).toBeInTheDocument();
    })

    it("should be able to type in input", async () => {
        render(<AddInput todos={[]} setTodos={MockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

        fireEvent.change(inputElement, { target: { value: "Any task name" } })
        expect(inputElement.value).toBe("Any task name");
    })

    it("should be  to type in input", async () => {
        render(<AddInput todos={[]} setTodos={MockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i });

        fireEvent.change(inputElement, { target: { value: "Any task name" } })
        fireEvent.click(buttonElement) //By clicking we expect inputElement.value to be empty.
        expect(inputElement.value).toBe("");
    })
})