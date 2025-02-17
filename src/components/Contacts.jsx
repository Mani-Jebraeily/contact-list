import React, { useState } from 'react'
import {v4} from "uuid"
import ContactsList from './ContactsList'
import { use } from 'react'

function Contacts() {
  const [contact,setContact]=useState({
    id:"",
    name:"",
    lastName:"",
    email:"",
    phone:""
  })

  const [contacts,setContacts]=useState([
    {
      id:"1",
      name:"Mani",
      lastName:"Jebraeily",
      email:"mani.jebraeily1382@gmail.com",
      phone:"09195595961"
    }
  ])
  const [error,setError]=useState(false)

  const changeHandeler=(event)=>{
    const name =event.target.name
    const value=event.target.value
    setContact(contact=>({...contact,[name]:value}))
  }

  const addHandeler=(event)=>{
    event.preventDefault()
    if(!contact.name||!contact.lastName||!contact.email||contact.phone.length!==11){
      setError(true)
      return
    }else{setError(false)}

    const newContact={...contact,id: v4()}
    setContacts(contacts=>([...contacts,newContact]))
    setContact({
      name:"",
      lastName:"",
      email:"",
      phone:""
    },
  )
  }

   const deleteHandeler=(id)=>{
    const newContacts=contacts.filter((contact)=>contact.id!==id)
    setContacts(newContacts)

   }
  return (
    <>
    <div className=' shadow-[0px_7px_29px_0px_#304ffe25] m-auto  rounded-2xl w-[400px] sm:w-[600px] lg:w-[900px] h-fit pb-5 pt-5 mt-12 flex '>
        <form  onSubmit={addHandeler} className='flex m-auto flex-row  gap-5 flex-wrap justify-center' >
           <input type="text" name='name' value={contact.name} onChange={changeHandeler} placeholder='Name' className='w-[90%] sm:w-[45%] h-[50px] border-gray-700 border-[1px] rounded-xl box-border pl-3'/>
           <input type="text" name='lastName' value={contact.lastName} onChange={changeHandeler} placeholder=' Last Name' className='w-[90%] sm:w-[45%] h-[50px] border-gray-700 border-[1px] rounded-xl box-border pl-3' />
           <input type="email" name='email' value={contact.email} onChange={changeHandeler} placeholder='Email' className='w-[90%] sm:w-[45%] h-[50px] border-gray-700 border-[1px] rounded-xl box-border pl-3'/>
           <input type="number" name='phone' value={contact.phone} onChange={changeHandeler}placeholder='Phone Number' className='w-[90%] sm:w-[45%] h-[50px] border- border-[1px] rounded-xl box-border pl-3' />
           <button type='submit' className='w-[90%]  sm:w-[calc(90%+20px)] h-[50px] bg-[#304ffe] text-[#fff] border-none cursor-pointer border-[1px] rounded-xl transition-all hover:shadow-[0px_7px_29px_0px_#0c2ad487]'>Add Contact</button>
        </form>
    </div>
    
    <div className={error?"w-[400px] sm:w-[600px] lg:w-[900px] h-[50px] m-auto bg-red-200 text-red-600 pl-3 box-border flex justify-left items-center rounded-2xl mt-5 mb-5":"invisible w-[1000px] h-[50px] mt-5 mb-5"}>
       <h1>Please enter valid data!</h1>
    </div>

    <ContactsList contacts={contacts} deleteHandeler={deleteHandeler}/>
    </>
  )
}

export default Contacts