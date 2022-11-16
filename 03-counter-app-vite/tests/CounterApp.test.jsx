import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"


describe('Pruebas del couterApp', () => { 
    
    const initialValue = 10;

    test('debe de ahcer match con el snapshot', () => {

        const {container} = render(<CounterApp value={initialValue}></CounterApp>);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100 ', () => {

        render( <CounterApp value={100}></CounterApp>);
        expect(screen.getByText('-1')).toBeTruthy();
    });


    test('debe incrementar con el botón +1', () => {

        render(<CounterApp value={initialValue}></CounterApp>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
        
    });


    test('debe decrementar con el botón -1', () => {

        render(<CounterApp value={initialValue}></CounterApp>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
        
    });

    test('debe funcionar el botón de reset', () => {

        render(<CounterApp value={initialValue}></CounterApp>);

        for(let i=0; i<3;i++){
            fireEvent.click(screen.getByText('+1'));
        }
        
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(initialValue)).toBeTruthy();

    });

 })