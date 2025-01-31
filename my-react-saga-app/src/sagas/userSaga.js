import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure} from './../actions/userActions';

// API function
const fetchUserApi = () => axios.get('https://jsonplaceholder.typicode.com/users/1');

// Worker saga
function* fetchUserSaga() {
  try {
    const response = yield call(fetchUserApi);
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

// Watcher saga
export default function* userSaga() {

   yield takeLatest(fetchUserRequest().type, fetchUserSaga);


}
