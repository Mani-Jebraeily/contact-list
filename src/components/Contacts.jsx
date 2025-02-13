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

  const [contacts,setContacts]=useState([])
  const [error,setError]=useState(false)

  const changeHandeler=(event)=>{
    const name =event.target.name
    const value=event.target.value
    setContact(contact=>({...contact,[name]:value}))
  }

  const addHandeler=(event)=>{
    event.preventDefault()
    if(!contact.name||!contact.lastName||!contact.email||!contact.phone){
      setError(true)
      return
    }else{setError(false)}

    const newContact={...contact,id: v4()}
    setContacts(contacts=>([...contacts,newContact]))
    // setContact({
    //   name:"",
    //   lastName:"",
    //   email:"",
    //   phone:""
    // })
  }

   const deleteHandeler=(id)=>{
    const newContacts=contacts.filter((contact)=>contact.id!==id)
    setContacts(newContacts)

   }
  return (
    <>
    <div className='bg- red-500 w-[1000px] h-[250px] mt-12 flex '>
        <form  onSubmit={addHandeler} className='flex m-auto flex-row  gap-5 flex-wrap justify-center' >
           <input type="text" name='name' value={contact.name} onChange={changeHandeler} placeholder='Last Name' className='w-[400px] h-[50px] border-gray-700 border-[1px] rounded-xl box-border pl-3'/>
           <input type="text" name='lastName' value={contact.lastName} onChange={changeHandeler} placeholder='Name' className='w-[400px] h-[50px] border-gray-700 border-[1px] rounded-xl box-border pl-3' />
           <input type="email" name='email' value={contact.email} onChange={changeHandeler} placeholder='Email' className='w-[400px] h-[50px] border-gray-700 border-[1px] rounded-xl box-border pl-3'/>
           <input type="number" name='phone' value={contact.phone} onChange={changeHandeler}placeholder='Phone Number' className='w-[400px] h-[50px] border-gray-700 border-[1px] rounded-xl box-border pl-3' />
           <button type='submit' className='w-[820px] h-[50px] border-gray-700 cursor-pointer border-[1px] rounded-xl'>Add Contact</button>
        </form>
    </div>
    
    <div className={error?"w-[1000px] h-[50px] bg-red-200 text-red-600 pl-3 box-border flex justify-left items-center rounded-2xl mt-5 mb-5":"invisible w-[1000px] h-[50px] mt-5 mb-5"}>
       <h1>please enter valid data!</h1>
    </div>

    <ContactsList contacts={contacts} deleteHandeler={deleteHandeler}/>
    </>
  )
}

export default Contacts