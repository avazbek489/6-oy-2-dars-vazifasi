import "./index.css";

function Car(props) {
  const { car } = props;
  return (
    <div className="car-main">
      <ul className="nav-item">
        <li className="item">
          <h3>{car}</h3>
        </li>
      </ul>
    </div>
  );
}

export default Car;
