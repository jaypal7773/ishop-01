import React from 'react'

function EditColor() {
  return (
    <div>
<form class="max-w-sm mx-auto mt-8">
  <div class="mb-5">
    <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edit Color</label>
    <input type="text" id="name" name='name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
    <input type="text" readOnly id="slug" name='slug' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" required />
  </div>
  <div class="mb-5">
    <label htmlFor="color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
    <input type="color" id="color" name='color' required className=' cursor-pointer'/>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
  )
}

export default EditColor