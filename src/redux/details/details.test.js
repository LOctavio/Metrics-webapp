import reducer, { getList } from './details'

describe('test detailsReducer function', () => {
  const list = [
    {
      country: 'Mexico',
      confirmed_cases: 10000,
    },
    {
      country: 'Argentina',
      confirmed_cases: 20000,
    },
  ];

  it('return the default redux state when there is a default action', () => {
    const exampleAction = () => ({
      type: 'EXAMPLE_ACTION',
      payload: {
        country: 'Argentina',
        confirmed_cases: 20000,
      },
    });
    expect(reducer([], exampleAction())).toStrictEqual([]);
  });

  it('store list in redux state', () => {
    expect(reducer([], getList(list))).toBe(list);
  });


});