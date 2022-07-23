import dataContext from "./DataContext";

const promoterReducer = (state, action) => {
  switch (action.type) {
    case "get_promoter":
      return action.payload;
    default:
      return state;
  }
};

const getPromoters = (dispatch) => () => {
  const fakeData = {
    name: "Tebogo",
    surname: "Nkuna",
    email: "Tebog@gmail.com",
    address: "Pretoria Centurion",
    phoneNumber: "0712345678",
  };
  // const response = await use firebase to request promoter details
  dispatch({ type: "get_promoter", payload: fakeData });
};

export const { Provider, Context } = dataContext(
  promoterReducer,
  {
    getPromoters,
  },
  {}
);
