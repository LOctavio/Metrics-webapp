import reducer, { getList } from './homepage';

describe('test homeReducer function', () => {
  const list = [
    {
      region: 'Queretaro',
      confirmed_cases: 10000,
    },
    {
      region: 'Morelos',
      confirmed_cases: 20000,
    },
  ];

  it('return the default redux state when there is a default action', () => {
    const exampleAction = () => ({
      type: 'EXAMPLE_ACTION',
      payload: {
        region: 'Morelos',
        confirmed_cases: 20000,
      },
    });
    expect(reducer([], exampleAction())).toStrictEqual([]);
  });

  it('store list in redux state', () => {
    expect(reducer([], getList(list))).toBe(list);
  });
});
