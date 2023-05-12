const initialState = {
  totalAmount: 2500701
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "WITHDRAWAL":
      return {...state, totalAmount: state.totalAmount - action.payload };
    default:
      return state;
  } 
}