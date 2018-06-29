import React from 'react';

export default function Pet(props){
  return <article>
  <img src={props.pet.imageURL} alt={props.pet.imageDescription}/>
  <h2>{props.pet.name}</h2>
  <dl>
    <dt>sex</dt>
    <dd>{props.pet.sex}</dd>
    <dt>age</dt>
    <dd>{props.pet.age}</dd>
    <dt>breed</dt>
    <dd>{props.pet.breed}</dd>
    <dt>story</dt>
    <dd>{props.pet.story}</dd>
  </dl>
  <button onClick={() => props.adopt()}>Adopt</button>
</article>
}