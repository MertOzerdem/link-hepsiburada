import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert test", () => {
	it("labels check", () => {
        const item = "item";
        const action = "action";
		const alert = <Alert item={item} action={action} />;
		render(alert);

		expect(screen.getByText(item.toUpperCase())).toBeInTheDocument();
        expect(screen.getByText(action)).toBeInTheDocument();
	});
});
