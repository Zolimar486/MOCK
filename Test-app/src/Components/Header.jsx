import styled from 'styled-components'


const Container = styled.div`
background: url("https://images.pexels.com/photos/14964371/pexels-photo-14964371.jpeg?auto=compress&cs=tinysrgb&w=400");
background-position:right center;
background-size:cover;
background-repeat: no-repeat;
height:70vh;
`

export default function Header(){
    return(
        <Container className="header"></Container>
    )
}