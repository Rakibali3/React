import { act, fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/ResMenu.json";
import ResturantMenu from "../ResturantMenu";
import Header from "../Header";
import Cart from "../Cart";
import ItemData from "../ItemData";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

test('should render cart component ', async () => {
    await act(async () => render(
        <BrowserRouter >
            <Provider store={appStore}>
                <ResturantMenu data={MOCK_DATA} />
                <Header />
                <Cart />
            </Provider>
        </BrowserRouter>
    )
    )
    const name = screen.getByText("Regular Dosas (12)");

    fireEvent.click(name)

    const Menu = screen.getAllByTestId("item-data")

    expect(Menu.length).toBe(12);

})

test('should Add items to the cart component ', async () => {
    await act(async () => render(
        <BrowserRouter >
            <Provider store={appStore}>
                <ResturantMenu data={MOCK_DATA} />
                <Header />
                <Cart />
            </Provider>
        </BrowserRouter>
    )
    )
    const name = screen.getByText("Regular Dosas (12)");

    fireEvent.click(name)

    const MenuCards = screen.getAllByTestId("item-data")

    expect(MenuCards.length).toBe(12)

    const AddBtn = screen.getAllByRole("button", { name: "Add" });

    fireEvent.click(AddBtn[0]);

    expect(screen.getByText("(1-Items)")).toBeInTheDocument();

})

test('should Add  more items  to the cart component ', async () => {
    await act(async () => render(
        <BrowserRouter >
            <Provider store={appStore}>
                <ResturantMenu data={MOCK_DATA} />
                <Header />
                <Cart />
            </Provider>
        </BrowserRouter>
    )
    )
    const name = screen.getByText("Regular Dosas (12)");

    fireEvent.click(name)

    const MenuCards = screen.getAllByTestId("item-data")

    expect(MenuCards.length).toBe(13)

    const AddBtn = screen.getAllByRole("button", { name: "Add" });

    fireEvent.click(AddBtn[1]);

    expect(screen.getByText("(2-Items)")).toBeInTheDocument();

})

test('should Add Items to cart component ', async () => {
    await act(async () => render(
        <BrowserRouter >
            <Provider store={appStore}>
                <ResturantMenu data={MOCK_DATA} />
                <Header />
                <Cart />
            </Provider>
        </BrowserRouter>
    )
    )
    const name = screen.getByText("Regular Dosas (12)");

    fireEvent.click(name)

    const MenuCards = screen.getAllByTestId("item-data")

    expect(MenuCards.length).toBe(14)

})

test('should check Clear Cart Button', async () => {
    await act(async () => render(
        <BrowserRouter >
            <Provider store={appStore}>
                <ResturantMenu data={MOCK_DATA} />
                <Header />
                <Cart />
            </Provider>
        </BrowserRouter>
    )
    )
    const name = screen.getByText("Regular Dosas (12)");

    fireEvent.click(name)

    const MenuCards = screen.getAllByTestId("item-data")

    expect(MenuCards.length).toBe(14)

    const ClearCartBtn = screen.getByRole("button",{name:"Clear Cart"})

    fireEvent.click(ClearCartBtn);

    const MenuCardsAfterClearCart = screen.getAllByTestId("item-data")

    expect(MenuCardsAfterClearCart.length).toBe(12);

})




