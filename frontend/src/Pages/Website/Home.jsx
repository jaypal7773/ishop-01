import React from 'react';
import Container from '../../Components/Container';
import HomeProduct from '../../ExtraPages/HomeProduct';


function Home() {
  return (
    <>
      {/* Banner */}
      <Container fluid extraClass="home-banner">
        <Container extraClass="md:h-[650px] h-[400px] mt-4 relative">
          <img src="img/banner.png" alt="" className=' absolute right-0 md:right-[40px] bottom-0 md:h-[auto] h-[100%]' />
        </Container>
      </Container>
      {/* ------------- */}
      {/* Best Seller */}
      <HomeProduct />
      {/* -------------------- */}
      {/* iphone 6 plus .... */}
      <Container fluid extraClass=" back-col h-[550px] relative mt-[150px]">
        <Container extraClass="">
        <div className=' pt-[40px] md:pt-[100px] max-w-[300px]   md:max-w-[450px] '>
          <h1 className=' text-4xl sm:text-5xl text-white font-class'>iPhone 6 Plus</h1>
          <div className=' text-[18px] md:text-2xl text-white font-class pt-[20px]'>Performance and design. Taken right to the edge.</div>
        </div>
        <img src="img/banner.png" alt="" className=' md:max-h-[700px] right-[1px] max-h-[420px]   sm:max-h-[480px]  absolute md:right-[30px] bottom-0   ' />
        <div className='   font-bold  mt-[50px]'>
                <a href="" className=' relative text-white '>Load More
                <div className=' border-2 border-[white]  absolute left-0 w-[80px] top-7'></div>
                </a>
            </div>
        </Container>
      </Container>
      {/* ------------------- */}
      {/* START */}
      <Container extraClass="grid grid-cols md:grid-cols-3 shadow gap-5  border text-center mt-[80px] flex flex-col  justify-center ">
        <div className=' max-w-[300px] shadow-lg  h-[300px] '>
          <img src="img/shipping.svg" alt="" className=' mx-auto   '/>
          <h2 className=' mt-5'>FREE SHIPPING</h2>
          <p className=' mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, sequi optio officiis totam deserunt corrupti accusantium voluptatem ex culpa vel!
          </p>
        </div>
        <div className=' max-w-[300px] shadow-lg h-[300px]'>
          <img src="img/refund.svg" alt="" className=' mx-auto' />
          <h2 className=' mt-4'>100% REFUND</h2>
          <p className=' mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, sequi optio officiis totam deserunt corrupti accusantium voluptatem ex culpa vel!
          </p>
        </div>
        <div className=' max-w-[300px] shadow-lg h-[300px]'>
          <img src="img/support.svg" alt="" className=' mx-auto'/>
          <h2 className='mt-3 '>SUPPORT 24/7</h2>
          <p className=' mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, sequi optio officiis totam deserunt corrupti accusantium voluptatem ex culpa vel!
          </p>
        </div>
      </Container>
      {/* ------------- */}
      {/* Featured product */}
      <Container>

        <h1 className=' hidden md:block text-center mt-[100px] text-3xl font-bold font-class'>FEATURED PRODUCTS</h1>
      </Container>
      {/* -------------------------- */}

    </>
  )
}
export default Home
