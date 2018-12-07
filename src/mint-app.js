import { LitElement, html } from '@polymer/lit-element';
import { Router } from '@vaadin/router';
import logo from './assets/mint-social-logo-white.svg';
import { MINT_SOCIAL_LINEAR_GRADIENT, MINT_SOCIAL_RADIAL_GRADIENT, PRIMARY, SECONDARY, EVENING_PURPLE_LINEAR_GRADIENT, EVENING_PURPLE, STANDOUT } from './styles/Colors';
import './components/static-page'
const pages = {
  home: import('./components/home-page'),
  blog: import('./components/blog/blog-page')
}
class MintApp extends LitElement {
// The properties that your element exposes.
static get properties() { return {
state: {type:Object} 
}};
constructor() {
super();
 // Set up the property defaults here
this.state = {loading:true};

};
async renderPage(name) {
  // Lazily load the requested page.
  const page = await pages[name]
return page;
}
render() {
const {state} = this;
return html`
<style>
    .app-header-linear {
    background: ${PRIMARY};
    background: ${MINT_SOCIAL_LINEAR_GRADIENT};
    padding: 20px;
    color: white;
  }
  .app-header-radial {
    background: ${PRIMARY};
    background: ${MINT_SOCIAL_RADIAL_GRADIENT};
    padding: 20px;
    color: white;
  }
.page {
	display: grid;
  grid-template-rows: auto 50px;
	grid-template-columns: 1fr;
	height: 100vh;
}
.page-body{
  height: calc(100vh - 50px);
  overflow:hidden;
  overflow-y:scroll;
}
.footer {
	grid-column-start: 1;
  grid-column-end:   -1;
  background:#ccc;
}
.header{
  color:#fff;
  padding:1em;
}
.logo{
  width:150px;
}
</style>

  <div class="page">
  <section class="page-body">
  <header class="header app-header-linear"><a href="/"><img class="logo" src="${logo}"/></a></header>
  <main class="content" id="outlet"></main>
  </section>
  <footer class="footer app-header-linear">Footer</footer>
</div>
`;
};
async firstUpdated(){
  const router = new Router(this.shadowRoot.querySelector('#outlet'));
this.state={...this.state, loading:false};
  router.setRoutes([
    {path: '/', action: ()=>{
      this.renderPage('home')}, component: 'home-page'},
    {path:'/blog', action: ()=>{
      this.renderPage('blog')}, component:'blog-page'},
      {path:'/about', component:'static-page'}
  ]);
}
};
customElements.define('mint-app', MintApp);