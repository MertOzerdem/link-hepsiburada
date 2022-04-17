import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal test", () => {
	it("general layout", () => {
		render(<Modal />);
		expect(screen.getByText("Modal header")).toBeInTheDocument();
		expect(screen.getByText("Modal Label")).toBeInTheDocument();
		expect(screen.getByText("Modal Text")).toBeInTheDocument();
		expect(screen.getByText("Yes")).toBeInTheDocument();
		expect(screen.getByText("No")).toBeInTheDocument();
	});

	it("filled layout", () => {
		const positiveMockCallBack = jest.fn(() => {});
		const negativeMockCallBack = jest.fn(() => {});
		const modal = {
			header: "Test Header",
			text: "Test Text",
			label: "Test Label",
			positive: "OK",
			negative: "Cancel",
			onClickPositive: positiveMockCallBack,
			onClickNegative: negativeMockCallBack,
		};

		render(<Modal {...modal} />);

		expect(screen.getByText("Test Header")).toBeInTheDocument();
		expect(screen.getByText("Test Text")).toBeInTheDocument();
		expect(screen.getByText("Test Label")).toBeInTheDocument();
		expect(screen.getByText("OK")).toBeInTheDocument();
		expect(screen.getByText("Cancel")).toBeInTheDocument();

		const positive = screen.getByTestId("positive");
		const negative = screen.getByTestId("negative");

		positive.click();
		expect(positiveMockCallBack).toHaveBeenCalledTimes(1);

		negative.click();
		expect(negativeMockCallBack).toHaveBeenCalledTimes(1);
	});
});
