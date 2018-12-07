import {Layout1d} from './layouts/Layout1d.js';
import {directive} from 'lit-html';
import {VirtualScroller} from './VirtualScroller.js';

import {LitMixin} from './lit-repeater.js';

export const LitScroller = LitMixin(VirtualScroller);

const partToScroller = new WeakMap();
export const scroller = directive((config = {}) => async part => {
  let scroller = partToScroller.get(part);
  if (!scroller) {
    if (!part.startNode.isConnected) {
      await Promise.resolve();
    }
    if (!config.layout && config.direction) {
      config.layout = new Layout1d({direction: config.direction});
    }
    const {template, layout} = config;
    scroller = new LitScroller({part, template, layout});
    partToScroller.set(part, scroller);
  }
  scroller.totalItems = config.totalItems;
});

export const virtualScroller = (totalItems, template, direction = 'vertical') =>
    scroller({totalItems, template, direction});
