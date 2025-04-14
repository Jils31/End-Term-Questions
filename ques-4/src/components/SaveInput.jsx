import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function SaveInput() {
    const [submitFormData, setSubmitFormData] = useState(null)
    const nameRef = useRef("")
    const emailRef = useRef("")

    function handleSubmit(e){
        e.preventDefault()

        const data = {
            name : nameRef.current.value,
            email : emailRef.current.value
        }

        setSubmitFormData(data)
    }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input type="text" placeholder='Your Name' ref = {nameRef} />
        <input type= "email" placeholder='Your Email' ref = {emailRef} />
        <button>Submit</button>
      </form>

      {submitFormData && <p>{submitFormData.name}-{submitFormData.email}</p>}
    </div>
  )
}

export default SaveInput
