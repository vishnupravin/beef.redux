export const addWholeData = (data) =>({
    type:'addWholeData',
    payload:data
})
export const AddItem = (item) =>({
    type:'AddItem',
    payload:item

})
export const INCREMENT_COUNT =(item)=>({
    type:'INCREMENT_COUNT',
    payload:item
})
export const DECREMENT_COUNT =(item)=>({
    type:'DECREMENT_COUNT',
    payload:item
})
export const RemoveFromCart = (index) => (
    {
      type: 'RemoveFromCart',
      payload:index
    }
);
 export const deleteItem = (index) => (
        {
          type: 'deleteItem',
          payload:index
        }
  );







