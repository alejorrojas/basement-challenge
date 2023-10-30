import { render, screen } from "@testing-library/react";
import Home from "../../app/page";

// Mock the Cards component
jest.mock("../../components/Card/Card.component", () => () => (
  <div>Mocked Cards</div>
));

describe("Home", () => {

  it("renders successfully", async () => {
    render(await Home());

    const headerImage = screen.getByAltText("basement supply");
    const footerImage = screen.getByAltText("basement footer");
    const cards = screen.getAllByText("Mocked Cards");

    screen.debug()

    expect(headerImage).toBeInTheDocument();
    expect(footerImage).toBeInTheDocument();
    expect(cards.length).toBe(3);
  });

});
