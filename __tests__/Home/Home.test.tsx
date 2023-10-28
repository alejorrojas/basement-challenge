import { render, screen } from "@testing-library/react";
import Home from "../../app/page";
import { getProducts } from "../../app/_utils/index.utils";

// Mock the Cards component
jest.mock("../../components/Card/Card.component", () => () => (
  <div>Mocked Cards</div>
));

//Mock the getProducts function
jest.mock("../../app/_utils/index.utils", () => {
  return {
    getProducts: jest.fn(),
  };
});

describe("Home", () => {
  it("renders successfully", async () => {
    //Mock getProducts implementation
    (getProducts as jest.Mock).mockImplementation(async () => [
      "Product 1",
      "Product 2",
      "Product 3",
    ]);

    //Render the component
    render(await Home());

    const headerImage = screen.getByAltText("basement supply");
    const footerImage = screen.getByAltText("basement footer");
    const cards = screen.getAllByText("Mocked Cards");

    expect(headerImage).toBeInTheDocument();
    expect(footerImage).toBeInTheDocument();
    expect(cards.length).toBe(3);
  });

  describe("renders the proper amount of cards", () => {
    it("should render 2 cards", async () => {
      //Mock getProducts implementation
      (getProducts as jest.Mock).mockImplementation(async () => [
        "Product 1",
        "Product 2",
      ]);

      //Render the component
      render(await Home());

      const cards = screen.getAllByText("Mocked Cards");

      expect(cards.length).toBe(2);
    });
    it("should render 5 cards", async () => {
      //Mock getProducts implementation
      (getProducts as jest.Mock).mockImplementation(async () => [
        "Product 1",
        "Product 2",
        "Product 3",
        "Product 4",
        "Product 5",
      ]);

      //Render the component
      render(await Home());

      const cards = screen.getAllByText("Mocked Cards");

      expect(cards.length).toBe(5);
    });
  });
});
