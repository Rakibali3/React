import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load Header component with button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Login" });

    expect(button).toBeInTheDocument();
});

test("should load Header component with cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const button = screen.getByRole("link",{name:"(0-Items)"});
    // const cartItems = screen.getByText(/Items/);
    const cartItems = screen.getByText("(0-Items)");

    expect(cartItems).toBeInTheDocument();
});

test("should change Login Button to Logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const LoginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(LoginButton);
    const LogoutButton = screen.getByRole("button", { name: "Logout" });

    expect(LoginButton).toBeInTheDocument();
});
