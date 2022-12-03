import React, { useState } from 'react';
import '../Home/Home.css';
const Contact = () => {
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [text,setText] =useState('')
    const [message,setMessage] =useState('')
    const handlesubmit =(e) =>{
        e.preventDefault()
        const allData ={
            name,
            email,
            text
        }
        console.log(allData)

        fetch('https://consulting-site-server.onrender.com/api/sendmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(allData)
        })
        .then(res =>{
          //    if(res.success === false){
          //   console.log(res.status)
          //   toast.error('Failed to add Product');
          //   // signOut(auth)
          //   // localStorage.removeItem('accessToken')
          // }
          return res.json()
        })
        // .then(res =>{
        //   res.json()

        // //   if(res.status ===401 ||res.status ===403){
        // //     console.log(res.status)
        // //     signOut(auth)
        // //     localStorage.removeItem('accessToken')
        // //   }
        // //   return res.json()
        // })
        .then(data =>{
            setMessage(data)
        })
        }

    return (
        <div className='contact__parant'>
            <div className='contact__inner'>
                <div className='contact__body'>
                    <h4 className='banner__title'>CONTACT US</h4>
                    <h3>Feel Free to Contact us for Any Consult Reason</h3>
                    <p>Our agency can only be as strong as our peopleagenhave their businesses Duis aute irure dolorreprehDuis auteirur olor in reprehenderit in voluptate.</p>

                </div>
                <div className='contact__form'>
                <form onSubmit={handlesubmit}>      
  <input  name="name" type="text" onChange={(e) =>setName(e.target.value)} class="feedback-input" placeholder="Name" />   
  <input name="email" onChange={(e) =>setEmail(e.target.value)} type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text"  onChange={(e) =>setText(e.target.value)} class="feedback-input" placeholder="Comment"></textarea>
  <input  type="submit" value="SUBMIT"/>
</form>
<p className='text-center text-white fs-5'>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;