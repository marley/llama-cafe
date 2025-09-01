import MenuItem from "./MenuItem";
import menuDataJSON from "../data/menuData.json";
import { useEffect, useState } from "react";

function Menu() {
  let [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(menuDataJSON);
  });

  let menuItemsJSXArray = menuData.map((menuItem) => {
    return (
      <MenuItem key={menuItem.id} item={menuItem.name} price={menuItem.price} />
    );
  });

  return (
    <div id="menu-container">
      <h2>Menu</h2>
      <ul>{menuItemsJSXArray}</ul>
    </div>
  );
}

export default Menu;
