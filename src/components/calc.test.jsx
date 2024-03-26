import React from "react";
import Calculator from "./calc";
import {render, fireEvent} from '@testing-library/react'

describe("Teste calculadora", () => {
    test("Soma de 2+5", ()=> {
        let calc = render( < Calculator />)
        const{getByText, getByTestId} = calc
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('='));
        expect (getByTestId('display_test_id')).toHaveValue('7');
    })

    it("Subtrair de 10-5", () => {
        let calc = render( < Calculator />)
        const{getByText, getByTestId} = calc
        fireEvent.click(getByText('9'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('='));
        expect (getByTestId('display_test_id')).toHaveValue('4');
    })

    it("Multiplicação de 5*5", () => {
        let calc = render( < Calculator />)
        const{getByText, getByTestId} = calc
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('×'));
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('='));
        expect (getByTestId('display_test_id')).toHaveValue('25');
    })
    it("Divisão de 4/2", () => {
        let calc = render( < Calculator />)
        const{getByText, getByTestId} = calc
        fireEvent.click(getByText('4'));
        fireEvent.click(getByText('÷'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('='));
        expect (getByTestId('display_test_id')).toHaveValue('2');
    })

    it("Testar a operação de limpar", () => {
        let calc = render( < Calculator />)
        const{getByText, getByTestId} = calc
        fireEvent.click(getByText('4'));
        fireEvent.click(getByText('C'));
        expect (getByTestId('display_test_id')).toHaveValue('');
    })

    it("Deve retornar um excessão por ser uma divisão por 0", () => {
        let calc = render( < Calculator />)
        const{getByText, getByTestId} = calc
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('÷'));
        fireEvent.click(getByText('0'));
        fireEvent.click(getByText('='));
        expect (getByTestId('display_test_id')).toHaveValue('Infinity');
    })
    it("Deve retornar um erro operação", () => {
        let calc = render( < Calculator />)
        const{getByText, getByTestId} = calc
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('÷'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('='));
        expect (getByTestId('display_test_id')).toHaveValue('Error');
    })
})