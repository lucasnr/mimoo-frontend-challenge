import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

function* stageProduct(action) {
	const { data: product } = yield call(
		api.get,
		`/products/${action.scannedCode}`
	);

	yield put({
		type: 'STAGE_PRODUCT_SUCCEEDED',
		product,
	});
}

export default function* rootSaga() {
	yield takeLatest('STAGE_PRODUCT_REQUESTED', stageProduct);
}
