import React from 'react'

function ContactsList({contacts,deleteHandeler}) {
    console.log(contacts)

  return (
    <>
    <h1>Contacts List</h1>
    <div className="w-[1000px] h-fit bg -red-300 p-10 box-border flex gap-4 items-center flex-col justify-evenly  ">
        {contacts.length?contacts.map((contact)=>(<div className='w-[820px]  flex  justify-between bg-amber-500' key={contact.id}><p> {contact.lastName} {contact.name}</p>  <p><span>📬</span>{contact.email}</p> <p><span>📞</span>{contact.phone}</p> <button onClick={()=> deleteHandeler(contact.id)}>🗑️</button></div>))

          :(<h1>No Contacts Yet!</h1>
            
          )
        }

    </div>
    </>
  )
}

export default ContactsList