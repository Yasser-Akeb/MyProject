import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {ProfSkillSection, Profile, ProfileList, ProfileItem, ItemSpan, WebSpan, Skills, SkillsDesc, Bar, Title, Perc, Parent,ParentSpan,  ProfileTitle, SkillsTitle, TitleSpan } from './ProfilStyle.js'



const ProfileSkills = () => {

    const [skills, setSkills] = useState([])

    useEffect ( () => {
        axios.get('Js/Data.json').then(res => {setSkills(res.data.skills)})
    }, [])

    const skillsList = skills.map(skill => {
        return(
            <Bar key = {skill.id}>
            <Title >{skill.title}</Title>
            <Perc>{skill.Perc}</Perc>
            <Parent>
                <ParentSpan sp = {skill.id}></ParentSpan>
            </Parent>
        </Bar>
        )
    })
    return(
        <ProfSkillSection>
            <div className="container">
                <Profile>
                    <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ItemSpan>Name</ItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Birthday</ItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Address</ItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Phone</ItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Email</ItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Website</ItemSpan>
                            <WebSpan>www.google.com</WebSpan>
                        </ProfileItem>
                    </ProfileList>
                </Profile>
                
                <Skills>
                    <SkillsTitle>Some <TitleSpan>skills</TitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {skillsList}
                </Skills>
                
            </div>
        </ProfSkillSection>
        
    )
}

export default ProfileSkills;