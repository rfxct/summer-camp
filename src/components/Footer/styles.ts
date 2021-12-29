import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Card = styled.div`
  width: 27%;
  word-wrap: break-word;
  display: flex;
  align-items: center;

  h1 { 
    color: #E95F45;
    font-size: 5.3rem;
    font-weight: 300;
    margin-right: 12px;
  }

  p {
    color: #333;
    font-size: 14px;
  }
`
