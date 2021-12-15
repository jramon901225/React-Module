import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";

// Styles
import "./index.css";

function Navbar() {
  const [active, setActive] = useState(0);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      console.table(response);
      const data = await response.json();
      console.log(data);
      setUsers(data);
      return({data})
    };

    getUsers();
  }, []);

 
  
}

export default Navbar;
