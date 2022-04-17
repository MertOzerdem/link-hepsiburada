import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton test", () => {
	it("buttonAction", () => {
		const mockCallBack = jest.fn(() => {});
		render(<SubmitButton buttonAction={mockCallBack} />);
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();

		button.click();
		expect(mockCallBack).toHaveBeenCalledTimes(1);
	});
});
