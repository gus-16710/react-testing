// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

//Establish API mocking before all test.
beforeAll(() => server.listen());

//Reset any request handler that we may add during the tests,
//So they dont affect other tests.
afterEach(() => server.resetHandlers());

//Clean up after the tests are finished
afterAll(() => server.close());
