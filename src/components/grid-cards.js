import { LitElement, html } from '@polymer/lit-element';
class GridCards extends LitElement {
// The properties that your element exposes.
static get properties() { return {
state: {type:Object},
imgSrc:{type:String},
imgAlt:{type:String},
title:{type:String},
description:{type:String},
buttonLink:{type:String},
buttonText:{type:String}
}};
 constructor() {
super();
 // Set up the property defaults here
this.state = {loading:true};
};
render() {
const {state} = this;
return html`
<style>
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap:10px;
}
  .card {
    box-shadow: 0px 1px 5px #555;
    background-color: white;
    overflow:hidden;
    border-radius:3px;
}
.card__title {
 text-align:center;
}
.card__description {
    padding: .5rem;
    line-height: 1.1em;
}
.button {
    display: block;
    background-color: tomato;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    text-align: center;
    transition: .3s ease-out;
}
picture > img{
  object-fit:cover;
}
@media only screen and (min-width: 600px)  {
    .card-container {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
}
@media only screen and (min-width: 800px)   {
    .card-container {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
}
</style>

<section class="card-container">

    <article class="card">
        <header class="card__title">
            <h3>Hello World</h3>
</header>
<picture class="card__thumbnail">
  <source srcset="http://placekitten.com/600/287" media="(min-width: 600px)"  type="image/jpg">
  <source srcset="http://placekitten.com/800/287" media="(min-width: 600px)"  type="image/jpg">
  <img src="http://placekitten.com/${window.innerWidth}/287" alt="card thumbnail">
</picture>
        <main class="card__description">
            Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
        </main>
        <a href="#" class="button">Call to Action</a>
    </article>
    <article class="card">
        <header class="card__title">
            <h3>Hello World</h3>
</header>
<picture class="card__thumbnail">
  <source srcset="http://placekitten.com/600/287" media="(min-width: 600px)"  type="image/jpg">
  <source srcset="http://placekitten.com/600/287" media="(min-width: 600px)"  type="image/webp">
  <img src="http://placekitten.com/${window.innerWidth}/287" alt="card thumbnail">
</picture>
        <main class="card__description">
            Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
        </main>
        <a href="#" class="button">Call to Action</a>
    </article>
    <article class="card">
        <header class="card__title">
            <h3>Hello World</h3>
</header>
<picture class="card__thumbnail">
  <source srcset="http://placekitten.com/600/287" media="(min-width: 600px)"  type="image/jpg">
  <source srcset="http://placekitten.com/600/287" media="(min-width: 600px)"  type="image/webp">
  <img src="http://placekitten.com/${window.innerWidth}/287" alt="card thumbnail">
</picture>
        <main class="card__description">
            Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
        </main>
        <a href="#" class="button">Call to Action</a>
    </article>
    <article class="card">
        <header class="card__title">
            <h3>Hello World</h3>
</header>
<picture class="card__thumbnail">
  <source srcset="http://placekitten.com/600/287" media="(min-width: 600px)"  type="image/jpg">
  <source srcset="http://placekitten.com/600/287" media="(min-width: 600px)"  type="image/webp">
  <img src="http://placekitten.com/${window.innerWidth}/287" alt="card thumbnail">
</picture>
        <main class="card__description">
            Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
        </main>
        <a href="#" class="button">Call to Action</a>
    </article>

</section>
</virtual-scroller>
`;
};
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)
this.state = {...this.state, loading:false}
 };
};
customElements.define('grid-cards', GridCards);