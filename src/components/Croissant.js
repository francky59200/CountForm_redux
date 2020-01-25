import React from "react";
import PropTypes from 'prop-types'

class Croissant extends React.Component {
  handleUp = e => {
    this.props.incrementer();
  };
  render() {
    // props reçus du composant parents
    const { chronoCompt, maxCompt } = this.props;

    return (
      <div className="compt__croissant">
        {chronoCompt < maxCompt ? (
          <button className="btn btn-success" onClick={this.handleUp}>
            Augmenter
          </button>
        ) : (
          <p className="btn-success">vous avez depasser le nombre</p>
        )}
      </div>
    );
  }
}

Croissant.Proptypes={
   incrementer: PropTypes.func,
   chronoCompt:PropTypes.string.isRequired,
   maxCompt: PropTypes.string.isRequired
}

export default Croissant;
