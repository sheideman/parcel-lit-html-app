import { LitElement, html } from '@polymer/lit-element';

class HolyGrailLayout extends LitElement {
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

.sidebar {
        grid-area: sidebar;
    }

    .sidebar2 {
        grid-area: sidebar2;
    }

    .content {
        grid-area: content;
        padding:10px;
    }

    .header {
        grid-area: header;
    }

    .footer {
        grid-area: footer;
    }

    .grid {
        background-color: #fff;
        color: #444;
    }

  .grid {
    display: grid;
    grid-gap:10px;
    grid-template-areas:
     "header"
     "sidebar"
     "content"
     "sidebar2"
     "footer"
  }

    @media only screen and (min-width: 600px)  {
    .grid {

        grid-template-columns: 20% auto;
        grid-template-areas:
         "header   header"
        "sidebar  content"
        "sidebar2 sidebar2"
        "footer   footer";
    }
    }

    @media only screen and (min-width: 800px)   {
        .grid {
            grid-template-columns: minmax(150px,250px) 2fr minmax(150px,250px);
            grid-template-rows: 50vh 1fr 50px;
            grid-template-areas:
             "header  header  header"
            "sidebar content sidebar2"
            "footer  footer  footer";
        }
    }

.box {
  background-color: #444;
  color: #fff;
  padding: 10px;
  font-size: 150%; 
}

.header,
.footer {
  background-color: #999;
}

.sidebar2 {
  background-color: #ccc;
  color: #444;
}
</style>
  <div class="grid" >

<header class="box header" >Header</header>
<aside class="box sidebar" >Sidebar</aside>
<aside class="box sidebar2" >Sidebar 2</aside>
<main class="content" id="outlet"></main>
<footer class="box footer" >Footer</footer>
</div>
`;
};
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)
this.state = {...this.state, loading:false}
 };
};
customElements.define('holy-grail-layout', HolyGrailLayout);