import React, { useEffect, useRef, useState } from "react";
import "./ProgressLine.css";

const ProgressLine = ({ label, backgroundColor = "#ffffff", visualParts = [{ percentage: "0%", color: "white" }]}) => {

  const [widths, setWidths] = useState( visualParts.map(() => "0%"));

  const [numbers, setNumbers] = useState( visualParts.map(() => 0));

  const refs = useRef([]);

  useEffect(() => {
    requestAnimationFrame(() => {
      
      setWidths(visualParts.map(item => item.percentage));

      visualParts.forEach((item, index) => {
        const target = parseInt(item.percentage);
        let start = 0;

        const step = () => {
          start += 1;

          setNumbers(prev => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });

          if (start < target) {
            requestAnimationFrame(step);
          }
        };

        step();
      });
    });
  }, [visualParts]);
    

  console.log(visualParts[0].percentage);
  
  return (
    <>
      <div className="progressLabel">{label}</div>

      <div className="progressVisualFull" style={{ backgroundColor }}>
        {visualParts.map((item, index) => (
        
          
          <div key={index} style={{ width: widths[index], backgroundColor: item.color }} className="progressVisualPart text-end" >
            <span  ref={el => (refs.current[index] = el)} className="progressVisualPartSpan text-amber-900 ms-1 me-2 relative bottom-[-2px]" >
              
             {visualParts[0].percentage == "0%" ? visualParts[0].percentage : numbers[index] + "%"}



            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProgressLine;