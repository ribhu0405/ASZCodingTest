import {
    OPEN_MODAL,
    CLOSE_MODAL,
    LOAD_MODAL,
    SAVE_USER,
    DELETE_USER,
    CHANGE_USER_FIELD,
    SAVE_TODO,
    DELETE_TODO,
    CHANGE_TODO_FIELD
} from "../constants/constants";

export class UserTodoActions {

    openModal = (payload) => {
        return { type: OPEN_MODAL, payload }
    }

    closeModal = (payload) => {
        return { type: CLOSE_MODAL, payload }
    }

    loadModal = (payload) => {
        return { type: LOAD_MODAL, payload }
    }

    saveUser = (payload) => {
        return { type: SAVE_USER, payload }
    }

    deleteUser = (payload) => {
        return { type: DELETE_USER, payload }
    }

    changeUserField = (payload) => {
        return { type: CHANGE_USER_FIELD, payload }
    }

    saveTodo = (payload) => {
        return { type: SAVE_TODO, payload }
    }

    deleteTodo = (payload) => {
        return { type: DELETE_TODO, payload }
    }

    changeTodoField = (payload) => {
        return { type: CHANGE_TODO_FIELD, payload }
    }

}