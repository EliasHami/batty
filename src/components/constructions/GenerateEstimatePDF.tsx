import jsPDF from "jspdf"
import { Construction } from "src/types"

export default function GenerateEstimatePDF({ construction }: { construction: Construction }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(construction.name, 75, 5);
    doc.text(construction.address, 5, 100);
    doc.output("dataurlnewwindow");
  }

  return (
    <button
      className="btn btn-sm btn-secondary btn-construction mr-1"
      onClick={() => generatePDF()}
    >
      Generate estimate
    </button>
  )

}