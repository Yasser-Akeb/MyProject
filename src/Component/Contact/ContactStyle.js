import styled from 'styled-components'


export const Drop = styled.div`
    padding: 50px 0;
    text-align: center
`

export const DropTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px
`

export const Span = styled.span`
    font-weight: normal
`

export const Form = styled.form`
    width: 70%;
    margin: auto;
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    
`

export const FormInput = styled.div`
    overflow: hidden
`

export const FInput = styled(Input)`
    width: 49%;
    float:${props => props.type ==="text" ? "left" : "right"};
`

export const InputSub = styled(Input)`
    width: 100%;
`

export const Textarea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc;
    margin-bottom: 5px;
`
export const Submit = styled(Input)`
    width: 60%;
    background: #fff;
    border: 1px solid #cccf;
    color: #888;
    cursor: pointer 
`
