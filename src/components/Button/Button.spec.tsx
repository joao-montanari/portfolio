import { render, screen } from "@testing-library/react";
import Button from ".";
import "@testing-library/jest-dom";

describe('Button', () => {
    
    beforeEach(() => {
        render(
            <Button label="Click me" onClick={() => {}}/>
        );
    });

    it('Should render correctly', () => {
        render(
            <Button label="Click me" onClick={() => {}}/>
        );
    });

    it('Todo Button text is render', () => {
        expect(screen.getByText('Click me')).toBeInTheDocument();
    })
});