'use client'

import * as _ from 'lodash'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import styled from 'styled-components'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString()

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`

export default function PdfViewer(props: { url: string }) {
  const [numPages, setNumPages] = useState(0)
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
  }

  return (
    <Wrapper>
      <Document
        file={props.url}
        onLoadSuccess={onDocumentLoadSuccess}
        externalLinkTarget="_blank"
      >
        {Array.from(Array(numPages).keys()).map((i) => (
          <Page key={i} pageIndex={i} renderTextLayer={false} />
        ))}
      </Document>
      <Break />
      {numPages > 0 ? (
        <a href={props.url}>
          <button>Download</button>
        </a>
      ) : (
        <></>
      )}
    </Wrapper>
  )
}
