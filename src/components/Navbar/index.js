import React, { useState } from "react";
import MenuList from "./MenuList";

// Styles
import "./index.css";



function Navbar() {
	const [active, setActive] = useState(0);

    const handleClick = (itemID) => {
		setActive(itemID);
	};

    const checkActive = (itemID) => (active === itemID ? "li-active" : ""); 
 
    let content = "";
    switch (active) {
        case 1:
         content = "contenido 1";
         break;
        case 2:
         content = "contenido 2";
         break;
        case 3:
         content = "contenido 3";
         break;
        default:
            content = "";
            break;
    }

   return (
       <div>
           {MenuList.map((list) => {
             const links = list.link
             return <li className={checkActive(list.id)} onClick={() => handleClick(list.id)}>{links}</li>
           })}
       </div>
   )

   

    // return (
    //     <div>
    //       	<ul>
	// 			<li  className={checkActive(1)} onClick={() => handleClick(1)}>
	// 			    {menu}
	// 			 </li>
	// 			<li className={checkActive(2)} onClick={() => handleClick(2)}>
    //                 {menu}
	// 			</li>
	// 			<li className={checkActive(3)} onClick={() => handleClick(3)}>
    //                 {menu}
    //                 </li> 
	// 		</ul>
    //         <div>
    //             <h3>{content}</h3>
    //         </div>
    //     </div>
    // );
}

export default Navbar;