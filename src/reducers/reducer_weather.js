import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ] // [city, city, city] like flatten es6 
      // return state.concat([action.payload.data]) nearly identical as above

      // don't manipulate state directly.  state.push(action.payload.data) BADDDD.  concat doesn't mutate state
  }
  return state
}
