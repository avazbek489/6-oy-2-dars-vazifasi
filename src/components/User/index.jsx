import "./index.css";
import Car from "../Car/index.jsx";
import Address from "../Address/index.jsx";
function User(props) {
  const { firstName, lastName, phone, email, address, image, cars } =
    props.user;
  return (
    <div className="card">
      <img src={image} alt="" />
      <h3>
        Ims Familiyasi: <br />
        {firstName} {lastName}
      </h3>
      <div className="info">
        <span>Telefon: {phone}</span>
        <span>Email: {email}</span>
      </div>
      <Address address={address}></Address>
      {cars.length > 0 &&
        cars.map((car, index) => {
          return <Car car={car} key={index}></Car>;
        })}
      {!cars.length && <p>Avtomobil mavjud emas</p>}
    </div>
  );
}

export default User;
