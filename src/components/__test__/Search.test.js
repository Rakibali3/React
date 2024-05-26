import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import ResData from "../mocks/ResData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(ResData);
        }
    })
})

test('should render Body with Seach button', async () => {

    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))   //   When testing, code that causes React state updates or Fetching an API  should be wrapped into act(...):

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(16);

    const SearchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("search");

    fireEvent.change(searchInput, { target: { value: "ca" } });

    fireEvent.click(SearchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(3);
})

test('should render Cards with Top rated restaraunts ', async () => {

    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(16);

    const FilterBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });

    fireEvent.click(FilterBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(12);

})