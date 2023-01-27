import styled from 'styled-components'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import {useState}from 'react'

const Container = styled.div`
width:100%;
height:50px;
padding:1rem;
z-index:999;
background-color:white;
display:flex;
align-items:center;
justify-content:space-between;

`

const Wrapper = styled.div``

const Left = styled.div`
display:flex;
`

const Icons  = styled.div`
font-size:18px;
margin:0px 5px;

`

const Right = styled.div`


@media only screen and (max-width:768px){
    width:100%;
    height:max-content;
    position:absolute;
    top:0;
    left:${({isOpen})=>(isOpen ? "0px" : "-500%")};
    transition: .3s;
    background-color:lightcoral;
    z-index:999;
    padding:1rem;
}
`

const List= styled.ul`
list-style:none;
display:flex;
align-items:center;
justify-content:space-between;


@media only screen and  (max-width:768px){
    display:flex; 
    flex-direction:column;
    align-items:center;
    justify-content:center;

}
`

const ListItems = styled.li`
margin:0px 5px;

@media only screen and (max-width:768px){
    margin-bottom:6px;
}


`

const Btns = styled.div`
margin:0px 8px;

@media only screen and (max-width:768px){
    margin:5px 0px;
}
`


const Image = styled.img`
width:30px;
height:30px;
border-radius:50%;
object-fit:cover;
`


const Close = styled.div`
display:none;

@media only screen and (max-width:768px){
    display:block;
    position:absolute;
    top:10px;
    right:15px;
    font-size:25px;

}
`

const Burguer = styled.div`
display:none;

@media only screen and (max-width:768px){
   display:block;
   font-size:24px;

}
`


export default function Navbar(){
     
    const [isOpen ,  setIsOpen] = useState(false)

    return(
        <Container>
            <Left>
                <Icons><BsLinkedin/></Icons>
                <Icons><BsGithub/></Icons>
                <Icons><CgMail/></Icons>
            </Left>
            <Right isOpen={isOpen}>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>About</ListItems>
                    <ListItems>Quiz</ListItems>
                    <ListItems>LogOut</ListItems>
                    <Btns>
                        <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"/>

                    </Btns>
                </List>
                <Close  >
                    <AiOutlineCloseCircle onClick={(e) => setIsOpen(!isOpen)} />
                </Close>
            </Right>
            <Burguer >
            <CgMenuGridO onClick={(e) => setIsOpen(!isOpen)} />
            </Burguer>
        </Container>
    )
}