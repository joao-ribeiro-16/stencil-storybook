import { Component,  h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'xpand-evaluation',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <div>
      <span class="rating">&#x2605;</span>
      <span class="rating">&#x2605;</span>
      <span class="rating">&#x2605;</span>
      <span class="rating">&#x2606;</span>
      <span class="rating">&#x2606;</span>
      <span class="rating">&#x2606;</span>
    </div>
    );
  }
}
