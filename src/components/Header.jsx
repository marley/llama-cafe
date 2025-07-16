function Header() {
  const todayDate = new Date(); // today's date {minute: 2478932, day: 8, :}
  let dayOfWeek = todayDate.getDay(); // 0-6
  let dateColor = "text-dark"; // black by default

  if (dayOfWeek === 1 || dayOfWeek === 0) {
    // if it's the weekend, then change color
    dateColor = "text-info";
  }

  return (
    <>
      <h1>Llama Coffee co.</h1>
      <img
        src="src/img/llamacoffee.png"
        height="300px"
        alt="the llama coffee logo"
      ></img>
      <p>
        Welcome to Berlin's only llama cafe, where you get to enjoy coffee while
        petting llamas!
      </p>
    </>
  );
}

export default Header;
