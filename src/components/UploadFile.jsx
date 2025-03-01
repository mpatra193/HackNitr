import React, { useState, useRef } from 'react';
import { Link, Upload, FileText, Circle } from 'lucide-react';
import { UploadCloud } from 'lucide-react';

function UploadFile() {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };
  
  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    
      <div className="max-w-6xl mx-auto px-6 py-4">

        
        
        {/* Main upload area */}
        <div className="max-w-2xl mx-auto pt-20">
          <div 
            className={`border-2 border-dashed rounded-lg p-16 text-center cursor-pointer ${dragActive ? "border-purple-400" : "border-gray-400"}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={handleClick}
            style={{
              backgroundColor:"transparent",
              backdropFilter: 'blur(5px)'
            }}
          >
            <div className="flex justify-center mb-6">
              <UploadCloud size={48} className="text-white"  />
            </div>
            <div className="text-2xl font-bold mb-2 text-white">
              Drag & <span className="text-[#E100FF]">Drop</span>
            </div>
            <div className="text-gray-300 mb-6">
              Maximum upload file size : <span className="text-[#E100FF]">25MB</span>
            </div>
            
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              multiple={false}
            />
          </div>
          
          {/* URL input */}
          <div className="mt-6">
            <div className="bg-white opacity-20 rounded-full p-3 flex items-center">
              <Link className="ml-2 mr-3 text-gray-900" size={20} />
              <input 
                type="text" 
                placeholder="Paste your URL" 
                className="bg-transparent outline-none flex-grow text-black placeholder-gray-900"
              />
            </div>
          </div>
          
          
        </div>
      </div>
  );
};

export default UploadFile;