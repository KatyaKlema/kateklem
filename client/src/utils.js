export const extend = (a, b) => {
	return Object.assign({}, a, b);
};

export const getParams = (arr, field) => {
	if (arr) {
		return arr.map((row) => {
			if (row.fields[field]) {
				return row.fields[field];
			}
		});
	}
};

export const findLookUpValue = (arr, lookupValue, fieldName) => {
	try {
		if (lookupValue) {
			return arr.filter((func) => {
				return func.id === lookupValue[0];
			})[0].fields[fieldName];
		}
		return "";
	} catch {
		return "";
	}
};


export const fieldAdapter = (targetField, fieldValue, table) => {
	const index = table.findIndex((element) => {
		return element.fields[targetField] === fieldValue;
	});
	if (index === -1) {
		return "";
	}
	return [table[index].id];
};

export const checkIfEditableTable = (structure, user) => {
	if (user.rights === "Regular") {
		for (let key in structure) {
			structure[key]["editor"] = false;
		}
	}
	return structure;
};

export const filterUnitData = (table, user) => {
	if (user.rights === "Regular") {
		return table.filter((item) => item.unit === user.unit && item.role === user.role);
	} else if (user.rights === "Unit Lead") {
		return table.filter((item) => item.unit === user.unit);
	}
	return table;
};

export const filterDropdownMenus = (props, filterUnits, table, generateFiltersObject) => {
    //console.log(generateFiltersObject());
	//table.setFilter(generateFiltersObject());
	const tab = window.location.pathname.split('/').slice(-1)[0]

	if (tab === 'tasks') {
		// Tasks table, Role and Function column dropdown filter
		table.updateColumnDefinition('roleAndFunc', {
			editorParams: {
				values: props.filterRoleAndFuncDropdownByUnit(filterUnits, props.functions, props.units)
			}
		})
	}
	else if (tab === 'functions') {
		// Functions table, Role column dropdown filter
		table.updateColumnDefinition('role', {
			editorParams: {
				values: props.filterRoleDropdownByUnit(filterUnits, props.roleUnit, props.roles, props.units)
			}
		})
	}
}
