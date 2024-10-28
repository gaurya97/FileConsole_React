import React from "react";

export const Home = () => {
  return (
    <>
      <div className="container">
        <select id="pdfSelector">
          <option value="">Select a PDF</option>
          <option value="pdf1.pdf">PDF 1</option>
          <option value="pdf2.pdf">PDF 2</option>
          <option value="pdf3.pdf">PDF 3</option>
        </select>

        <iframe id="pdfViewer" src="" frameborder="1"></iframe>
      </div>
    </>
  );
};
