import React from 'react'
import { DialogContent } from '../ui/dialog'
import { Label } from '../ui/label'

const OrderDetail = () => {
  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className='grid gap-6'>
         <div className='grid gap-2'>
            <div className='flex mt-5 items-center justify-between'>
               <p className='font-medium'>Order Id</p>
               <Label className="mr-5">12345</Label>
            </div>
            <div className='flex mt-5 items-center justify-between'>
               <p className='font-medium'>Order Date</p>
               <Label className="mr-5">12/02/2025</Label>
            </div>
            <div className='flex mt-5 items-center justify-between'>
               <p className='font-medium'>Order Status</p>
               <Label className="mr-5">In Progress</Label>
            </div>
            <div className='flex mt-5 items-center justify-between'>
               <p className='font-medium'>Order Price</p>
               <Label className="mr-5">1000</Label>
            </div>
         </div>
      </div>
    </DialogContent>
  )
}

export default OrderDetail