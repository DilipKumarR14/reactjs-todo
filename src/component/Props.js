function Car(props) {
  return (
    <div>
      <h2>I'm a {props.brand.name}</h2>
      <h1>model {props.brand.model}</h1>
    </div>
  );
}

function Garage() {
    const carInfo = {name: 'Ford', model:'Mustang'}
  return (
    <div>
      <h1>who lives in garage</h1>
      <Car brand= {carInfo} />
    </div>
  );
}

export default Garage;
