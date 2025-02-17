import React from 'react'

function ContactsList({contacts,deleteHandeler}) {
    console.log(contacts)

  return (
    <>
    <div className='m-auto w-[400px] sm:w-[600px] lg:w-[900px]'>
    <h1 className='text-[#304ffe] text-[1.5rem]'>Contacts List</h1>
    <div className="w-[100%] h-fit  rounded-2xl  box-border sm:border-[#f5f5f5]  sm:border-[4px] flex  sm:gap-4 items-center flex-col justify-evenly  mb-10  mt-5 ">
        {contacts.length?contacts.map((contact)=>(<div className='w-[98%] bg-[#f5f5f5] mb-[20px] pt-[10px] pb-[20px] pl-[20px] pr-[20px]  text-[#6b6b6f] rounded-xl flex flex-col  items-center gap-2 sm:flex-row sm:pb-[5px]  mt-[20px]   justify-between ' key={contact.id}> <p className='grow basis-0'> {contact.name} {contact.lastName} </p>  <p className='grow basis-0 flex '><span className='mr-[10px] bg-[#fff]  rounded-full '>📬</span>{contact.email}</p> <p className='grow basis-0 flex'><span className='mr-[10px]'>📞</span>{contact.phone}</p> <button onClick={()=> deleteHandeler(contact.id)} className=' hover:cursor-pointer bg-red-200 hover:shadow-[0px_18px_40px_0px_#00000022] rounded-xl size-[32px] ml-2 transition-all'>🗑️</button></div>))
          :(<h1 className='bg-[#f5f5f5] w-[100%] h-[100px] flex justify-center items-center   rounded-2xl text-[#6b6b6f] text-[1.2rem] font-[500] '>No Contacts Yet!</h1>
          )
        }

    </div>
    </div>
    </>
  )
}

export default ContactsList