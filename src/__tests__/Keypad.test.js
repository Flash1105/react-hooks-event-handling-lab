import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";


let container;

beforeEach(() => {
  container = render().container;
});

test("displays one input", () => {
  const input = container.querySelector("input");
  expect(input);
  expect(input);
});

test("displays an input with the right input type", () => {
  const input = container.querySelector("input");
  expect(input);
});

test("typing in the input triggers console output", () => {
  console.log = jest.fn();

  const input = container.querySelector("input");
 

 
  
});
