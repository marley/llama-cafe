function Section({ title, text }) {
  let fontSize = "";
  let titleClass = "";
  // Check if text is short → apply bigger font
  if (text.length <= 200) {
    fontSize = "lead";
  }
  // Check if title is only one word
  if (title.trim().split(" ").length === 1) {
    titleClass = "text-success"; // Bootstrap green
  }
  return (
    <>
      <h2 className={titleClass}>{title}</h2>
      <p className={fontSize}>{text}</p>
    </>
  );
}
export default Section;
