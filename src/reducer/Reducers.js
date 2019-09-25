import * as ActionTypes from '../action_type/ActionTypes';

const defaultState = {
    display_value: 0,
    display_scale: 1,
    operation: null,
    operand: 0,
    operator: 0,
    dark_mode: false,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_DISPLAY:
            return {
                ...state,
                display_value: action.display_value
            }
        case ActionTypes.CHANGE_OPERATION:
            return {
                ...state,
                operation: action.operation
            }
        case ActionTypes.SET_OPERAND:
            return {
                ...state,
                operand: action.operand
            }
        case ActionTypes.SET_OPERATOR:
            return {
                ...state,
                operator: action.operator
            }
        case ActionTypes.SET_SCALE:
            return {
                ...state,
                display_scale: action.display_scale
            }
        case ActionTypes.CLEAR:
            return defaultState;
        case ActionTypes.DARK_MODE:
            return {
                ...state,
                dark_mode: action.dark_mode
            }
        default:
            return state;
    }
};
