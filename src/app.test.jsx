import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renderiza la barra de navegación", () => {
  render(<App />);
  const navbarText = screen.getByText(/Mis Curiosidades/i);
  expect(navbarText).toBeInTheDocument();
});
