import { LitElement, html } from '@polymer/lit-element';

class MediaObject extends LitElement {
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

img {
  max-width: 100%;
}

h1,
p {
  margin: 0 0 1em 0;
}

.media {
  margin-bottom: 2em;
  border: 2px solid #444;
  padding: 10px;
}

.media > .title { grid-area: title; }
.media > .img { grid-area: img; }
.media > .content { grid-area: bd; }
.media > .footer { grid-area: ft; }

.media {
  display: grid;
  grid-column-gap: 20px;
  grid-template-areas:
    "title"
    "img"
    "bd"
    "ft";
}


@media (min-width: 600px) {

  /* clearfix*/
  .media:after {
    content: "";
    display: block;
    clear: both;
  }

  .media > .media {
    margin-left: 160px;
    clear: both;
  }

  .media .img {
    float: left;
    margin: 0 10px 0 0;
    width: 150px;
  }
  
  .media .footer {
    background-color: #eee;
    padding: 10px;
  }

  .media.media-flip .img {
    float: right;
    margin: 0 0 0 10px;
  }

  .media > * {
    margin: 0 0 0 160px;
  }

  .media.media-flip > * {
    margin: 0 160px 0 0;
  }

  @supports(display: grid ) {
    /* override */
    .media > *,
    .media.media-flip > * {
      margin: 0;
    }
    .media .img,
    .media.media-flip .img {
      width: auto;
      margin: 0;
    }
    .media:after {
      content: none;
    }

    .media {
      display: grid;
      grid-column-gap: 20px;
      grid-template-columns: 150px 3fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "img title"
        "img bd"
        "ft ft";
    }

    .media.media-flip {
      grid-template-columns: 3fr 150px ;
      grid-template-areas:
        "title img"
        "bd img"
        "ft ft";
    }

    .media.img-flexie {
      grid-template-columns: minmax(150px, 1fr) 3fr;
    }

    .media.media-flip.img-flexie {
      grid-template-columns: 3fr minmax(150px, 1fr);
    }

    /* nested */
    .media > .media {
      grid-column: 2 / -1 ;
      margin: 0; /* override */
      margin-top: 1em;
    }
  }


}
</style>
<div class="media">

<div class="img">
<img src="https://picsum.photos/250/250/?random" alt="Placeholder">
</div>
<h2 class="title">This is my title</h2>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.
    Praesent quis risus id dolor venenatis condimentum.</p>
</div>
<div class="footer">
  An optional footer goes here.
</div>
</div>

<div class="media media-flip">

<div class="img">
  <img src="https://picsum.photos/250/250/?random" alt="Placeholder">
</div>
<h2 class="title">This is my title</h2>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.
    Praesent quis risus id dolor venenatis condimentum.</p>
</div>
<div class="footer">
  An optional footer goes here.
</div>
</div>

`;
};
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)
this.state = {...this.state, loading:false}
 };
};
customElements.define('media-object', MediaObject);