import React from 'react';
import Pet from './Pet';
import {fetchCat, adoptCat, fetchDog, adoptDog} from './actions/index';

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
        adopt={() => fetchCat()}/>
      <Pet 
        pet={this.props.dogData}
        adopt={() => fetchDog()} />
    </section>;
  }
}