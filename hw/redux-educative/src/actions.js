
export function withdrawal10000(id, amount) {
  return {
    type: 'WITHDRAWAL_10,000',
    payload: { id, amount }
  };
}
