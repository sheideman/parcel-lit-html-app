import { LitElement, html } from '@polymer/lit-element';
import './page-header';
import './grid-cards';
import './media-object';
class StaticPage extends LitElement {
// The properties that your element exposes.
static get properties() { return {
  state:{type:Object}
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
  .content{
    padding:1em;
  }
</style>
<page-header layout="frosted-overlay" height="50vh" pageTitle="About" actionButton></page-header>
<div class="content">
<grid-cards>
</grid-cards>
<media-object></media-object>
</div>

`;
};
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)
this.state = {...this.state, loading:false}
 };
};
customElements.define('static-page', StaticPage);