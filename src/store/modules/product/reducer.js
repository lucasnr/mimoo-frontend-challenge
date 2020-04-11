export default function product(state = null, action) {
	switch (action.type) {
		case 'STAGE_PRODUCT':
			return { ...state, staging: action.product };
		default:
			return state;
	}
}
