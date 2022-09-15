const shortDate = (input: Date): string =>
  input.getDate() +
  ' ' + input.toLocaleDateString('en-US', {month: 'short'}) +
  (input.getFullYear() === new Date().getFullYear() ? '' : ', ' + input.getFullYear());

export default shortDate;
