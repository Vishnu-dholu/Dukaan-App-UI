import React from 'react'

const Transaction = () => {
  return (
    <div className='flex flex-col gap-6'>
        <h5 className='font-medium text-[#1A181E] text-xl'>Transaction | This Month</h5>

        <div className='flex gap-3'>
            <button className='px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full'> Payouts (22)</button>
            <button className='px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full'> Refunds (6)</button>
        </div>
    </div>
  )
}

export default Transaction