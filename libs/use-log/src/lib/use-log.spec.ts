import { useLog } from './use-log';

describe('useLog', () => {
  it('should work', () => {
    expect(useLog('yo')).toEqual('Hello yo');
  });
});
