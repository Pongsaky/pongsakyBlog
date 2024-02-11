"use client"

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
const workerSrc = require("pdfjs-dist/build/pdf.worker.js");

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
    const [file, setFile]  = useState("myResume.pdf");
    const [numPages, setNumPages] = useState(null);

    function onFileChange(event: any) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPage }: any) {
        setNumPages(nextNumPage);
    }

    return (
        <div>
            <div>
                <label htmlFor="file">Load from file:</label>{" "}
                <input onChange={onFileChange} type="file" />
            </div>
            <div>
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {numPages && Array.from({ length: numPages }, (_, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                        />
                    ))}
                </Document>
            </div>
        </div>
    );
}