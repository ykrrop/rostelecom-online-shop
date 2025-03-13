'use client'
import { $showQuickViewModal } from '@/context/modals/state'
import { useUnit } from 'effector-react'
import Layout from './Layout'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { closeQuickViewModal } from '@/context/modals'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const showQuickViewModal = useUnit($showQuickViewModal)

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody()
    closeQuickViewModal()
  }
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif' }}>
        <Layout>{children}</Layout>
        <div
          className={`quick-view-modal-overlay ${showQuickViewModal ? 'overlay-active' : ''}`}
          onClick={handleCloseQuickViewModal}
        />
      </body>
    </html>
  )
}

export default PagesLayout
