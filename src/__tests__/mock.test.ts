// 例: 関数をモックして、特定の値を返すように設定する
const mockFunction = jest.fn();
mockFunction.mockReturnValue('mocked value');

test('mock test', () => {
  expect(mockFunction()).toBe('mocked value');
});
