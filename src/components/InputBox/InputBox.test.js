import { fireEvent, render, screen } from "@testing-library/react";
import InputBox from "./InputBox";

describe("InputBox test", () => {
	it("placeholder", () => {
		const placeholder = "Enter your name";
		render(<InputBox holder={placeholder} />);
		expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
	});

	it("onChange", () => {
		const onChange = jest.fn();
		const placeholder = "Enter your name";
		const { getByPlaceholderText } = render(<InputBox holder={placeholder} onChange={onChange} />);
		const input = getByPlaceholderText(placeholder);
		fireEvent.change(input, { target: { value: "test" } });
		expect(input.value).toBe("test");
	});
});
