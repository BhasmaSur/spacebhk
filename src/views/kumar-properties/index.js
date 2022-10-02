import React, {useState} from "react";
import { Button, Typography } from "@mui/material";
import { InputField } from "../../components/input-field";
import "./index.css"

const KumarProperties = () => {
 
    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const verifyUser = () =>{
        if( name && (contactNumber || email )){
            fetch("https://spacebhk-1dd97-default-rtdb.firebaseio.com/spacebhk.json",
            {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    contactNumber,
                    email,
                    message,
                })
            })
            alert("Your enquiry sent successfully, thanks")
        }else{
            if(!name){
                alert("Enter Name")
            }
            if(!contactNumber && !email){
                alert("Enter contact number or email address")
            }
        }
    }
  return (
    <div>
      <div>
        <img
          src="https://www.constructionworld.in/assets/uploads/92ad6167e58b3cd2a53a8769aadc546a.jpg"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="overlay-box">
        <Typography variant="subtitle2">
          *Your information will be safe with us, we dont share it with anyone.
        </Typography>
        <InputField
          type="text"
          text={"Name :"}
          handleChange={setName}
        >
        </InputField>
        <InputField
          type="text"
          text={"Contact Number :"}
          handleChange={setContactNumber}
        >
        </InputField>
        <InputField
          type="text"
          text={"Email :"}
          handleChange={setEmail}
        >
        </InputField>
        <InputField
          type="text"
          text={"Message(optional) :"}
          handleChange={setMessage}
        >
        </InputField>
        <Button sx={{marginTop:"20px"}} variant="contained" onClick={verifyUser}>
            Submit
        </Button>
      </div>
      <div className="footer">
        <Typography align="center">
            Mobile : +91 7887578111 
        </Typography>
        <Typography align="center">
            Email : shubh.barao111@gmail.com 
        </Typography> 
        </div>
    </div>
  );
};

export default KumarProperties