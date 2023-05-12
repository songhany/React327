export function withdrawal(amount) {
  return {
    type: 'WITHDRAWAL',
    payload: amount
  };
}