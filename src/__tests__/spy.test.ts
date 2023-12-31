const myObject = {
  myMethod() {
    // オリジナルの実装
    return 'custom value';
  },
};

describe('myObject tests', () => {
  let spy;

  beforeEach(() => {
    // myMethodにスパイを設定
    spy = jest.spyOn(myObject, 'myMethod');

    // スパイを使って返却値を設定
    spy.mockReturnValue('custom value');
  });

  afterEach(() => {
    // スパイをリセットして元の実装に戻す
    spy.mockRestore();
  });

  // テスト
  it('should call myMethod and return custom value', () => {
    expect(myObject.myMethod()).toBe('custom value');
    expect(spy).toHaveBeenCalled();
  });
});
