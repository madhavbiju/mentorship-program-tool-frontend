import React from "react";
import ReportTaskTableHandler from "../../../components/ReportTables/ReportTaskTable/ReportTaskTableHandler";
import ReportTaskDownloadHandler from "../../../components/ReportTaskDownload.tsx/ReportTaskDownloadHandler";
import { Button } from "@mui/joy";
import { useRef } from "react"; // Import useRef hook

// Import jspdf-autotable directly
import "jspdf-autotable";

declare global {
  interface Window {
    jsPDF: any;
  }
}

const AdminReportDownloadPage = () => {
  const tableRef = useRef<HTMLDivElement>(null); // Create a ref for the table element

  const handleDownloadPDF = () => {
    if (!tableRef.current) return; // Check if the ref is valid

    // Access jsPDF from window object
    if (window.jsPDF) {
      const doc = new window.jsPDF();
      doc.autoTable({ html: tableRef.current }); // Pass the table element through the ref
      doc.save("report.pdf");
    } else {
      console.error("jsPDF is not available in the window object.");
    }
  };

  return (
    <div>
      <Button onClick={handleDownloadPDF}>Download</Button>
      <div ref={tableRef}>
        {" "}
        {/* Use ref to reference the table element */}
        <ReportTaskDownloadHandler sort={"date"} />
      </div>
    </div>
  );
};

export default AdminReportDownloadPage;