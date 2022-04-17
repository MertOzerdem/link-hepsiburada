import { render, screen } from "@testing-library/react";
import Link from "./Link";

describe("Link test", () => {
	it("general layout", () => {
		render(<Link />);
		expect(screen.getByText("Default Link")).toBeInTheDocument();
		expect(screen.getByText("0")).toBeInTheDocument();
		expect(screen.getByText("(https://defaultLink.com)")).toBeInTheDocument();
	});

	it("filled layout", () => {
		let index = 0;
		const voteMockCallBack = jest.fn((id, _) => (index = id));
		const deleteMockCallBack = jest.fn();
		const link = {
			id: 1,
			voteCount: 1,
			label: "Test Link",
			link: "https://testLink.com",
			onClickDelete: deleteMockCallBack,
			onClickVote: voteMockCallBack,
		};

		render(<Link {...link} />);

		expect(screen.getByText("Test Link")).toBeInTheDocument();
		expect(screen.getByText("1")).toBeInTheDocument();

		const upvote = screen.getByTestId("upvote");
		const downvote = screen.getByTestId("downvote");

		upvote.click();
		expect(voteMockCallBack).toHaveBeenCalledTimes(1);

		downvote.click();
		expect(voteMockCallBack).toHaveBeenCalledTimes(2);
		expect(index).toBe(1);
	});
});
