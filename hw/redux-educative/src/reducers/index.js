export default (state, action) => {
  switch (action.type) {
    case "WITHDRAWAL_10,000":
      return {...state, totalAmount: totalAmount - 10000 };
    default:
      return state;
  } 
};