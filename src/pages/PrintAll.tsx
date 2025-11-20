import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Index from "./Index";
import References from "./References";

const PrintAll = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger print dialog after content loads
    const timer = setTimeout(() => {
      window.print();
    }, 500);

    // Listen for print dialog close
    const handleAfterPrint = () => {
      navigate(-1); // Go back to previous page
    };

    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [navigate]);

  return (
    <div className="print-all-container">
      <div className="page-break-after">
        <Index />
      </div>
      <div className="page-break-before">
        <References />
      </div>
    </div>
  );
};

export default PrintAll;
