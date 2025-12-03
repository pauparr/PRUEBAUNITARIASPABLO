import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe('FormUsuario componente', () => {

    beforeEach(() => {
        render(<FormUsuario />);
    });

    it('comprueba que se renderiza el botón', () => {
        const button = screen.getByRole('button', { name: /submit/i });
        expect(button).toBeInTheDocument();
    });

    it('comprueba que se renderiza el campo de texto', () => {
        const textField = screen.getByRole('input'); // Assuming role="input" is added to TextField as per component code
        expect(textField).toBeInTheDocument();
    });

    it('comprueba que se renderiza la cabecera de nivel 2', () => {
        const header = screen.getByRole('heading', { level: 2 });
        expect(header).toBeInTheDocument();
    });

    it('comprueba que cuando el usuario escribe su nombre y pica en el botón se borra su nombre', async () => {
        const user = userEvent.setup();
        // TextField de MUI renderiza un input con role="textbox" por defecto.
        // Usamos getByRole('textbox') para interactuar con el input real.
        const textField = screen.getByRole('textbox', { name: /nombre/i });
        const button = screen.getByRole('button', { name: /submit/i });

        // 2. Simular que el usuario borra el campo de texto
        await user.clear(textField);

        // 3. Simular que el usuario escribe algo
        await user.type(textField, 'Juan');
        expect(textField).toHaveValue('Juan');

        // 4. Simular que el usuario pica el botón
        await user.click(button);

        // Comprobar que se ha borrado
        expect(textField).toHaveValue('');
    });
});
