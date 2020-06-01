import {
    initialState,
    OPEN_MODAL,
    CLOSE_MODAL,
    SAVE_USER,
    DELETE_USER,
    CHANGE_USER_FIELD,
    SAVE_TODO,
    DELETE_TODO,
    CHANGE_TODO_FIELD,
    LOAD_MODAL

} from "../constants/constants";

export function rootReducer(state = initialState, action) {

    let tempState = { ...state };
    let tempUser = { ...tempState.User };
    let tempTodo = { ...tempState.Todo };

    let payload = action.payload;

    switch (action.type) {
        case OPEN_MODAL:
            tempUser.showModalForUser = payload.showModalForUser;
            tempTodo.showModalForTodo = payload.showModalForTodo;
            if (payload.showModalForUser) {
                var SelectedUser =
                    !payload.SelectedUser ?
                        {
                            key: new Date().getTime(),
                            name: '',
                            email: '',
                        }
                        :
                        payload.SelectedUser
                tempUser.SelectedUser = SelectedUser;
            }
            else if (payload.showModalForTodo) {
                var SelectedTodo =
                    !payload.SelectedTodo ?

                        {
                            key: new Date().getTime(),
                            action: '',
                            dateAdded: null,
                        }
                        :
                        payload.SelectedTodo
                tempTodo.SelectedTodo = SelectedTodo;
            }
            break;
        case CLOSE_MODAL:
            tempUser.showModalForUser = false;
            tempTodo.showModalForTodo = false;
            tempTodo.SelectedUser = {};
            tempTodo.SelectedTodo = {};
            break;

        case SAVE_USER:
            var UserList = [...tempUser.UserList];
            var indexOfSelectedUser = UserList.findIndex(user => user.key === payload.User.key);
            if (indexOfSelectedUser > -1) {
                UserList[indexOfSelectedUser] = payload.User;
            }
            else {
                UserList.push(payload.User);
            }
            tempUser.UserList = UserList;
            tempUser.loading = true;
            tempTodo.SelectedUser = {};
            tempTodo.SelectedTodo = {};
            break;
        case DELETE_USER:
            UserList = [...tempUser.UserList];
            indexOfSelectedUser = UserList.findIndex(user => user.key === payload.SelectedUser.key);
            UserList.splice(indexOfSelectedUser, 1)
            tempUser.UserList = UserList;
            break;
        case CHANGE_USER_FIELD:
            SelectedUser = payload.SelectedUser;
            if (payload.email) {
                SelectedUser.email = payload.email
            }
            else if (payload.name) {
                SelectedUser.name = payload.name;
            }
            tempUser.SelectedUser = SelectedUser;
            break;

        case SAVE_TODO:
            var TodoList = [...tempTodo.TodoList];
            var indexOfSelectedTodo = TodoList.findIndex(todo => todo.key === payload.Todo.key);

            if (indexOfSelectedTodo > -1) {
                TodoList[indexOfSelectedTodo] = payload.Todo;
            }
            else {
                TodoList.push(payload.Todo);
            }
            tempTodo.TodoList = TodoList;
            tempTodo.loading = true;
            tempTodo.SelectedUser = {};
            tempTodo.SelectedTodo = {};
            break;
        case DELETE_TODO:
            TodoList = [...tempTodo.TodoList];
            indexOfSelectedTodo = TodoList.findIndex(todo => todo.key === payload.SelectedTodo.key);
            TodoList.splice(indexOfSelectedTodo, 1)
            tempTodo.TodoList = TodoList;
            break;
        case CHANGE_TODO_FIELD:
            SelectedTodo = payload.SelectedTodo;
            if (payload.action) {
                SelectedTodo.action = payload.action
            }
            else if (payload.dateAdded) {
                SelectedTodo.dateAdded = payload.dateAdded;
            }
            tempTodo.SelectedTodo = SelectedTodo;
            break;
        case LOAD_MODAL:
            tempUser.loading = false;
            tempTodo.loading = false;
            tempUser.showModalForUser = false;
            tempTodo.showModalForTodo = false;
            break;

        default:
            break;
    }

    tempState.User = tempUser;
    tempState.Todo = tempTodo;

    return tempState;

}