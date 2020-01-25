import React from "react";

class Decroissant extends React.Component {
  handleDown = e => {
    this.props.decrementer();
  };
  render() {
    const { chronoCompt } = this.props;
    return (
      <div className="compt__decroissant">
        {chronoCompt > 0 ? (
          <button className="btn btn-danger" onClick={this.handleDown}>
            Diminuer
          </button>
        ) : (
          <p className="btn-danger">Pas de diminution</p>
        )}
      </div>
    );
  }
}

export default Decroissant;
