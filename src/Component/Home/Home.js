import React from 'react'
import {HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, Span, HomeBtn} from './HomeStyle.js'

const Home = () => {
    return(
        <div>
             <HomeSection> 
                <div className="container">
                    <HomeInformation>
                         <HomeTitle>Yasser Akeb</HomeTitle>
                        <HomeInfo>Creative Director</HomeInfo>
                        <HomeDesc >
                            Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                        </HomeDesc >
                        <HomeBtn>Let's Begin</HomeBtn> 
                    </HomeInformation>
                </div>
             </HomeSection> 
        </div>
    )
}

export default Home;