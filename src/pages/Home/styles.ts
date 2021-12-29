import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    
    width: calc(100vw - 50px * 2);
    flex-grow: 1;
    margin: 0 auto;

    section {
        width: 100%;
        flex-grow: 1;
        display: flex;

        div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-weight: 300;
                color: #333333;
                font-size: 120px;
                line-height: 98%
            }
        }
    }
`

export const Form = styled.form`
    position: relative;

    input {
        height: 80px;
        width: 100%;
    }

    button {
        position: absolute;
        right: 12px;
        top: 12px;
        bottom: 12px;
        height: calc(90% - (12px + 12px / 2));
    }
`

export const Image = styled.img`
    height: 100%;
    position: absolute;
    top: 20px;
    right: 0;
`