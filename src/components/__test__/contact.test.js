import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe is used to divide the tescases based on the work ,so that we dont have any confusion that what the test case is doing if we have lot of test cases.
describe("checking whether heading is loaded or not in contact component", () => {  
    it("contact page is loaded or not", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    })
    //Test case 2 , 3 and so on...
})

describe("checking whether button is loaded or not in contact component", () => {
    test("Button is there is contact component", () => {
        render(<Contact />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    })
    //Test case 2 , 3 and so on...
})


