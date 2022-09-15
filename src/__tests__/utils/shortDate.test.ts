import shortDate from '../../utils/shortDate';

describe('shortDate', () =>{
  const currentYear = new Date().getFullYear();

  it ('shortens current year date', () => {
    expect(shortDate(new Date(`${currentYear}-08-01`))).toEqual('1 Aug');
  });

  it ('shortens previous year date', () => {
    expect(shortDate(new Date(`${currentYear - 1}-08-01`))).toEqual(`1 Aug, ${currentYear - 1}`);
  });

  it ('shortens edge cases properly', () => {
    expect(shortDate(new Date(`${currentYear}-12-31`))).toEqual('31 Dec');
    expect(shortDate(new Date(`${currentYear}-01-01`))).toEqual('1 Jan');
    expect(shortDate(new Date(`${currentYear}-02-28`))).toEqual('28 Feb');
    expect(shortDate(new Date(`2020-02-29`))).toEqual('29 Feb, 2020');
  });
});
