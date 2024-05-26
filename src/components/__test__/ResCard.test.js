import { render, screen } from "@testing-library/react"
import ResturantCard, { ResturantCardWithPromoted } from "../ResturantCard";
import Mock_Data from "../mocks/Mock_Data.json";
import promotedData from "../mocks/promotedData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test('should render cards on to webpage', () => {
    render(
        <BrowserRouter>
            <ResturantCard resData={Mock_Data} />
        </BrowserRouter>
    )

    const name = screen.getByText("Dadu's");

    expect(name).toBeInTheDocument();
})


test('should render Promoted cards on to webpage', () => {
    render(
        <BrowserRouter>
            <ResturantCard resData={promotedData} />
        </BrowserRouter>
    )

    const Pname = screen.getByText("KFC");

    expect(Pname).toBeInTheDocument();
})

