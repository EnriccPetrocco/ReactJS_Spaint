import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Circle extends React.Component {
  state = {
    bRadious: "50%"
  };
  render() {
    let circleCSS = {
      backgroundColor: this.props.colore,
      height: this.props.dimensione,
      width: this.props.dimensione,
      borderRadius: this.state.bRadious,
      transition: "0.09s",
      position: "absolute",
      top: this.props.top,
      left: this.props.left
    };
    return <div style={circleCSS} />;
  }
}

class App extends React.Component {
  state = {
    colore: "red",
    dimensione: 10,
    x: 225,
    y: 350
  };

  changeColor = e => {
    console.log(e.target.id);
    this.setState({
      colore: e.target.id
    });
  };

  changeSize = e => {
    let delta = 5;
    if (e.target.id == "-") {
      delta = -delta;
    }
    let nuovaDimensione = this.state.dimensione + delta;
    if (nuovaDimensione <= 150 && nuovaDimensione > 0) {
      this.setState({ dimensione: this.state.dimensione + delta });
    }
  };

  /*
  colorR = () => {
    this.setState({ colore: "red" });
  };

  colorY = () => {
    this.setState({ colore: "yellow" });
  };

  colorB = () => {
    this.setState({ colore: "blue" });
  };

  add = () => {
    this.setState({ dimensione: this.state.dimensione + 15 });
  };

  sub = () => {
    this.setState({ dimensione: this.state.dimensione - 15 });
  };*/

  changePosition = e => {
    console.log(e.pageX, e.pageY);
    this.setState({
      x: e.pageX,
      y: e.pageY
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Spaint </h1>
        <div>
          <button id="red" onClick={this.changeColor}>
            Rosso
          </button>
          <button id="yellow" onClick={this.changeColor}>
            Giallo
          </button>
          <button id="blue" onClick={this.changeColor}>
            Blu
          </button>
          <span>{this.state.colore}</span>
        </div>
        <br />
        <div>
          <button id="-" onClick={this.changeSize}>
            -
          </button>
          <span>{this.state.dimensione}</span>
          <button id="+" onClick={this.changeSize}>
            +
          </button>
        </div>
        <div onMouseMove={this.changePosition} className="Box" />
        <Circle
          dimensione={this.state.dimensione}
          colore={this.state.colore}
          top={this.state.y}
          left={this.state.x}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
