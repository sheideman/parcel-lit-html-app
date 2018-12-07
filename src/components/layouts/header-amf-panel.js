import { LitElement, html } from '@polymer/lit-element';

class HeaderAMFPanel extends LitElement {
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
<style>
  *,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 40px;
  font-family: 'Open Sans', 'sans-serif';
  background-color: #fff;
  color: #444;
}

h1,
p {
  margin: 0 0 1em 0;
}

.grid {
  max-width: 940px;
  margin: 0 20px;
  display: grid;
  grid-gap: 10px;
}


/* no grid support? */

.grid {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
}

.panel {
  /* needed for the flex layout*/
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 200px;
}

.header,
.footer {
  margin-left: 5px;
  margin-right: 5px;
  flex: 0 1 100%;
  grid-column: 1 / -1;
}

.grid > * {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  margin-bottom: 10px;
}


/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */

@supports (display: grid) {
  .grid > * {
    margin: 0;
  }
}
</style>
<div class="wrapper">
  <header class="header">My header</header>
  
  <div class="panel">Panel A</div>
  <div class="panel">Panel B</div>
  <div class="panel">Panel C</div>
  <div class="panel">Panel D</div>
  <div class="panel">Panel E</div>
  <div class="panel">Panel F</div>
  <div class="panel">Panel G</div>
  <div class="panel">Panel H</div>
  <div class="panel">Panel I</div>
  <div class="panel">Panel J</div>
  
  <footer class="footer">My footer</footer>
</div>
`;
};
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)
this.state = {...this.state, loading:false}
 };
};
customElements.define('header-amf-panel', HeaderAMFPanel);