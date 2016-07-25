import {
    CREATE_TODO,
    DELETE_TODO
} from '../constants/todos';

export function createTodo(text) {
    return {
        type: CREATE_TODO,
        data: {
            text: text,
            id: Date.now()
        }
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
}
