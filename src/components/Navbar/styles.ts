import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    padding: 50px 0;

    display: flex;
    align-items: center;
`

export const Logo = styled.h1`
    font-weight: 500;
    font-size: 28px;

    &::after {
        content: attr(data-highlight);
        color: #E95F45
    }
`

export const Links = styled.ul`
    width: 300px;
    margin-left: 140px;
    margin-right: 50px;

    list-style: none;
    font-size: 18px;
    font-weight: 500;

    display: flex;
    justify-content: space-between;
`

export const Button = styled.a`
    background: #333333;
    color: #ffffff;

    padding: 12px 27px;
    border-radius: 100px;
    
    line-height: 100%;
    text-align: center;
    font-size: calc(18px * .66);
    margin-left: auto;
`