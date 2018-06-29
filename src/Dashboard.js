import React from 'react';
import Pet from './Pet';

export default class Dashboard extends React.Component{
  constructor(props){
    super();
  }

  onAdoptPet(){
    console.log('adopted');
  }

  render(){
    return <section>
      <Pet 
        pet={this.props.catData} 
        adopt={() => this.onAdoptPet()}/>
      <Pet 
        pet={this.props.dogData}
        adopt={() => this.onAdoptPet()} />
    </section>;
  }
}