import React, { useState } from "react";

// Styles
import "./index.css";

function Navbar() {
	const [active, setActive] = useState(3);

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
          	<ul>
				<li className={checkActive(1)} onClick={() => handleClick(1)}>
					Item 1
				</li>
				<li className={checkActive(2)} onClick={() => handleClick(2)}>
					Item 2
				</li>
				<li className={checkActive(3)} onClick={() => handleClick(3)}>
					Item 3
                    </li>
			</ul>
            <div>
                <h3>{content}</h3>
            </div>
        </div>
    );
}

export default Navbar;