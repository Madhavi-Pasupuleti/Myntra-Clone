import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import Navbar from "../components/Navbar"
// import { registerRoute } from "../utils/API"

const Container = styled.div`
    height : 85vh;
    width : 100vw;
    display : flex;
    flex-direction : column;
    gap : 1rem;
    align-items : center;
    justify-content: center;
    background-color : rgb(252, 239, 232);
     
    form{
        display : flex;
        flex-direction : column;
        gap : 2rem;
        background-color : white;
        padding : 3rem 4rem;
        input {
            background-color : transparent;
            padding : 1rem;
            border :  0.5px solid lightgrey;
            border-radius : 0.1rem;
            color : black;
            width : 100%;
            font-size : 1rem;
            &:focus{
                border : 0.1rem solid rgb(255, 63, 108);
                outline : none
            }
            ::placeholder{
                color : black;
            }
        }
        button{
            background-color : rgb(255, 63, 108);
            color : white;
            padding : 1rem 2rem;
            border : none;
            cursor: pointer;
            font-size : 1rem;
        }
        span{
            color : black;
            text-transform : uppercase;
            a {
                color : rgb(255, 63, 108);
                text-decoration : none;
                font-weight : bold
            }
        }
    }
`

function Register() {
    
    const navigate = useNavigate()

    const [values, SetValues] = useState({
        username : "",
        email : "",
        password : "",
    });

    const toastOptions = {
        position : "bottom-right",
        autoClose : 8000,
        pauseOnHover : true,
        draggable : true,
        theme : "dark",
    }

    const handleChange = (e) => {
        SetValues({...values, [e.target.name] : e.target.value});

    }

    const validation = () => {
        const { username, email, password} = values ;
        if(username.length < 3){
            toast.error("Username should be greater than 3 characters" , toastOptions);
            return false;
        }
        else if(email === ""){
            toast.error("Email is required." , toastOptions);
            return false;
        }
        else if(password.length === 0){
            toast.error("Password is required." , toastOptions);
            return false
        }
        else if(password.length <= 4){
            toast.error("Password should be equal or greater than 8 characters" , toastOptions);
            return false;
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(validation()){
            // if it returns true i call an api
            const { username, email, password } = values ;
            // const { data } = await axios.post(registerRoute, {
            //     username,
            //     email,
            //     password
            // });
            // if(data.status === false){
            //     toast.error(data.message, toastOptions);
            // }
            // if(data.status === true){
            //     localStorage.setItem("chat-app-user", JSON.stringify(data.user))
            //     navigate("/login")
            // }
        }
    }

  return (
    <> 
        <Navbar />
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
               type="text" 
               placeholder="Username"
               name = "username"
               onChange={(e) => handleChange(e)}
            />
            <input 
               type="email" 
               placeholder="Email"
               name = "email"
               onChange={(e) => handleChange(e)}
            />
            <input 
               type="password" 
               placeholder="Password"
               name = "password"
               onChange={(e) => handleChange(e)}
            />
            <button type="submit">CREATE USER</button>
            <span>Already have an account ? <Link to = "/login">Login</Link></span>
        </form>
      </Container>
      <ToastContainer />
    </>
  )
}

export default Register