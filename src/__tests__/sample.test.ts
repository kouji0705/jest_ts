function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compileAndroidCode throws an error with specific message', () => {
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
