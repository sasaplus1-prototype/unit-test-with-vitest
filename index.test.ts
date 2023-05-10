import { describe, expect, it } from 'vitest';

import { sum } from './index';

describe('sum', () => {
  it('returns summed result', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
