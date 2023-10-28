import { render, screen } from "@testing-library/react";
import { Card } from "components/Card";
import { fakeProduct } from "../../data/tests.mock";

describe("Card", () => {
  it("renders the proper information", () => {
    render(<Card {...fakeProduct} />);

    const name = screen.getByText(fakeProduct.name);
    const price = screen.getByText("$ " + fakeProduct.price);
    const img = screen.getByAltText(fakeProduct.name);

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
