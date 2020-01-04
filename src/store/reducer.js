import * as actions from './actionTypes'
export const INITIAL_STATE = {
    isDrawerOpen: false,
    theme: 'dark'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SET_THEME: 
            return {
                ...state,
                theme: action.theme
            }
        case actions.TOGGLE_DRAWER:
            return {
                ...state,
                isDrawerOpen: !state.isDrawerOpen
            }
        default: 
            return state
    }

}