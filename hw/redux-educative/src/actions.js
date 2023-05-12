export const withdrawMoney = 'WITHDRAWAL';

export function withdrawal(amount) {
  return {
    type: 'WITHDRAWAL',
    payload: amount
  };
}