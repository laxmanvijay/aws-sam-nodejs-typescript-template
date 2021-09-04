// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from '@jest/globals';
import { handler } from '../../app';

describe('Tests index', () => {
  it('verifies successful response', async () => {
    const result = await handler({}, {});

    expect(result.statusCode).toBe(200);
    expect(result.body).toContain('message');
  });
});
