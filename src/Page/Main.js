import React from "react";
import Board from "../components/Board";
import Croissant from "../components/Croissant";
import Decroissant from "../components/Decroissant";
import { incrementer, decrementer } from "../actions/compt.actions";
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    // action du reducers envoyés aux composants enfants
    const { incrementer, decrementer } = this.props;

    // variables du state envoyés aus enfants
    const { maxCompt, chronoCompt } = this.props;
    return (
      <div className="d-flex justify-content-around">
        <Croissant
          maxCompt={maxCompt}
          chronoCompt={chronoCompt}
          incrementer={incrementer}
        />
        <Board maxCompt={maxCompt} chronoCompt={chronoCompt} />
        <Decroissant chronoCompt={chronoCompt} decrementer={decrementer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  maxCompt: state.reducersCompt.maxCompt,
  chronoCompt: state.reducersCompt.chronoCompt
});

const mapDispatchToProps = dispatch => ({
  incrementer: () => dispatch(incrementer()),
  decrementer: () => dispatch(decrementer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
