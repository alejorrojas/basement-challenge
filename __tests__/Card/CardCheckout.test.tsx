import { render, screen } from "@testing-library/react";
import { CardCheckout } from "../../components/Card";
import { useLocalStorage } from "usehooks-ts";
import { fakeProduct, fakeProductsCheckout } from "../../data/tests.mock";

//Mock the useLocalStorage hook in order to avoid localStorage implementation
jest.mock("usehooks-ts", () => {
  return {
    useLocalStorage: jest.fn(),
  };
});

describe("Card checkout", () => {
  it("renders the proper information", () => {
    //Mock the useLocalStorage
    (useLocalStorage as jest.Mock).mockImplementation(() => [
      fakeProductsCheckout,
      jest.fn(),
    ]);
    render(<CardCheckout {...fakeProduct} />);

    const name = screen.getByText(fakeProduct.name.toUpperCase());
    const description = screen.getByText(fakeProduct.description);
    const price = screen.getByText("$" + fakeProduct.price);
    const quantity = screen.getByTestId("quantity");
    const sizes = screen.getAllByTestId("size");

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity.textContent).toBe("1");
    expect(sizes.length).toBe(4);
  });
});
