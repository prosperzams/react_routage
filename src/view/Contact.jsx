import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()
  
export default function Contact() {

  
  return (
    <main className="container mt-5">
      <h2 className="text-center">Contact Us</h2>
      <section className="row d-flex justify-content-center">
        <div className="col-md-8">
          <form action="">
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='Name'/>
            </div>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='Email'/>  
            </div>
            <div className="mb-3">
              <label htmlFor="pays">Choose country</label>
              <select name="pays" id="pays" aria-label='default select exzample' className='form-control'>
                <option value="">--Select your country--</option>
                <option value="Belgium">Belgium</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Canada">Canada</option>
                <option value="Bretagne">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Spain">Spain</option>
                <option value="Usa">United States</option>
              </select>
            </div>
            <div className="mb-3">
              <textarea className='form-control' placeholder='Message'></textarea>
            </div>
            <div className="mb-3">
              <button className='btn btn-primary w-100'>Send</button>
            </div>
          </form>
        </div>
      </section>    
    </main>
  )
}
