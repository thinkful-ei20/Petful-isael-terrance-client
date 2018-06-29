import React from 'react';
import Pet from './Pet';
import {fetchCat, adoptCat, fetchDog, adoptDog} from './actions/index';
import {connect} from 'react-redux';

export class Dashboard extends React.Component{
  constructor(props){
    super();
  }
  componentDidMount(){
    this.props.dispatch(fetchCat());
    // this.props.dispatch(fetchDog())
  }

  adoptCat(){
    this.props.dispatch(adoptCat());
  }

  adoptDog(){
    this.props.dispatch(adoptDog());
  }

  render(){
    // console.log(this.props.cat.age)
    return <section>
      <Pet 
        pet={this.props.cat} 
        onAdopt={this.adoptCat.bind(this)}/>
      <Pet 
        pet={this.props.dog}
        onAdopt={this.adoptDog.bind(this)} />
    </section>;
  }
}

const mapStateToProps = state => ({
  dog: state.dogReducer.data,
  cat: state.catReducer.data
});

export default connect(mapStateToProps)(Dashboard);