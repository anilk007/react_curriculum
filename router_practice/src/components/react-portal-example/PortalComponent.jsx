import React, { useState } from "react";
import ReactDOM from "react-dom";

const PortalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Portal</button>
      {isOpen &&
        ReactDOM.createPortal(
          <div style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"
          }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
              <h2>Portal Content</h2>
              <p>This is rendered using React Portal.</p>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </div>,
          document.body 
        )}
    </div>
  );
};

export default PortalComponent;