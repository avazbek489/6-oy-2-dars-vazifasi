import "./index.css";

function Address(props) {
  const { region, zip } = props.address;
  return (
    <div className="adress">
        <h5 className="main-add">Addres:</h5>
      <ul className="add-nav-item">
        <li><h3>{region}</h3></li>
        <li><h3 className="subtittle">{zip}</h3></li>
      </ul>
    </div>
  );
}

export default Address;
