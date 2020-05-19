import { user } from './index'

it('should return hobby', () => {
    const result = user.hobby;
    expect(result).toEqual('football')
});

it('should return status', () => {
    const result = user['married'];
    expect(result).toEqual(false);
});
it('should return favorite music', () => {
    const result = user['favorite music'];
    expect(result).toEqual('rock');
});