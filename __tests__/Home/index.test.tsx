  import { render, screen } from "@testing-library/react";
import Home from "../../app/page";

describe("Home", () => {
  it("renders the header image", async() => {
    render(await Home());

    const headerImage = screen.getByAltText("Basement Supply");

    expect(headerImage).toBeInTheDocument();
  });
});
