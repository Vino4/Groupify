import { Map, List } from 'immutable'
import * as Actions from '../actions'
import * as ActionsHandlers from './actionHandlers'

const initialState = Map({
    jwtToken: localStorage.getItem('jwtToken') || null
})

export default (state = initialState, action) => {
    switch (action.type) {
        case(Actions.authenticationActions.AUTHENTICATION_SUCCESS):
            return ActionsHandlers.authenticationActionsHandlers.handleAuthenticationSuccess(state, action.payload)

        case(Actions.authenticationActions.UNAUTHENTICATIONSUCCESS):
            return ActionsHandlers.authenticationActionsHandlers.handleUnauthenticationSuccess(state, action.payload)

        default:
            return state
    }
}
