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
  margin-top: 20px;
  position: relative;

  input {
    height: 80px;
    width: 100%;

    color: #c4c4c4;
    background-color: #fff;
    outline: none;
    border: 2px solid #fff;

    border-radius: 10px;
    padding: 10px 30px;

    transition: all .3s;
    &:focus {
      border: 2px solid #E95F45;
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 12px;
    bottom: 12px;
    height: calc(90% - (12px + 12px / 2));
    z-index: 2;

    background: linear-gradient(90deg, #F48743 0.03%, #F35E41 100.14%);
    box-shadow: 0 0 8px 0 #F48743;
    padding: 20px 40px;

    line-height: 100%;
    color: #fff;
    border: 0;
    outline: none;
    border-radius: 15px;

    &:hover { cursor: pointer; }
  }
`

export const Image = styled.img`
  height: 100%;
  position: absolute;
  top: 20px;
  right: 0;
  z-index: -1;
`
