import { useState } from "react";

function HoverButton(props) {
    const [onMouseOver,setMouseOver] = useState(false)
    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseOut() {
        setMouseOver(false);
    }
    
    return (
        <a href="#" title="" className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{position: "relative",textDecoration: "none"}} > {props.label} 
                        <span
                            style = 
                                {{position:"absolute",
                                left: 0,
                                bottom: "-10px",
                                width: onMouseOver ? "100%":"0%",height: "4px",              
                                backgroundColor: "#E100FF", 
                                transition: "width 0.3s ease-in-out"}}
                        ></span>
                            
        </a>
    );
}

export default HoverButton;