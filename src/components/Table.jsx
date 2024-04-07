import React from 'react'
import Tabletop from './Tabletop'
import { orderData } from './data'

const Table = () => {

    const getStatusColor = (status) => {
        switch (status) {
            case 'Successful':
                return 'bg-green-500';
            case 'Processing':
                return 'bg-yellow-500';
            case 'Failed':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    }

  return (
    <div className='flex flex-col px-3 pt-3 pb-2 gap-3 rounded-[8px] bg-white'>
        <Tabletop />

        <div className='overflow-x-auto'>
            <table className='min-w-full'>
                <colgroup>
                    <col className='w-1/5' />
                    <col className='w-1/5' />
                    <col className='w-1/5' />
                    <col className='w-1/5' />
                    <col className='w-1/5' />
                </colgroup>

                <thead className='text-[#4D4D4D]'>
                    <tr className='bg-[#F2F2F2]'>
                        <th className='px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l'>Order ID</th>
                        <th className='px-3 py-[10px] text-left text-sm font-medium tracking-wider'>Status</th>
                        <th className='px-3 py-[10px] text-left text-sm font-medium tracking-wider'>Transaction ID</th>
                        <th className='px-3 py-[10px] text-left text-sm font-medium tracking-wider'>Refund Date</th>
                        <th className='px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r'>Order Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {orderData.map((order) => (
                        <tr key={order.id}>
                            <td className='px-3 py-2 text-[#146EB4] font-medium'>#{order.id}</td>
                            <td className='px-3 py-2'>
                                <span className={`rounded-full inline-block ${getStatusColor(order.status)} w-4 h-4 mr-2`}/>
                                {order.status}
                            </td>
                            <td className='px-3 py-2'>{order.transactionID}</td>
                            <td className='px-3 py-2'>{order.refundDate}</td>
                            <td className='px-3 py-2 text-right'>{order.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table