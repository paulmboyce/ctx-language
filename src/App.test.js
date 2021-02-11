import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("Test <App>", function () {
	beforeEach(function () {
		//ARR
		render(<App />);
	});

	it("renders select a language", () => {
		expect(screen.getByText(/SELECT A LANGUAGE/i)).toBeInTheDocument();
	});

	it("renders US option", function () {
		expect(screen.getByText(/US/i)).toBeInTheDocument();
	});

	it("renders PORTUGUESE option", function () {
		//ASS
		const el = screen.getByText(/PORTUGUESE/i);
		expect(el).toBeInTheDocument();
	});

	it("renders a submit button", function () {
		//ASS
		expect(screen.getByRole("button", { name: /OK/i })).toBeInTheDocument();
	});

	it("has an NAME input field", function () {
		//ASS
		expect(screen.getByLabelText(/NAME/i)).toBeInTheDocument();
	});

	it("shows label, button in PORTUGUESE, when click on PT language", async function () {
		//ACT
		fireEvent.click(screen.getByText(/PORTUGUESE/i));

		//ASS
		await waitFor(function () {
			expect(screen.getByLabelText(/NOME/i)).toBeInTheDocument();
			expect(
				screen.getByRole("button", { name: /ESTA BEM/i })
			).toBeInTheDocument();
		});
	});

	it("shows label in ENGLISH, when click on US language", async function () {
		//ARR
		fireEvent.click(screen.getByText(/PORTUGUESE/i));
		//ACT
		fireEvent.click(screen.getByText(/US/i));

		//ASS
		await waitFor(function () {
			expect(screen.getByLabelText(/NAME/i)).toBeInTheDocument();
		});
	});
});
