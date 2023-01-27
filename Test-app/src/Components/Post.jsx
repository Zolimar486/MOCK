import styled from 'styled-components'
import {useEffect, useState} from 'react'
import axios from'axios'
import {Link} from 'react-router-dom'

const Container = styled.div`
display:grid;
grid-template-columns:repeat(2, 1fr);
gap:10px;
margin:40px 80px;
`

const Wrapper = styled.div`
flex:1;
margin:5px;
height:70vh;
`

const Image = styled.img`
width:80%;
height:50%;
object-fit:cover;
border-radius:10px;
`

const InfoContainer = styled.div`
margin-top:10px;
padding:10px;
`

const Title = styled.h3`
margin: 5px 0px;
`

const Button = styled.button`
background-color:teal;
padding: .4rem 1.4rem;
border:none;
border-radius:8px;
color:white;
margin:5px 0px;
`





export default function Post(){
    
    const [post, setPost] = useState([])

    useEffect(() => {
       const getPost = async() => {
            try{
                const res = await axios.get('http://localhost:5000/api/post/find')
                setPost(res.data)
            }catch{}
        }

        getPost()
    },[])

    return(
        <Container>
            
            {post.map((item)=> (
                 <Wrapper key={item._id} >
                    
                   <Image src={item.image.url} />
                    
                   <InfoContainer>
                   <Link to={`/post/${item._id}`}>
                   <Title>{item.title}</Title>
                   </Link>
                    <Button>View Now</Button>
                    </InfoContainer>
                  
                 </Wrapper>
               
            ))}
        </Container>
    )
}