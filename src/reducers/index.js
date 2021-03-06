/**
 *
 * Created by chuans
 * Date: 2018/3/19
 */
import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
  libraries: LibraryReducer,
  selectionLibraryId: SelectionReducer
})
