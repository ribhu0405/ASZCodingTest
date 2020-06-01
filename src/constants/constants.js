export const initialState = {
    User: {
        UserList: [],
        SelectedUser: {},
        showModalForUser: false,
        loading: false
    },
    Todo: {
        TodoList: [],
        SelectedTodo: {},
        showModalForTodo: false,
        loading: false
    }
}


export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const LOAD_MODAL = "LOAD_MODAL";

export const SAVE_USER = "SAVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const CHANGE_USER_FIELD = "CHANGE_USER_FIELD";

export const SAVE_TODO = "SAVE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHANGE_TODO_FIELD = "CHANGE_TODO_FIELD";
