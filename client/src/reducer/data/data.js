import { extend } from "../../utils.js";

const initialState = {
	isLoading: true,
	tasks: [],
	units: [],
	functions: [],
	roleUnit: [],
	roles: [],
	reviews: [],
    okrs: []
};

const actionType = {
	CHANGE_LOADING: `CHANGE_LOADING`,
	LOAD_TASKS: `LOAD_TASKS`,
	LOAD_UNITS: `LOAD_UNITS`,
	LOAD_FUNCTIONS: `LOAD_FUNCTIONS`,
	LOAD_ROLE_UNIT: `LOAD_ROLE_UNIT`,
	LOAD_ROLES: "LOAD_ROLES",
	LOAD_REVIEWS: "LOAD_REVIEWS",
    LOAD_OKRS: "LOAD_OKRS"
};

const actionCreator = {
	loadTasks: (tasks) => {
		return {
			type: actionType.LOAD_TASKS,
			payload: tasks,
		};
	},
	loadOkrs: (okrs) => {
		return {
			type: actionType.LOAD_OKRS,
			payload: okrs,
		};
	},

	loadReviews: (reviews) => {
		return {
			type: actionType.LOAD_REVIEWS,
			payload: reviews,
		};
	},

	loadRoles: (roles) => {
		return {
			type: actionType.LOAD_ROLES,
			payload: roles,
		};
	},

	loadUnits: (units) => {
		return {
			type: actionType.LOAD_UNITS,
			payload: units,
		};
	},

	loadFunctions: (functions) => {
		return {
			type: actionType.LOAD_FUNCTIONS,
			payload: functions,
		};
	},

	loadRoleUnit: (roleUnit) => {
		return {
			type: actionType.LOAD_ROLE_UNIT,
			payload: roleUnit,
		};
	},

	changeLoading: (isLoading) => {
		return {
			type: actionType.CHANGE_LOADING,
			payload: isLoading,
		};
	},
};

const Operation = {
	loadTasks: () => (dispatch, getState, api) => {
		return api.get(`/airtables/tasks`).then((response) => {
			dispatch(actionCreator.loadTasks(response.data));
		});
	},
	loadReviews: () => (dispatch, getState, api) => {
		return api.get(`/airtables/reviews`).then((response) => {
			dispatch(actionCreator.loadReviews(response.data));
		});
	},

	loadOkrs: () => (dispatch, getState, api) => {
		return api.get(`/airtables/okrs`).then((response) => {
			dispatch(actionCreator.loadOkrs(response.data));
		});
	},

	loadRoles: () => (dispatch, getState, api) => {
		return api.get(`/airtables/roles`).then((response) => {
			dispatch(actionCreator.loadRoles(response.data));
		});
	},
	loadUnits: () => (dispatch, getState, api) => {
		return api.get(`/airtables/units`).then((response) => {
			dispatch(actionCreator.loadUnits(response.data));
		});
	},
	loadFunctions: () => (dispatch, getState, api) => {
		return api.get(`/airtables/functions`).then((response) => {
			dispatch(actionCreator.loadFunctions(response.data));
		});
	},
	loadRoleUnit: () => (dispatch, getState, api) => {
		return api.get(`/airtables/roleunit`).then((response) => {
			dispatch(actionCreator.loadRoleUnit(response.data));
		});
	},

	addRow: (table) => (dispatch, getState, api) => {
		return api.post(`/airtables/addrow/${table}`).then((response) => {
			return response;
		});
	},

	deleteRow: (table, id) => (dispatch, getState, api) => {
		return api
			.post(`/airtables/deleterow/${table}/${id}`)
			.then((response) => {
				return response;
			});
	},

	updateRows: (table, data) => (dispatch, getState, api) => {
		return api.put(`/airtables/updateRows/${table}`, {
			data: data,
		});
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.LOAD_REVIEWS:
			return extend(state, { reviews: action.payload });
		case actionType.LOAD_OKRS:
			return extend(state, { okrs: action.payload });
		case actionType.LOAD_TASKS:
			return extend(state, { tasks: action.payload });
		case actionType.LOAD_UNITS:
			return extend(state, { units: action.payload });
		case actionType.LOAD_FUNCTIONS:
			return extend(state, { functions: action.payload });
		case actionType.LOAD_ROLE_UNIT:
			return extend(state, { roleUnit: action.payload });
		case actionType.CHANGE_LOADING:
			return extend(state, { isLoading: action.payload });
		case actionType.LOAD_ROLES:
			return extend(state, { roles: action.payload });
		default:
			return state;
	}
};

export { reducer, Operation, actionType, actionCreator };
