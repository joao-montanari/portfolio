import { render } from "@testing-library/react";
import "@testing-library/dom";

import Header from ".";
describe('Header', () => {

    beforeEach(() => {
        render(
            <Header/>
        );
    });

    it('Should render correctly', () => {
        render(
            <Header/>
        );
    });

    // it('Todo Header text is render', () => {
    //     expect(screen.getByAltText('hello')).toBeInTheDocument();
    // });
});