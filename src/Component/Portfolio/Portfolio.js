import React, {useState, useEffect} from 'react'
import axios from 'axios'


import {PortSection, PortfolioTitle, TitSpan, PortfolioList, PortfolioItem, BoxPart, Img, Overlay, OvSpan } from './PortStyle.js'

const Portfolio = () => {

    const [images , setImages] = useState([])

    useEffect ( () => {
        axios.get('js/Data.json').then(res => {setImages( res.data.portfolio)})
    }, [])

    const imageList = images.map(img => {
        return(
            <BoxPart key = {img.id}>
                <Img src={img.image} alt=""/>
                <Overlay>
                    <OvSpan >
                        Show Image
                    </OvSpan >
                </Overlay>
            </BoxPart>
        )
        
    })
    return(
        
        <PortSection>
            <PortfolioTitle><TitSpan>My</TitSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
        
            <div className="box">
                {imageList}
            </div>
        </PortSection>
    )
}

export default Portfolio;