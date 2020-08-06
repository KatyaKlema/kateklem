
import nameSpace from "../name-space.js";

const NAME_SPACE = nameSpace.APP;


export const isTasksPopup = (state) => {
    return state[NAME_SPACE].isTasksPopup;
}