import styled from 'styled-components'


const Container= styled.div`
grid-area:sidebar;
border:1px solid black;
text-align:center;
`

export default function Sidebar(){
    return(
        <Container className="sidebar">Sidebar</Container>
    )
}