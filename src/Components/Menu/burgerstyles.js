import styled from 'styled-components';

export const Menu = styled.div `
    background: #fff;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: 25px;
    right: 25px;
`
export const Hamburguer = styled.span `
    position: relative;
    display: block;
    background: #000;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
    
    /* & concatena o hash criado pelo styled components*/
    &:before,
    &:after {
        background: #000;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.5s ease-in-out;
    }

    &:before {
        top: -10px;
    }

    &:after {
        bottom: -10px;
    }

    ${({ checked }) => checked && styled.css`
        transform: rotate(45deg);

        &:before {
            top: 0;
            transform: rotate(90deg);
        }
        
        &:after {
            transform: rotate(90deg);
            bottom: 0;
        }
    `}
`

export const Input = styled.input `
    display: none;
`