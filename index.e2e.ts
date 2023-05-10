import { describe, expect, it } from 'vitest';

import { removeAllChildren } from './index';

describe('removeAllChildren', () => {
  it('removes all children', () => {
    const div = document.createElement('div');

    div.innerHTML = `
      <p>Hello!</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <hr />
    `;

    removeAllChildren(div);

    expect(div.children.length).toBe(0);
  });
});
