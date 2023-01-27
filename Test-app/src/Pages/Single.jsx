import styled from 'styled-components'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useLocation } from 'react-router-dom'
import {BiEdit} from 'react-icons/bi'
import {RiUploadCloudLine} from 'react-icons/ri'



const Container = styled.div`
margin:15px 140px;

`

const Image = styled.img`
max-width:100%;
height:auto;
object-fit:cover;
border-radius:10px;
`

const Title = styled.h3`
margin-top:10px;


`

const Button = styled.button`
padding: .4rem 1.4rem;
background-color:lightcoral;
border:none;
border-radius:10px;
color:white;
margin-top:10px;
cursor:pointer;
`

const Edit = styled.div`
color:teal;
font-size:18px;
`

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

export default function Single(){
     
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    
   
    const [postId, setPostId] = useState({})
    const [updateMode ,setUpdateMode] = useState(false)
    const [title, setTitle] = useState("")
    const [imageNew, setImageNew] = useState("")

    
    useEffect(()=> {
        const getPostId = async() => {
            try{
                const res = await axios.get(`http://localhost:5000/api/post/${id}`)
                setPostId(res.data)
            }catch{}
        }

        getPostId()
    },[id])

   
    const handleImageUpload= (e) => {
        const file = e.target.files[0]
       
        TransformFile(file)

        
    }

   


    const TransformFile = (file) => {
        const reader = new FileReader()
 
        if(file){
          reader.readAsDataURL(file)
          reader.onloadend = () => {
           setImageNew(reader.result)
           }
         }else{
           setImageNew("")
         }
     }
    

     const handleUpdate = async(e) => {
        e.preventDefault()

        try{

            const res= await axios.put(`http://localhost:5000/api/post/${postId._id}`, {
                title,
                image: imageNew
            })

            res.data && window.location.replace('/');

            

            
        }catch(err){}
     }

    return(
        <Container>
                 
                 

                 {updateMode ? <> {postId.image && 
                 <Image src={ handleUpdate ? imageNew : postId.image.url}/>
                 }
                 
                 <Section> <Label  htmlFor="file"> <RiUploadCloudLine style ={{fontSize:"30px", cursor:"pointer"}}/></Label> 
                 < input type ="file" id="file" accept='image/' style={{display:"none"}}  onChange ={handleImageUpload} /> 
                 
                 <Input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
                 </Section>
                 </>
                 
                 
                  :( <>
                     { postId.image &&
                    <Image src={ postId.image?.url}/>
                     }
                  
                  <Title>{postId.title}</Title>
                  </>
                  )

                 
                 }
                 
                
                <Edit>
                     <BiEdit style ={{marginTop:"10px", cursor:"pointer"}} onClick = {() => setUpdateMode(true)}/>
                </Edit>

                <Button onClick ={handleUpdate}>Update</Button>
           
        </Container>
    )
}
