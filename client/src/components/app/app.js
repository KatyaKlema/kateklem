import React from "react";
import "./app.scss";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { actionCreator as actionCreatorApp } from "../../reducer/app/app.js";
import { Operation as dataOperation } from "../../reducer/data/data";
import { Operation as userOperation } from "../../reducer/user/user";
import { getLoadingStatus, getTasks, getUnits, getFunctions, getRoleUnit, getRoles, getReviews, getOkrs, getTasksOnRole } from "../../reducer/data/selectors.js";
import { getUser, getAuthStatus } from "../../reducer/user/selectors.js";
import { isTasksPopup } from "../../reducer/app/selectors.js";
import Profile from "../profile/profile";

class App extends React.Component {
	render() {
		const {
			isLoading,
			tasks,
			units,
			okrs,
			reviews,
			functions,
			roleUnit,
			roles,
			activeTab,
			switchActiveTab,
			user,
			logout,
			addRow,
			deleteRow,
            updateRows,
            tasksOnRole,
            isTasksPopup,
            showPopup
		} = this.props;

        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Profile 
                                units={units}
                                user={user}
                                tasksOnRole={tasksOnRole}
                                isTasksPopup={isTasksPopup}
                                showPopup={showPopup}
                            />
                        </Route>
                        <Route render={() => {
                            return (<React.Fragment>
                                <h1>404 page not found</h1>
                                <Link to="/">go to main page</Link>
                            </React.Fragment>);
                        }}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
	user: getUser(state),
	authStatus: getAuthStatus(state),
	isTasksPopup: isTasksPopup(state),
	roles: getRoles(state),
	tasks: getTasks(state),
	reviews: getReviews(state),
	okrs: getOkrs(state),
	units: getUnits(state),
	functions: getFunctions(state),
	roleUnit: getRoleUnit(state),
    isLoading: getLoadingStatus(state),
    tasksOnRole: getTasksOnRole(state)
});

const mapDispatchToProps = (dispatch) => ({
	addRow(table) {
		return dispatch(dataOperation.addRow(table));
	},

	deleteRow(table, id) {
		return dispatch(dataOperation.deleteRow(table, id));
	},

	updateRows(table, data) {
		return dispatch(dataOperation.updateRows(table, data));
	},

	showPopup(isPopup) {
		return dispatch(actionCreatorApp.showPopup(isPopup));
	},

	logout() {
		return dispatch(userOperation.logout());
	},
});

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
