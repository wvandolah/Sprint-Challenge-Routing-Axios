import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  // console.log(props.props[props.match.params.id], props.match.params.id)
  // let props = props.props[props.match.params.id]
  return (
    <div key={props.id} className="Smurf">
      <Link to={`/smurfs/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.delete(props.id)}>delete</button>
    </div>
  );
};



Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

