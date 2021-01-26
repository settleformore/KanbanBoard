import React from "react";

class PendingColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      listSaved: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  addToList = () => {
    // render form then add
  };

  List = () => {
    let htmlList = <ul></ul>;
    return htmlList;
  };

  Form = () => {
    return (
      <form>
        <label>About</label>
      </form>
    );
  };

  handleClick = () => {
    return <this.Form />;
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default PendingColumn;
