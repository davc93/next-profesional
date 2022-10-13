import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Modal({children,open,setOpen}) {

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className='bg-black opacity-75 grid place-content-center place-items-center absolute top-0'>
      <Dialog.Panel>
        {children}
      </Dialog.Panel>
    </Dialog>
  
      
  )
}