import React, { useState } from 'react'
import Container from './Container'
import { AiFillCaretDown } from 'react-icons/ai'
import { AiOutlineUser} from 'react-icons/ai'
import { MdShoppingBag } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

export default function Header() {

  const [menuToggle, setMenuToggle] = useState(false)

  const menuItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Store",
      link: "/store"
    },
    {
      name: "Iphone",
      link: "/iphone"
    },
    {
      name: "Ipad",
      link: "/ipad"
    },
    {
      name: "Macbook",
      link: "/macbook"
    },
    {
      name: "Accessories",
      link: "/accessories"
    }
  ]

  return (
    <div>
      <Container fluid extraClass="shadow  ">
        <Container >
          <div className=' md:grid grid-cols-2 hidden'>
            <div className=' flex gap-2 items-center'>
              <span>EN</span>
              <AiFillCaretDown />
              <span>$</span>
              <AiFillCaretDown />
            </div>
            <div className=' flex items-center gap-3 justify-end'>
              <AiOutlineUser />
              <span>My Profile</span>
              <MdShoppingBag />
              <span>2 Items</span>
              <span className=' text-[grey]'>$998</span>
            </div>
          </div>
        </Container>
      </Container>
      <Container extraClass="pt-[20px]">
        <div className=' flex md:justify-center justify-between items-center'>
          <img src="img/ishop.png.svg" alt="" />
          <FaBars className=' md:hidden text-[30px]' onClick={() => setMenuToggle(false)} />
        </div>
        {/* <ul className={` md:hidden fixed w-full h-[100vh] bg-[rgba(0,0,0,0.5)] flex gap-7 
        top-0 left-[-100%] duration-500 text-white flex-col items-center 
        justify-center ${menuToggle == true ? 'left-[0%]' : 'left-[-100%]'}`}>
          {
            menuItems.map(
              (item, index) => {
                return (
                  <li key={index} className=' my-[25px]'>
                    <a href={item.link}>{item.name}</a>
                  </li>
                )
              }
            )
          }
          <li className=' md:hidden text-[30px] list-none'>
            <AiOutlineClose onClick={() => setMenuToggle(false)} />
            </li>
        </ul> */}

        
        <ul className=' hidden md:flex gap-12 justify-center pt-[30px]'>
          {
            menuItems.map(
              (item, index) => {
                return (
                  <li key={index} className=' hover:text-blue-500 font-bold uppercase-text-[14px] '>
                    <a href={item.link}>{item.name}</a>
                  </li>
                )
              }
            )
          }
        </ul>
        {/* mobile menu */}
        <div className={`w-full h-[100vh] fixed top-0  md:hidden   mobile-menu
        ${menuToggle ? 'left-[-100%]' : 'left-[0]' } duration-500` }>
        <AiOutlineClose className=' text-white text-2xl m-3' onClick={() => setMenuToggle(true)}/>
        <Container fluid extraClass='py-3 px-2 text-white text-[14px] border-b-[1px]'>

          <div className=' grid grid-cols-2'>
            
            <div className=' flex items-center'>
              <span>EN</span>
              <AiFillCaretDown className='text-white' />
              <span>$</span>
              <AiFillCaretDown className='text-white'/>
            </div>
            <div className=' flex items-center gap-2 justify-end'>
              <AiOutlineUser />
              <span>My Profile</span>
              <MdShoppingBag />
              <span>2 Items</span>
              <span className=' text-[grey]'>$998</span>
            </div>
          </div>
        </Container>
        <Container fluid>
          <input type="text"  placeholder='Search...' className=' mt-4 px-2 focus:outline-none h-[40px] w-[80%] mx-auto block rounded-[27px]'/>
        </Container>
        <ul className='  flex gap-5 text-white md:hidden mt-[10px] flex-col items-center'>
          {
            menuItems.map(
              (item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                )
              }
            )
          }
        </ul>
        </div>
        
        {/* ................... */}
      </Container>
    
     
     
    </div>
  )
}
