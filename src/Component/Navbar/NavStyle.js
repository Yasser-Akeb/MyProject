import styled from 'styled-components'


export const NavbarSection = styled.div`
    padding:  0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export const Logo = styled.div`
    width: 50%;
    float: left;
`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color : #eb5424;
    padding: 10px 0 10px;
    margin: 0;
`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 10px 0 10px 0;
    margin : 0px;
`

export const ListItem =styled.li`
    display: inline-block;
`

export const  Lien = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424
    }
`



