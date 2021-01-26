import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props);
    
    this.state = { 
        saved: false,
    };
  }


  render(){
    return(
      {!this.state.saved ? }
    );
  }
}

export default Card;