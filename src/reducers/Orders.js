import { types } from '../actions/Orders'

const DEFAULT_STATE = { data: null, loading: false, error: null }

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.GET_ORDERS:
      return { loading: true, data: null, error: null }

    case types.GET_ORDERS_SUCCESS:
      return { loading: false, data: action.payload, error: null }

    case types.GET_ORDERS_FAILED:
      return { loading: false, data: null, error: action.error }

    case types.PUSH_ORDER:
      return {
        ...state,
        data: [...state.data, action.order]
      }

    case types.UPDATE_ORDER:
      const updatedOrders = state.data.map(order => {
        if (order.id !== action.order.id) return order
        return {
          ...order,
          ...action.order
        }
      })

      return {
        ...state,
        data: updatedOrders
      }

    default:
      return state
  }
}
