import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card test", () => {
	it("card layout", () => {
		const childrenText = "This is a card";
		const card = (
			<Card>
				<div>{childrenText}</div>
				<div data-testid="test" />
			</Card>
		);
		render(card);

		expect(screen.getByText(childrenText)).toBeInTheDocument();
		expect(screen.getByTestId("test")).toBeInTheDocument();
	});

	it("list of child", () => {
		const listItems = ["Newest", "Oldest", "Most popular", "Least popular"];
		const list = listItems.map((item, index) => {
			return (
				<div key={index} className="test-child">
					{item}
				</div>
			);
		});
		const card = <Card>{list}</Card>;
		const { container } = render(card);

		expect(container.getElementsByClassName("test-child")).toHaveLength(4);
	});
});
