import React, { useContext, useRef } from 'react'
import color from './color.css'
import { Context } from '../../../MainContext'
import axios from 'axios'


function AddProduct() {
    const { productbaseurl, apibaseurl, notify } = useContext(Context)
    const { color, category } = useContext(Context)
    const slugRef = useRef()
    const priceRef = useRef()
    const discountRef = useRef()
    const finalRef = useRef()

    const slugGenerateHandler = (e) => {
        const slug = e.target.value.toLowerCase().replace(/ /g, '-');
        slugRef.current.value = slug
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name", event.target.name.value)
        formData.append("slug", event.target.slug.value)
        formData.append("category", event.target.category.value)
        formData.append("color", event.target.color.value)
        formData.append("price", event.target.price.value)
        formData.append("discount", event.target.discount.value)
        formData.append("final", event.target.final.value)
        // formData.append("image", event.target.image.files[0])
        axios.post(`http://localhost:5000/admin/product/create`, formData)
            .then(
                (success) => {
                    console.log(success)
                    if (success.data.status == 1) {
                        notify(success.data.msg, "success")
                        event.target.reset()
                    }
                }
            ).catch(
                (error) => {
                    console.log(error)
                    notify(error.data.msg, "error")
                }
            )
    }

    const calculatePrice = () => {
        const price = priceRef.current.value
        const discount = discountRef.current.value
        if (price != "" && discount != "") {
            const final = price - price * (discount / 100)
            finalRef.current.value = final
        }
    }
    return (
        <div className='bg-color h-[92vh]'>
            <form className="w-[80%] mx-auto pt-12" encType='multipart/form-data' onSubmit={submitHandler}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor='name' className="block uppercase tracking-wide mb-2 text-white" for="grid-first-name">
                            Product Name
                        </label>
                        <input onChange={slugGenerateHandler} id="name" name='name' type="text" placeholder="Product Name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor='slug' className="block uppercase tracking-wide mb-2 text-white" for="grid-last-name">
                            Product Slug
                        </label>
                        <input id="slug" name='slug' readOnly type="text" placeholder="Auto Generate Slug" ref={slugRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        {/* <label for="countries" class="block mb-2 dark:text-white text-white">Select an Category</label> */}
                        <select id="category" name='category' className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select an Category</option>
                            {
                                category.map(
                                    (cate) => {
                                        return (
                                            <option value={cate._id} key={cate._id}>{cate.name}</option>
                                        )
                                    }
                                )
                            }
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <select id="color" name='color' className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Color</option>
                            {
                                color.map(
                                    (col) => {
                                        return (
                                            <option value={col._id} key={col._id}>{col.name}</option>
                                        )
                                    }
                                )
                            }
                        </select>
                    </div>
                </div>
                {/* <div>
                    <label htmlFor="image" className=' text-white mx-3'>Image</label>
                    <input type="file" name='image' id='image' className=' text-white'/>
                </div> */}
                <div className="mb-5">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                    <input type="file" id="image" name="image" className="shadow-sm bg-gray-50 ... " />
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label htmlFor='price' className="block uppercase tracking-wide mb-2 text-white" for="grid-city">
                            Price
                        </label>
                        <input id="price" name='price' type="text" placeholder="00" ref={priceRef} onChange={calculatePrice} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label htmlFor='discount' className="block uppercase tracking-wide mb-2 text-white" for="grid-state">
                            Discount
                        </label>
                        <input id="discount" name='discount' type="text" placeholder="00" ref={discountRef} onChange={calculatePrice} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label htmlFor='final' className="block uppercase tracking-wide mb-2 text-white" for="grid-zip">
                            Final Price
                        </label>
                        <input id="final" name='final' type="text" placeholder="00" ref={finalRef} readOnly className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                </div>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-12">Submit</button>
            </form>
        </div>

    )
}

export default AddProduct