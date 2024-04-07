import React from 'react'
import avatar from '../assets/avatar.png'


const Sidebar = () => {
  return (
        <aside className='fixed text-white top-0 left-0 z-40 w-56 h-screen bg-[#1E2640] transtion-transform -translate-x-full sm:translate-x-0'>
            <button class="hidden top-5 right-4 lg:hidden">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
                </svg>
            </button>

            <div className='flex flex-col justify-between h-full gap-4 p-4'>
                <div className='w-full flex flex-col gap-6 items-center'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white relative w-10 h-10 rounded'>
                                <img src={avatar} alt='' loading='lazy' className='rounded-full h-10' />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-white text-lg font-medium'>Vishnu</h3>
                                <a className='underline text-sm font-light text-[#D2D4D9]' href='#'>Visit Store</a>
                            </div>
                        </div>
                        <svg className='' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-[20px] h-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </div>

                    <nav className='flex flex-col gap-2 w-full'>
                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/home.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Home</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/orders.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Orders</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/products.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Products</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/delivery.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Delivery</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/marketing.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Marketing</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/analytics.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Analytics</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/payouts.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Payouts</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/discounts.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Discounts</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/audience.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Audience</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/appearence.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Appearence</p>
                        </a>

                        <a className='px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10' href='#'>
                            <div className='relative w-[18px] h-[18px]'>
                                <img src='./images/plugins.png'/>
                            </div>
                            <p className='text-[14px] font-medium'>Plugins</p>
                        </a>
                    </nav>
                </div>

                <div className='py-2 px-3 bg-[#353C53] rounded'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-9 h-9 bg-[#FFFFFF]/10 rounded flex justify-center items-center'>
                            <img src='./images/wallet.png' alt='wallet' loading='laazy' />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-sm] font-light text-white'>Available Credits</h3>
                            <h6 className='text-base font-medium'>224.60</h6>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
  )
}

export default Sidebar