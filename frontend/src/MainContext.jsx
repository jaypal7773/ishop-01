import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Context = createContext();

function MainContext(props) {
    const [category, setCat] = useState([])
    const [color, setColor] = useState([])
    const [catImageUrl, setCatImageUrl] = useState(null)

    const apibaseurl = process.env.REACT_APP_API_BASE_URL
    const categorybaseurl = process.env.REACT_APP_CATEGORY_BASE_URL
    const colorbaseurl = process.env.REACT_APP_COLOR_BASE_URL

    const notify = (msg, type) => toast(msg, { type })

    useEffect(
        () => {
            fetchCategory()
            fetchColor()
        }, []
    )

    // useEffect(
    //     () => {
    //         fetchColor()
    //     },[]
    // )

    const fetchCategory = () => {
        axios.get(`${apibaseurl}${categorybaseurl}`)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setCat(success.data.category)
                        setCatImageUrl(success.data.baseUrl)
                    } else {
                        setCat([])
                    }
                }
            ).catch(
                (error) => {
                    setCat([])
                }
            )
    }

    const fetchColor = () => {
        axios.get(`${apibaseurl}${colorbaseurl}`)
            .then(
                (success) => {
                    if (success.data.status === 1) {
                        setColor(success.data.color)
                    } else {
                        setColor([])
                    }
                }
            ).catch(
                (error) => {
                    setColor([])
                }
            )
    }

    // const fetchColor = () => {
    //     axios.get(apibaseurl+colorbaseurl)
    //     .then(
    //         (success) => {
    //             if(success.data.status == 1){
    //                 setColor(success.data.color)
    //             }else{
    //                 setColor([])
    //             }
    //         }
    //     ).catch(
    //         (error) => {
    //             setColor([])
    //         }
    //     )
    // }


    return (
        <Context.Provider value={{
            apibaseurl,
            categorybaseurl,
            notify,
            category,
            fetchCategory,
            catImageUrl,
            fetchColor,
            color,
            colorbaseurl
        }}>
            {props.children}
            <ToastContainer />
        </Context.Provider>

    )
}

export default MainContext
export { Context }