import { render, screen } from "@testing-library/react";
import TextBox2 from "../components/TextBox2";
import userEvent from "@testing-library/user-event";

describe('TextBox2 componente', () => {

    let box;
    let button;
    beforeEach(() => {
        render(<TextBox2 />);
        box = screen.getByRole('caja', { name: 'es una caja' });
        button = screen.getByRole('button', { name: 'Pulsa para modificar el color del texto' });
    });

    it('la caja se renderiza', () => {
        expect(box).toBeInTheDocument();
    });

    it('el botón se renderiza', () => {
        expect(button).toBeInTheDocument();
    });

    it('al pulsar el botón cambia el color del texto', async () => {
        // Estado inicial: color rosa
        expect(box).toHaveStyle({
            color: 'rgb(255, 192, 203)'
        });

        const user = userEvent.setup();
        await user.click(button);

        // Estado tras click: color negro
        expect(box).toHaveStyle({
            color: 'rgb(0, 0, 0)'
        });
    });
});
