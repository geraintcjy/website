/**
 * Resume Page
 */
import { Metadata } from 'next'
import PdfViewer from './pdf-viewer'

export const metadata: Metadata = {
  title: 'Resume',
}

export default function Page() {
  return (
    <div>
      <PdfViewer url="https://geraintcjy.s3.us-west-1.amazonaws.com/Resume-JiayuanChen.pdf" />
    </div>
  )
}
