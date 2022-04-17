import { fireEvent, render, screen } from "@testing-library/react";
import LabelGenerator from "./LabelGenerator";

describe("LabelGenerator test", () => {
	it("generateTarget", () => {
		const testSettings = {
			label: "test $0 label",
			generateTarget: [
				{
					target: "$0",
					component: <div>generated</div>,
				},
			],
		};

		render(<LabelGenerator labelSettings={testSettings} />);

		expect(screen.getByTestId("label-generator")).toBeInTheDocument();
		expect(screen.getByText("generated")).toBeInTheDocument();
	});

	it("LabelGenerator: labelSettings.label is required", () => {
		const testSettings = {};

		expect(() => render(<LabelGenerator labelSettings={testSettings} />)).toThrow(
			"LabelGenerator: labelSettings.label is required"
		);
	});

	it("labelSettings.generateTarget is required", () => {
		const testSettings = {
			label: "test $0 label",
		};

		expect(() => render(<LabelGenerator labelSettings={testSettings} />)).toThrow(
			"LabelGenerator: labelSettings.generateTarget is required"
		);
	});

	it("labelSettings.generateTarget.target is required", () => {
		const testSettings = {
			label: "test $0 label",
			generateTarget: [
				{
					component: <div>generated</div>,
				},
			],
		};

		expect(() => render(<LabelGenerator labelSettings={testSettings} />)).toThrow(
			"LabelGenerator: labelSettings.generateTarget.target is required"
		);
	});

	it("labelSettings.generateTarget.component is required", () => {
		const testSettings = {
			label: "test $0 label",
			generateTarget: [
				{
					target: "$0",
				},
			],
		};

		expect(() => render(<LabelGenerator labelSettings={testSettings} />)).toThrow(
			"LabelGenerator: labelSettings.generateTarget.component is required"
		);
	});
});
