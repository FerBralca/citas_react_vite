import React from 'react'

const Errors = ({ message }) => {
  return (
    <div className="bg-red-800 uppercase py-2 text-center text-white mb-7 text-sm">
      <p>{message}</p>
    </div>
  )
}

export default Errors