import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("Test <App>", function () {
	beforeEach(function () {
		//ARR
		render(<App />);
	});

	it("renders select a language", () => {
		const linkElement = screen.getByText(/SELECT A LANGUAGE/i);
		expect(linkElement).toBeInTheDocument();
	});

	it("renders US option", function () {
		const el = screen.getByText(/US/i);
		expect(el).toBeInTheDocument();
	});

	it("renders PORTUGUESE option", function () {
		//ASS
		const el = screen.getByText(/PORTUGUESE/i);
		expect(el).toBeInTheDocument();
	});

	it("renders a submit button", function () {
		//ASS
		const btn = screen.getByRole("button", { name: /OK/i });
		expect(btn).toBeInTheDocument();
	});

	it("has an NAME input field", function () {
		//ASS
		const input = screen.getByLabelText(/NAME/i);
		expect(input).toBeInTheDocument();
	});

	it("shows label, button in PORTUGUESE, when click on PT language", async function () {
		//ACT
		const selectPT = screen.getByText(/PORTUGUESE/i);
		fireEvent.click(selectPT);

		//ASS
		await waitFor(function () {
			const translated = screen.getByLabelText(/NOME/i);
			expect(translated).toBeInTheDocument();
			const btn = screen.getByRole("button", { name: /ESTA BEM/i });
			expect(btn).toBeInTheDocument();
		});
	});

	it("shows label in ENGLISH, when click on US language", async function () {
		//ACT
		const selectPT = screen.getByText(/US/i);
		fireEvent.click(selectPT);

		//ASS
		await waitFor(function () {
			const translated = screen.getByLabelText(/NAME/i);
			expect(translated).toBeInTheDocument();
		});
	});
});
