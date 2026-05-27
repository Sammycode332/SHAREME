import React from 'react'
const Spinner = ({ message }) => {
  return (
    <div className ="flex flex-col justify-center items-center w-full h-full ">
    <div 
        className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2"
        style={{ borderColor: '#00BFFF' }}
      />
     <p className ="text-lg text-center px-2 mt-4">{message}</p>
    </div>
  )
}

export default Spinner