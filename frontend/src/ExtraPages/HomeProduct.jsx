import React from 'react'
import Container from '../Components/Container';


function HomeProduct() {
    // const [product,setProduct] = (null)
    const items = [
        {
            name: "All"
        },
        {
            name: "Mac"
        },
        {
            name: "iPhone"
        },
        {
            name: "iPad"
        },
        {
            name: "iPod"
        },
        {
            name: "Accessories"
        },
    ]

    return (
        <div>
            <Container extraClass="mb-[52px]">
                <h3 className=' text-center text-[20px] md:text-[30px] font-bold my-4'>BEST SELLER</h3>
                <ul className=' md:flex justify-center gap-[60px] hidden'>
                    {
                        items.map(
                            (data, index) => {
                                return (
                                    <li key={index} className=' hover:text-blue-500 cursor-pointer'>{data.name}</li>
                                )
                            }
                        )
                    }
                </ul>
                <select className=' focus:outline-none md:hidden block rounded mx-auto items-center w-[70%]'>
                    {
                        items.map(
                            (data, index) => {
                                return (
                                    <option key={index} className=' hover:text-blue-500 cursor-pointer'>{data.name}</option>
                                )
                            }
                        )
                    }
                </select>
                <Product />
            </Container>
        </div>
    )
}

export default HomeProduct

const Product = () => {
    const product = [
        {
            title: "Apple Macbook Pro",
            image: "img/macbook.png",
            rating: "4/5",
            discount: "$499",
            price: "$599",
        },
        {
            title: "Apple Macbook Pro",
            image: "img/macbook.png",
            rating: "4/5",
            discount: "$499",
            price: "$599",
        },
        {
            title: "Apple Macbook Air",
            image: "img/Macbookair.png",
            rating: "4/5",
            discount: "$499",
            price: "$599",
        },
        {
            title: "Apple iPhone 11",
            image: "img/iphone11.png",
            rating: "4/5",
            discount: "$499",
            price: "$599",
        },
        {
            title: "Apple iPhone 11",
            image: "img/iphone6.png",
            rating: "4/5",
            discount: "$499",
            price: "$599",
        },
        {
            title: "Apple iPhone 11",
            image: "img/ipad.png",
            rating: "4/5",
            discount: "$499",
            price: "$599",
        },
        {
            title: "Apple iPhone 11",
            image: "img/watch.png",
            rating: "4/5",
            discount: "$499",
            price: "$599",
        },
        {
            title: "Apple iPhone 11",
            image: "img/iphone7.png",
            rating: "4/5",
            discount: "$499",
            price: "$599",
        }
    ]
    return (
        <>
            <Container extraClass=' grid sm:grid-cols-2 md:grid-cols-4 my-5 gap-5'>
                {
                    product.map(
                        (prod, index) => {
                            return (
                                <>
                                    <div className=' shadow  300px] text-center' key={index}>
                                        <img src={prod.image} alt="" className=' mx-auto' />
                                        <div className=' text-[#262626] font-bold mt-3'>{prod.title}</div>
                                        <div className=' mt-2'>{prod.rating}</div>
                                        <div className=' flex justify-center gap-3 mt-2'>
                                            <div className=' text-[#FF4858]'>{prod.discount}</div>
                                            <div className=' relative text-[#C1C8CE]'>{prod.price}
                                                <div className=' bottom-[10px] bg-[#4a4a4b] absolute border-b w-[45px]'></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    )
                }
            </Container>
            <Container extraClass=' hidden md:block text-center font-bold text-[#33A0FF] mt-[50px]'>
                <a href="" className=' relative'>Load More
                <div className=' border-2 border-[#33A0FF]  absolute left-0 w-[80px] top-7'></div>
                </a>
            </Container>
        </>
    )
}