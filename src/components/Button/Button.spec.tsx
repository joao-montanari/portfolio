import { render, screen } from "@testing-library/react";
import Button from ".";
import "@testing-library/jest-dom";

describe('Button component', () => {
    
    beforeEach(() => {
        render(
            <Button label="Click me" onClick={() => {}}/>
        );
    });

    it('Render Button', () => {
        render(
            <Button label="Click me" onClick={() => {}}/>
        );
    });
});