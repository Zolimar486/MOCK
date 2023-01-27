import styled from 'styled-components'
import Header from '../Components/Header'
import Post from '../Components/Post'


const Container = styled.div`

`

export default function Home(){
    
    

    return(
        <Container className="home">
            <Header/>
            <Post />
            
            </Container>
    )
}