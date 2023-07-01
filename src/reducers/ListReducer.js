const initialState = [
    {
        id: 1,
        label: 'boleto conta luz',
        value: 300,
        date: '18/09/2022',
        type: 0 // gastos
    },
    {
        id: 2,
        label: 'pix cliente',
        value: 500,
        date: '17/08/2022',
        type: 1 // entrada
    },
    {
        id: 3,
        label: 'salario',
        value: 7500,
        date: '17/09/2022',
        type: 1 // entrada
    },
]

const listReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'DELETE_TASK': {
        const id = action.payload.id;
        console.log('action-delete-called')
        return state.filter((el) => el.id !== id);
    }
    case 'ADD_TASK': {
        return state.concat(action.payload);
    }
  }

  return state;

}

export default listReducer;