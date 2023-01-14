"use client"
import jsPDF from "jspdf"
import { Construction } from "types"

export default function GenerateEstimatePDF({construction}:{construction:Construction}) {
  const generatePDF = () => {
      const doc = new jsPDF();
      let split=doc.splitTextToSize(document?.getElementById("text")?.innerText || "",200);
      doc.text(construction.name,75,5);
      doc.text(construction.type,5,75);                       
      doc.text(construction.address,5,100);                       
      doc.output("dataurlnewwindow");  
  }

  return (
    <button 
    className="btn btn-sm btn-secondary btn-construction mr-1" 
    onClick={() => generatePDF()} 
  >
    Generate PDF
  </button>
  )

}