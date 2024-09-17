import { NavLink } from "react-router-dom";
import IconMenue from "../icons/IconMenue";
import MenueBar from "./MenueBar";
import { useState } from "react";

function NavBar() {
  const [openOrclose, setOpenOrclose] = useState('open');
  const menue = () => {
    if (openOrclose === 'open') {
      setOpenOrclose('close');
    } if (openOrclose === 'close') {
      setOpenOrclose('open');
    }
  }

  return (
    <nav id="box" className="relative h-screen col-start-1 col-end-2 row-start-1 row-end-3">
      <MenueBar status={openOrclose} />
      <div className="z-10 absolute top-10 left-5 cursor-pointer" onClick={() => menue()} >
        <IconMenue />
      </div>
    </nav>
  )
}

export default NavBar