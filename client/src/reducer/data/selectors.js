
import nameSpace from "../name-space.js";
import {getUser} from "../user/selectors";
import {createSelector} from "reselect";
import { format } from "morgan";

const NAME_SPACE = nameSpace.DATA;

const concatData = (data) => {
    let result = [];
    data.forEach((item) => {
        result = result.concat(item);
    });

    return result;
};

export const getLoadingStatus = (state) => {
    return state[NAME_SPACE].isLoading;
};

export const getReviews = (state) => {
    return concatData(state[NAME_SPACE].reviews);
};

export const getOkrs = (state) => {
    return concatData(state[NAME_SPACE].okrs);
};

export const getTasks = (state) => {
    return concatData(state[NAME_SPACE].tasks);
};

export const getUnits = (state) => {
    return concatData(state[NAME_SPACE].units);
};

export const getFunctions = (state) => {
    return concatData(state[NAME_SPACE].functions);
};

export const getRoleUnit = (state) => {
    return concatData(state[NAME_SPACE].roleUnit);
};

export const getRoles = (state) => {
    return concatData(state[NAME_SPACE].roles);
};

const findLookUpArray = (arr, lookupValue, fieldName) => {
	try {
		if (lookupValue) {
			const foundArray =  arr.filter((func) => {
                for (let i = 0; i < lookupValue.length; i++) {
                    if (func.id === lookupValue[i]) {
                        return true
                    }
                }
                return func.id === lookupValue[0];
            });
            return foundArray.map((item) => item.fields[fieldName]);
		}
		return "";
	} catch {
		return "";
	}
};

export const getTasksOnRole = createSelector(
    [getTasks, getRoleUnit, getUser],
    (tasks, roles, user) => {
       const tasksOnRole =  tasks.filter((task) => {
        const taskFields = task.fields;
        const rolesList = findLookUpArray(roles, taskFields["Role"], "Role in Unit");
        if (user.role) {
            return rolesList.includes(user.role);
        }
        return false;
        
       })
       .map((item) => item.fields['Task'])
       .filter((value) => !!(value))
       .filter((value, index, self) => self.indexOf(value) === index);
       
       return tasksOnRole;
    }
    
);

