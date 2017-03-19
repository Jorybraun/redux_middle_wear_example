// dispatch is function
export default function ({ dispatch }) {
  return next => action => { 
    // if there is no promise to resolve
    if (!action.payload || !action.payload.then){
      return next(action);
    }

    action.payload
      .then((res) => {
        const newData = { ...action, payload: res.data };
        dispatch(newData);
      });
  };
}