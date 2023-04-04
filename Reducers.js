import meals from '../test.json';
import ActionTypes from './ActionTypes';
import sqlite from '../src/Sqlite';

const sql  = new sqlite();
const initialState = {
  data: meals.meals,
  count: 0,
  cart: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.addWholeData:
     
      return {
        ...state,
        data: action.payload,
     
      };
    case ActionTypes.AddItem:
    

      state.data[action.payload.index].qty = action.payload.qty;
      let temp = [];
      state.data.map(item => {
        if (item.qty > 0) {
          temp.push(item);
        }
      });
      state.cart = temp;
      return state;


    case ActionTypes.RemoveFromCart:
    
      state.cart = state.cart.filter(
        item => item.idMeal != action.payload.item.idMeal,
      );
     case ActionTypes.deleteItem:
   
       let  item = action.payload;
       console.log(item);
        sql.DeleteItem(item);
        state.item[action.payload]=item[action.payload]
        
        return state;
      
      // console.log('cart', state.cart);
      // console.log('item', action.payload.item.idMeal);
      // return state;

    case ActionTypes.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionTypes.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default Reducer;
