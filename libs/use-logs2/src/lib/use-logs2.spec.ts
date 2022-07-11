import { useLogs2 } from './use-logs2';

describe('useLogs2', () => {
  it('should work', () => {
    expect(useLogs2('text')).toEqual('Logs: text');
  });
});
