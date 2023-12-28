import React, { useContext, useEffect } from 'react'
import { Context } from '../../../MainContext'
import axios from 'axios'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function ViewColor() {
    const { fetchColor, color, apibaseurl, colorbaseurl } = useContext(Context)

    useEffect(
        () => {
            fetchColor()
        }, []
    )

    function changeStatus(id, newStatus) {
        axios.get(`http://localhost:5000/color/updatestatus/${id}/${newStatus}`)
            .then(
                (success) => {
                    if (success.data.status === 1) {
                        fetchColor()
                    }
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    const deleteColor = (id) => {
        axios.delete(`http://localhost:5000/color/delete/${id}`)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        fetchColor()
                    }
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
    }
    return (
        <div>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-color text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Color Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Slug
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            color.map(
                                (col, index) => {
                                    return (
                                        <tr key={index} className="bg-white border-b bg-color dark:bg-gray-800 dark:border-gray-700 text-white">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white text-white">
                                                {col.name}
                                            </th>
                                            <td class="px-6 py-4">
                                                {col.slug}
                                            </td>
                                            <td class="px-6 py-4">
                                                {col.color}
                                            </td>
                                            <td className={`px-6 py-2 mt-4 cursor-pointer inline-block text-white ${col.status ? 'bg-slate-600' : 'bg-green-600'}`} onClick={(e) => {
                                                changeStatus(col._id, !col.status);
                                                e.target.innerText = "Loading..."
                                            }}>
                                                {col.status ? 'Active' : 'Inactive'}
                                            </td>
                                            <td className={`px-8 py-2 cursor-pointer text-[28px]`}>
                                                <MdDelete className=' text-[red]' onClick={() => deleteColor(col._id)} />
                                                <Link to={"/admin/color/edit/" + col._id}>
                                                    <CiEdit />
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

export default ViewColor