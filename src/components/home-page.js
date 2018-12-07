import { LitElement, html } from '@polymer/lit-element';
import './page-header';
import './grid-cards';
import './media-object';
class HomePage extends LitElement {
// The properties that your element exposes.
static get properties() { return {
state: {type:Object} 
}};
 constructor() {
super();
 // Set up the property defaults here
this.state = {loading:true};
};

render() {
  const {state} = this;

  return html`
<page-header layout="white-overlay" height="50vh" pageTitle="Home" actionButton></page-header>
<grid-cards></grid-cards>
<media-object></media-object>
  `;
  };
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)


 };
};
customElements.define('home-page', HomePage);