import React, { useRef } from 'react'
import emailjs from "emailjs-com"

export default function ContactUs() {
    const form = useRef();
    function sendForm(e){
        e.preventDefault();
        emailjs.sendForm('service_td13yem','template_r8puj6q',form.current,"p9FvAjCer6s1abHtd")
        .then(r=>{console.log(r)}).catch(err=>console.log(err))
    }

  return (
    <div style={{fontSize:"30px", color:"black",marginLeft:"20px",backgroundImage:`url('https://burst.shopifycdn.com/photos/fluffy-clouds-are-colored-by-a-setting-sun.jpg?width=1200&format=pjpg&exif=1&iptc=1')`,
    width:"50%",paddingLeft:"10px",paddingBottom:"5px"}}>
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendForm}>
            <label>Name</label>
            <input type="text" name="name" style={{width:"50%",border:"solid",height:"30px",marginLeft:"10px"}}/>
            <br/>
            <br/>
            <label>Email</label>
            <input type="email" name="user_email" style={{border:"solid",width:"50%",height:"30px",marginLeft:"13px"}}/>
            <br/>
            <br/>
            <label>Message</label>
            <br/>
            <textarea name="message" rows="10" cols="55" style={{marginTop:"10px"}}/>
            <br/>
            <input type="submit" value="send"/>
        </form>
    </div>
  )
}
