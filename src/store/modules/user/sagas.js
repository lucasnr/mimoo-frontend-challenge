import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

export function* setUser(action) {
	const { data: products } = yield call(api.get, '/products');
	const user = { name: action.name, products };
	yield put({ type: 'SET_USER_SUCCEEDED', user });
}

export default function* rootSaga() {
	yield takeLatest('SET_USER_REQUESTED', setUser);
}
