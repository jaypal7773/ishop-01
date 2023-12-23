import React, { useContext, useRef, useState } from 'react'
import {Context} from '../../../MainContext'
import axios from 'axios'

function CategoryAdd() {

  const {apibaseurl,categorybaseurl , notify} = useContext(Context)
  const slugRef = useRef()

  const slugChangeHandler = (e) => {

    const slug = e.target.value.toLowerCase().replace(/ /g, '-');
    slugRef.current.value = slug
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const formData = new FormData() 
     
    formData.append("name" , event.target.name.value)
    formData.append("slug" , event.target.slug.value)
    formData.append("image" , event.target.image.files[0])
    axios.post(apibaseurl + categorybaseurl + "/create" , formData)
    .then(
      (success) => {
        notify(success.data , "success")
        event.target.reset()
      }
    ).catch(
      (error) => {
        notify(error.data , "error")
      }
    )
  }

  
  return (
    <div className=' mt-3'>
      <div className=' text-center mt-6 text-[22px] font-semibold'>Category Add</div>
      <form className="max-w-sm mx-auto mt-6" onSubmit={submitHandler} encType='multipart/form-data'>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
          <input type="text" id="name" name='name' className="shadow-sm bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required onChange={slugChangeHandler}/>
        </div>
        <div className="mb-5">
          <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
          <input type="text" ref={slugRef} id="slug" name='slug' readOnly className="shadow-sm focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5">
          <label htmlFor="image"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
          <input type="file" id="image" name='image' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <button type='submit'>submit</button>
        </form>

    </div>
  )
}

export default CategoryAdd