const INITIAL_STATE = {
	hasStaged: false,
	loading: false,
};

export default function product(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'STAGE_PRODUCT_REQUESTED':
			return { loading: true };
		case 'STAGE_PRODUCT_SUCCEEDED':
			return { loading: false, staged: action.product, hasStaged: true };
		case 'UNSTAGE_PRODUCT':
			return { loading: false, hasStaged: false };
		default:
			return state;
	}
}
