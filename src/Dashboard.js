import React from 'react';

export default function Dashboard(props) {
  return <section>
    <article>
      <img src={props.catData.imageURL} alt={props.catData.imageDescription}/>
      <h2>{props.catData.name}</h2>
      <dl>
        <dt>sex</dt>
        <dd>{props.catData.sex}</dd>
        <dt>age</dt>
        <dd>{props.catData.age}</dd>
        <dt>breed</dt>
        <dd>{props.catData.breed}</dd>
        <dt>story</dt>
        <dd>{props.catData.story}</dd>
      </dl>
      <button>Adopt</button>
    </article>
    <article>
      <img src={props.dogData.imageURL} alt={props.catData.imageDescription}/>
      <h2>{props.dogData.name}</h2>
      <dl>
        <dt>sex</dt>
        <dd>{props.dogData.sex}</dd>
        <dt>age</dt>
        <dd>{props.dogData.age}</dd>
        <dt>breed</dt>
        <dd>{props.dogData.breed}</dd>
        <dt>story</dt>
        <dd>{props.dogData.story}</dd>
      </dl>
      <button>Adopt</button>
    </article>
  </section>;
}