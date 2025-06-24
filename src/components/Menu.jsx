function Menu() {
  let today = new Date();
  let dayOfWeek = today.getDay();

  let menuItemsData = [
    { name: "Espresso", price: "2.30" },
    { name: "Cappucino", price: "3.30" },
    { name: "Chai latte", price: "4.00" },
  ];

  let menuItemsJSXArray = menuItemsData.map((menuItem) => {
    return (
      <li>
        {menuItem.name} - {menuItem.price}
      </li>
    );
  });

  return (
    <>
      <h2>Menu</h2>
      <ul>
        {menuItemsJSXArray}
        {dayOfWeek === 6 || dayOfWeek === 7 ? (
          <li>Iced Latte Moca - 4.00</li>
        ) : (
          <div></div>
        )}
      </ul>
    </>
  );
}

export default Menu;
