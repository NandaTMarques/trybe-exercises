
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

test('two objects (JSON) to check if they are identical or not', () => {
  expect(obj1).toEqual(obj2);
  expect(obj1).not.toEqual(obj3);
})

test('two objects (JSON) to check if they are identical or not', () => {
  expect(obj1).toEqual(obj3);
  expect(obj1).not.toEqual(obj2);
});