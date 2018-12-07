import { LitElement, html } from '@polymer/lit-element';
import mintLeafSVG from '../assets/mint-leaf.svg';
class PageHeader extends LitElement {
// The properties that your element exposes.
static get properties() { return {
  pageTitle: {type:String},
  layout:{type:String, reflect:true},
  subTitle:{type:String},
  height: {type:String},
  hidden:{type:Boolean},
  featuredImage:{type:String},
  state:{type:Object},
  actionButton:{type:Boolean}
  }};
 constructor() {
super();
 // Set up the property defaults here
this.state = {loading:true};
this.featuredImage = 'https://picsum.photos/1200/600/?random';
};
renderHeaderVariant(){
  const {pageTitle, layout, subTitle, height, hidden, featuredImage, actionButton} = this;
  switch(true){
    case layout === "frosted-overlay":
    return html`<header id="masthead" style="height:${height};">
    <div class="wrapper frosted-overlay" style="background-image: url('${featuredImage}');"></div>
        <div class="message">
                <h1 class="uppercase">${pageTitle}</h1>
                <div class="cta-buttons">
                    <div class="inline-btn">
                        
                        ${actionButton ? html`<button class="ui yellow button" > Explore Your Options</button>`: null}
                        </div>
       
                </div>
        </div>
   </header>`
    case layout === "white-overlay":
    return html`
<header id="masthead">
   <div class="wrapper" style="height:${height}; background-image: url('${featuredImage}');">
   <div class="white-overlay"></div>
       <div class="message">
               <h1 class="uppercase">${pageTitle}</h1>
               <div class="cta-buttons">
                   <div class="inline-btn">
                       
                       ${actionButton ? html`<button class="ui yellow button" > Explore Your Options</button>`: null}
                       </div>
      
               </div>
       </div>
   </div>
  </header>
`
case layout === "black-overlay":
return html`
<header id="masthead">
<div class="wrapper" style="height:${height}; background-image: url('${featuredImage}');">
<div class="black-overlay"></div>
   <div class="message">
           <h1 class="uppercase">${pageTitle}</h1>
           <div class="cta-buttons">
               <div class="inline-btn">
                   
                   ${actionButton ? html`<button class="ui yellow button" > Explore Your Options</button>`: null}
                   </div>
  
           </div>
   </div>
</div>
</header>
`
    default:
    return html`
    <header style="width:100%;">
    <h2>
  <img style="width:40px; height:40px; padding:5px; background:#fff; border-radius:50%;" src="${mintLeafSVG}"/>
  <div class="content">
  <span style="font-variant: uppercase;">${pageTitle}</span>
    <div class="sub header">${subTitle}</div>
  </div>
</h2>
  </header>`
  }

}
render() {
const {state} = this;
return html`
<style>
#masthead{
  position:relative;
  overflow:hidden;
}
button{
  background:#000;
  padding:10px 20px;
  color:#fff;
}
h2{
  max-width:100%!important;
}
header{
  position:relative;
  overflow:hidden;
}
.black-overlay{
  position:absolute; top:0; left:0; bottom:0; right:0; background:rgba(0, 0, 0, 0.5);

}
.white-overlay{
position:absolute; top:0; left:0; bottom:0; right:0; background:rgba(255, 255, 255, 0.3);


}
.frosted-overlay{
  position:absolute; top:-10px; left:-10px; bottom:-10px; right:-10px; opacity:1;
filter: blur(7px);
z-index:-1;

}
.message h1{
    color:#fff;
    font-size:3em;
   text-shadow: 1px 1px 3px #000;
   font-family: 'Oswald', sans-serif;

}
h2{
  text-shadow:1px 1px #000;
  max-width:80%;
  text-align:center;
}
.wrapper {
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: gold;
    width: 100%;
    overflow: hidden;
}

.message {
    display: flex;
    z-index: 1;
  position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 100%;
    width: 100%;
}

.inline-btn {
    margin: 5px;
}
.blue{
  background:blue;
}
.cta-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.logo{
  width:300px;

}
.lighter{
  font-weight:lighter;
}
@media (max-width: 800px) {
    .cta-buttons {

        flex-direction: column;
    }
    .message h1 {
        text-align: center;
        color: #fff;
        font-size: 2em;
        text-shadow: 1px 1px 3px #000;
        font-family: 'Oswald', sans-serif;
    }
    .logo{
  width:200px;

}
}
</style>
${this.renderHeaderVariant()}

`;
};
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)
this.state = {...this.state, loading:false}
 };
};
customElements.define('page-header', PageHeader);