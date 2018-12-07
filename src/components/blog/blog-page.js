import { LitElement, html } from '@polymer/lit-element';
import './blog-post-list'
class BlogPage extends LitElement {
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
${state.loading ? html`<p>Loading...</p>`:html`<h1>Hello from Component</h1>`}
<blog-post-list></blog-post-list>
`;
};
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)
this.state = {...this.state, loading:false}
 };
};
customElements.define('blog-page', BlogPage);