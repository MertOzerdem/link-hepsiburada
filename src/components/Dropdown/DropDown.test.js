import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Dropdown from "./Dropdown";

describe("Dropdown test", () => {
	it("Label click", () => {
		let key = 0;
        const listItems = ["Newest", "Oldest", "Most popular", "Least popular"];
		const mockCallBack = jest.fn((index) => (key = index));
		const dropdown = (
			<Dropdown list={listItems} onClickSort={mockCallBack} />
		);
		render(dropdown);

		expect(screen.getByText("Order by")).toBeInTheDocument();

		const label = screen.getByTestId("label");
		expect(label).toBeInTheDocument();

		act(() => {
			label.click();
		});

		expect(screen.getByText(listItems[0])).toBeInTheDocument();
		expect(screen.getByText(listItems[1])).toBeInTheDocument();

		act(() => {
			screen.getByText(listItems[2]).click();
		});

		expect(key).toBe(2);
	});
});
