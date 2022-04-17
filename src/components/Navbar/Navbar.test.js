import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar test", () => {
	it("general layout", () => {
		render(<Navbar />);
		expect(screen.getByTestId("navbar")).toBeInTheDocument();
	});
});
