import React, { useContext, useEffect } from 'react'
import { Context } from '../../../MainContext'
import axios from 'axios'

function ViewColor() {
    const {fetchColor, color} = useContext(Context)

    useEffect(
        () => {
            fetchColor()
        },[]
    )

    const statusChange = (id , newStatus) => {
        axios.get(`http://localhost:5000/color/updatestatus/${id}/${newStatus}`)
        .then(
            (success) => {
              if(success.data.status === 1){
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
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Color Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Slug
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            {
                color.map(
                    (col , index) => {
                        return(
                            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {col.name}
                            </th>
                            <td class="px-6 py-4">
                                {col.slug}
                            </td>
                            <td class="px-6 py-4" onClick={() => {
                                statusChange(col._id , !col.status)
                            }}>
                                {col.status  ? 'Active' : 'Inactive'}
                            </td>
                            <td class="px-6 py-4">
                                
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