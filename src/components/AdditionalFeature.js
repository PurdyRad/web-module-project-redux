import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/addFeature'


const AdditionalFeature = props => {

  const handleAdder = () => {
    props.addFeature(props.feature)
  }
  console.log(props.feature,'feature props')
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAdder}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default connect(null, {addFeature})(AdditionalFeature);
