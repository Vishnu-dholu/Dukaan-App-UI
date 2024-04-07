import React from 'react'

const Tabletop = () => {
  return (

        <div className='flex items-center justify-between gap-3'>
            <div className='flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-{#808080] rounded w-full max-w-[300px]'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
                </svg>
                <input type='text' placeholder='Order ID or transaction ID' className='bg-transparent outline-none w-full' />
            </div>

            <div className='flex items-center gap-3'>
                <button className='flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]'>
                    Sort

                    <img src='./images/updown.png' />
                </button>

                <button className='flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded'>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </button>
            </div>
        </div>
        
  )
}

export default Tabletop