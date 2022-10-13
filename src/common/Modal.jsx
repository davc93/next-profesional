import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Modal({children,open,setOpen}) {

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Dialog.Panel>
        {children}
      </Dialog.Panel>
    </Dialog>
  )
}