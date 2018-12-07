import { LitElement, html } from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { Machine } from 'xstate';
import { interpret } from 'xstate/lib/interpreter';
import '../virtual-scroller/virtual-scroller';
const promiseMachine = Machine({
  id: 'promise',
  initial: 'pending',
  states: {
    pending: {
      onEntry: ['activate'],
      onExit: ['notifyResolved'],
      on: {
        RESOLVE: 'resolved',
        REJECT: 'rejected'
      }
    },
    resolved: {
      type: 'final',
      onEntry: ['loadData'],
      onExit: ['activate']
    },
    rejected: {
      type: 'final',
      onEntry: ['errorMessage'],
      onExit: ['activate']
    }
  }
  
},  {
  actions: {
    // action implementations
    activate: (ctx, event) => {
      console.log('pending...', event);
    },
    errorMessage:(ctx, event)=>{
      console.log('error',  event);
    },
    notifyResolved: (ctx, event) => {
      console.log('resolved',  event);
    },
    loadData: (ctx, event) => {
      console.log('loading data', event);
    }
  }
}
);

const promiseService = interpret(promiseMachine).onTransition(state =>
  console.log(state.value)
);
class BlogPostList extends LitElement {
// The properties that your element exposes.
static get properties() { return {
state: {type:Object},
posts:{type:Array},
selected:{type:Number}
}};
 constructor() {
super();
 // Set up the property defaults here
this.state = {loading:true};
this.posts = [];
this.selected = 0;
};

render() {
const {state, posts} = this;
return html`
<style>

</style>
  ${state.loading ? html`<p>Loading...</p>`:html`<h1>${posts[0].title.rendered}</h1>`}
<button @click="${e=>this.handleScrollNext(e)}">Next</button>
<button @click="${e=>this.handleScrollPrevious(e)}">Previous</button>
  <virtual-scroller id="scroller" style="height:70vh;">
  </virtual-scroller>
`;
};
async fetchPosts(){
  promiseService.start();
  const response = await fetch('https://vanilla-wp-sheideman.c9users.io/wp-json/wp/v2/posts?_embed');
const data = await response.json();
console.log(data);
this.posts = data;
this.state = {...this.state, loading:false}
promiseService.send('RESOLVE');
}
handleScrollNext(e){
  console.log('clicked');
  const scroller = this.shadowRoot.querySelector('virtual-scroller');
  console.log(scroller);
  if(this.selected !== this.posts.length){
    this.selected = this.selected+=1;
    console.log(this.selected)
  } else{
    this.selected = 0;
    console.log(this.selected)
  }
  scroller.scrollToIndex(this.selected, 'start');
}
handleScrollPrevious(e){
  console.log('clicked');
  const scroller = this.shadowRoot.querySelector('virtual-scroller');
  console.log(scroller);
  if(this.selected === -1){
   this.selected = this.posts.length;
  console.log(this.selected)
  } else{
    this.selected = this.selected-=1;
    console.log(this.selected)
  }
  scroller.scrollToIndex(this.selected, 'start');
}
firstUpdated() {

  this.fetchPosts();
  const virtualScroller = this.shadowRoot.querySelector('virtual-scroller');
 virtualScroller.updateElement = (element, post, index) =>
      element.innerHTML = `${index}) ${post.content.rendered}`;   
    fetch('https://vanilla-wp-sheideman.c9users.io/wp-json/wp/v2/posts?_embed')
      .then((resp) => resp.json())
      .then((posts) => virtualScroller.itemSource = posts);
    window.scrollToIndex = (index, position) => {
      virtualScroller.scrollToIndex(index, { position });
    };
    window.toggleHorizontal = (horizontal) => {
      virtualScroller.layout = horizontal ? 'horizontal' : 'vertical';
    };

 

 };
};
customElements.define('blog-post-list', BlogPostList);