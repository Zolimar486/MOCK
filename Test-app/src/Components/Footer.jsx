import styled from 'styled-components'


const Container = styled.div`
grid-area:footer;
border:1px solid black;
text-align:center;
`

export default function Footer(){
    return(
        <Container className="footer">Footer</Container>
    )
}