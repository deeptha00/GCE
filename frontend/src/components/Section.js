import React, { useState } from 'react';

function Section({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-md mb-4">
      <div className="bg-gray-300 py-2 px-4 cursor-pointer flex justify-between items-center" onClick={toggleSection}>
        <h2 className="text-lg">{title}</h2>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="bg-gray-100 p-4">{children}</div>}
    </div>
  );
}

export default Section;
