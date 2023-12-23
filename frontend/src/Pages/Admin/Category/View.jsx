import React, { useContext, useEffect, useState} from 'react'
import { Context } from '../../../MainContext'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

function CategoryView() {
  const { category, fetchCategory, catImageUrl} = useContext(Context)

  useEffect(
    () => {
      fetchCategory()
    }, []
  )

  function changeStatus  (id , newStatus)  {
    axios.get(`http://localhost:5000/category/updatestatus/${id}/${newStatus}`)
    .then(
      (success) => {
        if(success.data.status === 1){
          fetchCategory()
        }
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  const deleteData = (id) => {
    axios.delete(`http://localhost:5000/category/delete/${id}`)
      .then((success) => {
        if (success.data.status === 1) {
          fetchCategory();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Activity
              </th>
            </tr>
          </thead>
          <tbody>
            {
              category.map(
                (cate, index) => {
                  return (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {cate.name}
                      </th>
                      <td className="px-6 py-4">
                        {cate.slug}
                      </td>
                      <td className="px-6 py-4">
                        <img width="70px" src={catImageUrl + cate.image} alt="" />
                      </td>
                      <td className={`px-6 py-2 mt-4 cursor-pointer inline-block text-white ${cate.status ? 'bg-slate-600' : 'bg-green-600'}`} onClick={(e) => {
                        changeStatus(cate._id , !cate.status);
                        e.target.innerText = "Loading..."
                      }}>
                        {cate.status ? 'Active' : 'Inactive'}
                      </td>
                      <td className={`px-8 py-2 cursor-pointer text-[28px]`}>
                      <MdDelete className=' text-[red]' onClick={() => deleteData(cate._id)}/>
                      <Link to={"/admin/category/edit/" + cate._id}>
                      <CiEdit/>
                        </Link>
                      </td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default CategoryView