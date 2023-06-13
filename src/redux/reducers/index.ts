// ** Initial State
const initialState = {
  menuType: 6,
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_MENU':
      return {
        ...state,
        menuType: action.payload
      }
    default:
      return state
  }
}

export default reducer
