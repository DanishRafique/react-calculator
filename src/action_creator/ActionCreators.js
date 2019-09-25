import * as ActionTypes from '../action_type/ActionTypes';

export const change_screen_value = (display_value) => {
    return{
        type: ActionTypes.CHANGE_DISPLAY,
        display_value
    }
}

export const change_operation = (operation) => {
    return{
        type: ActionTypes.CHANGE_OPERATION,
        operation
    }
}

export const set_operand = (operand) => {
    return{
        type: ActionTypes.SET_OPERAND,
        operand
    }
}

export const set_operator = (operator) => {
    return{
        type: ActionTypes.SET_OPERATOR,
        operator
    }
}

export const set_scale = (display_scale) => {
    return{
        type: ActionTypes.SET_SCALE,
        display_scale
    }
}

export const clear = () => {
    return{
        type: ActionTypes.CLEAR
    }
}

export const set_dark_mode = (dark_mode) => {
    return{
        type: ActionTypes.DARK_MODE,
        dark_mode
    }
}