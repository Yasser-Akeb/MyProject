import React from 'react'
import {Link} from 'react-router-dom'

import {NavbarSection, Logo, LogoText, UlList, ListItem, Lien} from './NavStyle.js'

const Navbar = () => {
    return(
        <div>
           
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText className="logo-text">Ultra Profile</LogoText>
                </Logo>
                
                
                <UlList>
                    <ListItem><Link className="link" to = '/'>Home</Link></ListItem>
                    <ListItem><Lien href="#">Work</Lien></ListItem>
                    <ListItem><Lien href="#">Portfolio</Lien></ListItem>
                    <ListItem><Lien href="#">Resume</Lien></ListItem>
                    <ListItem><Lien href="#">About</Lien></ListItem>
                    <ListItem><Link className="link" to = '/Contact'>Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
        </div>
    )
}

export default Navbar;