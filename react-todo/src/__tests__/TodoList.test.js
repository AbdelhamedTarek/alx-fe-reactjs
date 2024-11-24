import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList with initial todos", () => {
  render(<TodoList />);

  // Check if initial todos are displayed
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  expect(screen.getByText("Write Tests")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);

  // Add a new todo
  fireEvent.change(screen.getByPlaceholderText("Enter new todo"), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText("Add Todo"));

  // Check if the new todo appears in the list
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles todo completion status", () => {
  render(<TodoList />);

  const todo = screen.getByText("Learn React");

  // Initial state should not have a line-through
  expect(todo).not.toHaveStyle("text-decoration: line-through");

  // Click to toggle completion
  fireEvent.click(todo);

  // Now it should have a line-through
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);

  const todo = screen.getByText("Learn React");
  const deleteButton = todo.querySelector("button");

  // Click the delete button
  fireEvent.click(deleteButton);

  // Check if the todo is no longer in the document
  expect(todo).not.toBeInTheDocument();
});
