import styled from 'styled-components'
import {RiUploadCloudLine} from 'react-icons/ri'
import {useState} from 'react'
import axios from 'axios'

const Container = styled.div`
margin:10px 120px;
`

const Wrapper = styled.div`
padding:10px;
`

const Image = styled.img`
width:100%;
height:280px;
`
const Span= styled.span``

const Form = styled.form``

const Section = styled.div`
display:flex;
align-items:center;

`

const Label = styled.label`


`

const Input = styled.input`
margin: 0px 5px;
padding:20px;
border:none;
outline:none;
border-bottom:1px solid gray;
font-size:30px;
color:gray;
`

const TextArea = styled.textarea`
padding:20px;
border:none;
outline:none;
border-bottom:1px solid gray;
font-size:25px;
color:gray;
margin:5px 0px;
`

const Div= styled.div``

const Button = styled.button`
margin-top:20px;
background-color:lightcoral;
padding: .4rem 1.4rem;
border:none;
border-radius:10px;
color:white;
`

export default function Write(){
       
    const [postImg, setPostImg] = useState("")
    const [title, setTitle] = useState("")
    

    const handleImageUpload = (e)=> {
       const file = e.target.files[0]
       
       TransformFile(file)
    }

    const TransformFile = (file) => {
       const reader = new FileReader()

       if(file){
         reader.readAsDataURL(file)
         reader.onloadend = () => {
          setPostImg(reader.result)
          }
        }else{
          setPostImg("")
        }
    }

    const handleSubmit= async(e)=> {
      e.preventDefault()


      try{
        const res = await axios.post('http://localhost:5000/api/post/', {
          title,
          image :postImg
        })

      window.location.replace('/post/' + res.data._id )

      }catch(err){}

    }

    return(
        <Container>
            <Wrapper>
               {postImg ? (
                 <Image src={postImg}/>
               ) : (<Span>Preview will appear</Span>)}
                <Form onSubmit={handleSubmit}>
                <Section>
                  <Label htmlFor="file">
                    <RiUploadCloudLine style ={{fontSize:"30px"}}/>
                    </Label>
                  <Input type="file" id="file" accept='image/' style={{display:"none"}} onChange ={handleImageUpload}/>
                  <Input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>

                </Section>
                 
                 <Div>
                 <Button type="submit">Create</Button>
                 </Div>
                </Form>
                
            </Wrapper>
        </Container>
    )
}