import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {MediaSection, Social, Icon, P, Span} from './MediaStyle.js'

const SocialMedia = () => {

    const [socials , setSocial] = useState([])

    useEffect (() => {

        axios.get('js/Data.json').then(res => {setSocial(res.data.social)})
       
    }, [])

    const socialList = socials.map(soc => {
        return(
            <Social social = {soc.id} key = {soc.id}>
                <Icon className={soc.icon}></Icon>
                <P>
                    <Span >{soc.title}</Span>
                    <Span info="2">{soc.body}</Span>
                </P>
            </Social>
        )
    })

    return(
            <MediaSection>
                {socialList}
            </MediaSection>

    )
}

export default SocialMedia;