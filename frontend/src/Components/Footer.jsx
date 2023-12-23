import React from 'react'
import Container from './Container'

export default function Footer() {
  return (
    <>

    <Container>
      <div className=' hidden:grid md:grid-cols-3 grid-cols-3 gap-10 md:grid text-center mt-5'>
        <div>
          <h1 className=' text-[#C1C8CE] text-3xl font-bold tracking-[0.10rem] md:text-left'>iShop</h1>
          <p className=' mt-2 text-[14px] md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi illo cum nobis pariatur, tempora voluptates ipsam alias tenetur fugiat!</p>
        </div>
        <div>
          <h2 className='md:text-left font-bold tracking-[0.10rem] md:mt-2 text-[20px] font-class mt-9 '>Follow US</h2>
          <p className='md:text-left text-[14px] mt-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi esse iure nostrum, ea corporis?</p>
        </div>
        <div className=' hidden md:block '>
          <h2 className='md:text-left mt-2 font-bold tracking-[0.05rem] font-class text-[20px]'>Contact US</h2>
          <div className='md:text-left mt-[12px] text-[14px]'>
          <div>iShop:address@building124</div>
          <div>Call us now: 0123-456-789</div>
          <div>Email:Support@whatever.com</div>
          </div>
        </div>
      </div>
      <div className=' hidden md:block'>
      <div className=' grid   grid-cols-6 mt-[100px] md:grid gap-1'>
        {/* Information */}
        <div>
          <h1 className=' font-bold'>Information</h1>
          <ul className=' mt-3'>
            <li className=' '>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* ------------- */}
        {/* Service */}
        <div>
          <h1 className=' font-bold'>Service</h1>
          <ul className=' mt-3'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* --------------- */}
        {/* Extras */}
        <div>
          <h1 className=' font-bold'>Extras</h1>
          <ul className=' mt-3'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* --------------- */}
        {/* My Account */}
        <div>
          <h1 className=' font-bold'>My Account</h1>
          <ul className=' mt-3'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* ----------------- */}
        {/* Userful Link */}
        <div>
          <h1 className=' font-bold'>Userful Link</h1>
          <ul className=' mt-3'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* ---------------- */}
        {/* Our Offers */}
        <div>
          <h1 className=' font-bold'>Our Offers</h1>
          <ul className=' mt-3'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* ---------------- */}
      </div>
      </div>
      <div className=' md:hidden'>
        <ul className=' font-bold text-center text-[ #22262A] gap-[200px] p-6'>
          <li className=' mt-3'>Information</li>
          <li className=' mt-3'>Service</li>
          <li className=' mt-3'>Extras</li>
          <li className=' mt-3'>My Account</li>
          <li className=' mt-3'>Userful Links</li>
        </ul>
      </div>
    </Container>
    </>
  )
}
