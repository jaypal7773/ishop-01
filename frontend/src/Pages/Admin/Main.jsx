import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Main() {
  return (
    <div className=' grid grid-cols-4'>
      <div className=' border border-red-400'>
        <SideMenu />
      </div>
      <div className=' border border-green-400 col-span-3'>
        <Header />
        <div className=' min-h-[90vh]'>
        <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Main

const Header = () => {
  return (
    <div className=' py-3 shadow-xl sticky top-0 bg-white bg-color text-white px-2 text-w'>Ishop</div>
  )
}

const Footer = () => {
  return (
    <div></div>
  )
}

const SideMenu = () => {
  const menu = [
    {
      name: "Dashboard",
      url: "/admin",
      children: null
    },
    {
      name: "Category",
      url: null,
      children: [
        {
          name: "Add",
          url: "/admin/category/add",
        },
        {
          name: "View",
          url: "/admin/category/view"
        }
      ]
    },
    {
      name: "Product",
      url: null,
      children: [
        {
          name: "Add",
          url: "/admin/product/productadd",
        },
        {
          name: "View",
          url: "/admin/product/productview"
        }
      ]
    },
    {
      name: "Color",
      url: null,
      children: [
        {
          name: "Add",
          url: "/admin/color/coloradd",
        },
        {
          name: "View",
          url: "/admin/color/colorview"
        }
      ]
    },
    {
      name: "Users",
      url: "/admin/users",
      children: null
    }
  ]
  return (
    <div className='bg-[#011519] h-[100vh] text-white'>
      <div className=' text-center p-2 text-4xl font-semibold'>Admin Panel</div>
      <hr /><hr />
      {
        menu.map(
          (items, index) => {
            return (
              <div key={index}>
                <SideItem items={items} />
              </div>
            )
          }
        )
      }
    </div>
  )
}

const SideItem = ({ items }) => {
  const [toggle,setToggle] = useState(false)
  return (
    items.children == null
      ? (
        <Link to={items.url}>
        <li className=' list-none text-[20px] mx-3'>{items.name}</li>
        </Link>
      ) : (
        <li className=' list-none text-[20px] mx-3 cursor-pointer' onClick={() => setToggle(!toggle)}>
          {items.name}
          <ul className={`pl-4 mt-2 text-[18px] bg-white rounded-md text-black ${!toggle ? 'hidden' : 'block'}`}>
            {items.children.map((child , index) => (
             <Link to={child.url}>
                <li key={index}>
                  {child.name}
                </li>
             </Link>
            ))}
          </ul>
        </li>
      )
  );
};
