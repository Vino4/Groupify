import {Map, List, Set, OrderedSet} from 'immutable';

/** Create Action Handlers  **/
let handleUpdateActivityViewSelectingSurvey = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'selectingSurvey'], payload);
    return newState;
}

let handleUpdateActivityViewCreatingSurvey = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'creatingSurvey'], payload);
    return newState;
}

let handleUpdateActivityViewOpenCreateModal = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'openCreateModal'], payload);
    return newState;
}

let handleUpdateActivityViewIsCreating = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isCreating'], payload);
    return newState;
}

let handleUpdateActivityViewFailedToCreate = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'failedToCreate'], payload);
    return newState;
}

let handleUpdateActivityViewCreateError = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'createError'], payload);
    return newState;
}

/** Edit Action Handlers  **/
let handleUpdateActivityViewOpenEditModal = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'openEditModal'], payload);
    return newState;
}

let handleUpdateActivityViewIsEditing = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isEditing'], payload);
    return newState;
}

let handleUpdateActivityViewFailedToEdit = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'failedToEdit'], payload);
    return newState;
}

let handleUpdateActivityViewEditError = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'editError'], payload);
    return newState;
}

/** Delete Action Handlers  **/
let handleUpdateActivityViewOpenDeleteModal = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'openDeleteModal'], payload);
    return newState;
}

let handleUpdateActivityViewIsDeleting = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isDeleting'], payload);
    return newState;
}

let handleUpdateActivityViewFailedToDelete = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'failedToDelete'], payload);
    return newState;
}

let handleUpdateActivityViewDeleteError = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'deleteError'], payload);
    return newState;
}

export {
    handleUpdateActivityViewSelectingSurvey,
    handleUpdateActivityViewCreatingSurvey,

    handleUpdateActivityViewOpenCreateModal,
    handleUpdateActivityViewIsCreating,
    handleUpdateActivityViewFailedToCreate,
    handleUpdateActivityViewCreateError,

    handleUpdateActivityViewOpenEditModal,
    handleUpdateActivityViewIsEditing,
    handleUpdateActivityViewFailedToEdit,
    handleUpdateActivityViewEditError,

    handleUpdateActivityViewOpenDeleteModal,
    handleUpdateActivityViewIsDeleting,
    handleUpdateActivityViewFailedToDelete,
    handleUpdateActivityViewDeleteError,
}
