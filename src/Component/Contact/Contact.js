import React, {Fragment} from 'react'
import Footer from './../Footer/Footer.js'
import {Drop, DropTitle, Span, Form, FormInput, FInput, InputSub, Textarea,Submit } from './ContactStyle.js'

const Contact = () => {
    return(
       
       <Fragment>
            <Drop>
                    <div className="container">
                        <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                        <Form action="">
                            <FormInput>
                                <FInput type="text" placeholder="Your Name"/>
                                <FInput type="email" placeholder="Your Email"/>
                            </FormInput>
                            <InputSub type="text"  placeholder="Your Subject"/>
                            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                            <Submit type="submit" value="Send Message"/>
                        </Form>
                    </div>
            </Drop>
            <Footer/>
         </Fragment>
        
    )
}

export default Contact;