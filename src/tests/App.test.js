import React from "react";
import {
  render,
  fireEvent,
  screen,
  cleanup,
  act,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
// import availableFilter from "./mocks/availableFilter.json";
// import candidate from "./mocks/availableFilter.json";

let containter;

beforeEach(() => {
  containter = render(<App />);
});

afterEach(function () {
  // nock.cleanAll();
  cleanup();
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//TODO add a mock lib

describe("Test main and child components", () => {
  describe("Render initial screen", () => {
    test("renders filter", () => {
      const filterTitle = screen.getByText(/Localize um candidato/i);
      expect(filterTitle).toBeInTheDocument();
    });

    test("renders filter button", () => {
      const filterButton = screen.getByText(/Filtrar/i);
      expect(filterButton).toBeInTheDocument();
    });

    test("renders loading list", () => {
      const stkeletonElements = document.querySelectorAll(".MuiSkeleton-pulse");
      expect(stkeletonElements.length).toBe(16);
    });

    test("renders cards on first access", async () => {
      await act(() => sleep(500));
      const firstCandidate = await screen.findByText(/Candidato #31562/i);
      expect(firstCandidate).toBeInTheDocument();

      const lastCandidate = await screen.findByText(/Candidato #63520/i);
      expect(lastCandidate).toBeInTheDocument();
    });

    test("renders 20 cards on first access", async () => {
      await act(() => sleep(500));
      const candidateCards = await screen.findAllByText(/Candidato #/i);
      expect(candidateCards.length).toBe(20);
    });
  });

  describe("Interact with filter", () => {
    test("filter without set fields", async () => {
      const filterButton = screen.getByText(/Filtrar/i);
      fireEvent.click(filterButton);

      await act(() => sleep(500));

      expect(filterButton).not.toBeInTheDocument();
    });

    // test("filter with city", async () => {
    //   await act(() => sleep(500));


    //   const autocomplete = screen.getByTestId('autocomplete');
    //   const input = within(autocomplete).querySelector('input')
   
    //   autocomplete.focus()
    //   // assign value to input field
    //   fireEvent.change(input, { target: { value: "Blumenau - SC" } })
    //   await act(() => sleep(500));
    //   // navigate to the first item in the autocomplete box
    //   fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
    //   await act(() => sleep(500));
    //   // select the first item
    //   fireEvent.keyDown(autocomplete, { key: 'Enter' })
    //   await act(() => sleep(500));



    //   // const cityInput = document.querySelector("input");
    //   // fireEvent.change(cityInput, {
    //   //   target: { value: "Blumenau - SC" },
    //   // });

    //   // const cityPopper = document.querySelector(".MuiAutocomplete-option");

    //   // fireEvent.click(cityInput);
    //   // const { getByText: getByBodyText } = within(document.body);
    //   // const option = getByBodyText("Blumenau");

    //   // expect(option).toBeInTheDocument();
    //   // fireEvent.click(option);

    //   const filterButton = screen.getByText(/Filtrar/i);
    //   fireEvent.click(filterButton);
    //   await act(() => sleep(500));

    //   const cityFiltered = await screen.findByText(/Cidades: Blumenau - SC/i);
    //   expect(cityFiltered).toBeInTheDocument();

    //   const candidateCards = await screen.findAllByText(/Candidato #/i);
    //   expect(candidateCards.length).toBe(3);
    // });
  });
});
