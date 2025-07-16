function StaffComponent({ filePath, name, bio }) {
  return (
    <div className="col-sm" align="center">
      <img src={filePath} height="200px" className="rounded-circle" />
      <h4>{name}</h4>
      <p>{bio}</p>
    </div>
  );
}

export default StaffComponent;
