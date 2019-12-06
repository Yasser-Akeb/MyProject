import styled from 'styled-components'


export const MediaSection = styled.div`
    height: auto;
    overflow: hidden
`

export const Social = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.social === 1 ? "#3b5998" :""};
    background: ${props => props.social === 2 ? "#498cbf" :""};
    background: ${props => props.social === 3 ? "#cc2127" :""}
`


export const Icon = styled.i`
    width:10%;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 25px

`

export const P = styled.p `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
`

export const Span = styled.span`

    display : block;
    margin: 8px;
    font-weight : ${props => props.info === 2 ? 'normal' : ''}
`
