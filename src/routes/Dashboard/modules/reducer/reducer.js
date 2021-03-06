import * as Actions from '../actions'
import * as ActionHandlers from './actionHandlers'
import {Map, Set, List, OrderedSet} from 'immutable';

const initialState = Map({
    surveysViewData: Map({
        isLoading:true,
        failedToGet:false,

        openEditModal:false,
        isEditing:false,
        failedToEdit:false,
        editError:'',

        openCreateModal:false,
        isCreating:false,
        failedToCreate:false,
        createError:'',

        openDeleteModal:false,
        isDeleting:false,
        failedToDelete:false,
        deleteError:'',

        surveys: List([]),

        surveyHolderQuestionIndex:0,
        surveyHolder: Map({
            title: '',
            surveyId:'',
            questions : List([])
        }),
        surveyTemplate: Map({
            title: '',
            surveyId:'',
            questions : List([])
        }),

    }),


    activitiesViewData: Map({
        selectingSurveyStage:false,
        creatingNewSurvey:false,

        isCreatingSurvey:false,

        isLoading:true,
        failedToGet:false,

        openEditModal:false,
        isEditing:false,
        failedToEdit:false,
        editError:'',

        openCreateModal:false,
        isCreating:false,
        failedToCreate:false,
        createError:'',

        openDeleteModal:false,
        isDeleting:false,
        failedToDelete:false,
        deleteError:'',

        activities: List([]),

        activityHolder: Map({
            color: '',
            activityId: '',
            surveyId: '',
            title: '',
            endDate: '',
            groupCapacity: 0,
            totalCapacity: 0,
        }),
        activityTemplate: Map({
            color: '',
            activityId: '',
            surveyId: '592edc68c7a8e10b6bdf99ff',
            title: '',
            endDate: '',
            groupCapacity: 0,
            totalCapacity: 0,
        }),

    }),


    accountSettingsViewData: Map({
        isLoading:true,
        failedToGet:false,

        userName:'',
        userNameHolder:'',


        createdAt:'',

        email:'',
        emailHolder:'',

        photo:'',
        photoHolder:'',

        currentPasswordHolder:'',
        newPasswordHolder:'',
        confirmPasswordHolder:'',



    }),

});

let dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        /* fetching user profile actions */
        case Actions.fetchUserProfileActions.FETCH_USER_PROFILE:
            return ActionHandlers.fetchUserProfileActionHandlers.handleFetchUserProfile(state, action.payload)
        case Actions.fetchUserProfileActions.FETCH_USER_PROFILE_SUCCESS:
            return ActionHandlers.fetchUserProfileActionHandlers.handleFetchUserProfileSuccess(state, action.payload)
        case Actions.fetchUserProfileActions.FETCH_USER_PROFILE_FAILURE:
            return ActionHandlers.fetchUserProfileActionHandlers.handleFetchUserProfileFailure(state, action.payload)

        /* fetching activities actions */
        case Actions.fetchActivityListActions.FETCH_ACTIVITY_LIST:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchingActivityList(state, action.payload)
        case Actions.fetchActivityListActions.FETCH_ACTIVITY_LIST_SUCCESS:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchActivityListSuccess(state, action.payload)
        case Actions.fetchActivityListActions.FETCH_ACTIVITY_LIST_FAILURE:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchActivityListFailure(state, action.payload)

        /* create activity actions */
        case Actions.createActivityActions.CREATE_ACTIVITY:
            return ActionHandlers.createActivityActionHandlers.handleCreateActivity(state, action.payload)
        case Actions.createActivityActions.CREATE_ACTIVITY_SUCCESS:
            return ActionHandlers.createActivityActionHandlers.handleCreateActivitySuccess(state, action.payload)
        case Actions.createActivityActions.CREATE_ACTIVITY_FAILURE:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchActivityListFailure(state, action.payload)


        case Actions.createActivityActions.CREATE_SURVEY_FROM_ACTIVITY:
            return ActionHandlers.createActivityActionHandlers.handleCreateSurveyFromActivity(state, action.payload)
        case Actions.createActivityActions.CREATE_SURVEY_FROM_ACTIVITY_SUCCESS:
            return ActionHandlers.createActivityActionHandlers.handleCreateSurveyFromActivitySuccess(state, action.payload)
        case Actions.createActivityActions.CREATE_SURVEY_FROM_ACTIVITY_FAILURE:
            return ActionHandlers.createActivityActionHandlers.handleFetchSurveyFromActivityListFailure(state, action.payload)



        /* create update activity actions */
        case Actions.updateActivityActions.UPDATE_ACTIVITY:
            return ActionHandlers.updateActivityActionHandlers.handleUpdateActivity(state, action.payload)
        case Actions.updateActivityActions.UPDATE_ACTIVITY_SUCCESS:
            return ActionHandlers.updateActivityActionHandlers.handleUpdateActivitySuccess(state, action.payload)
        case Actions.updateActivityActions.UPDATE_ACTIVITY_FAILURE:
            return ActionHandlers.updateActivityActionHandlers.handleUpdateActivityFailure(state, action.payload)

        /* create update activity actions */
        case Actions.deleteActivityActions.DELETE_ACTIVITY:
            return ActionHandlers.deleteActivityActionHandlers.handleDeleteActivity(state, action.payload)
        case Actions.deleteActivityActions.DELETE_ACTIVITY_SUCCESS:
            return ActionHandlers.deleteActivityActionHandlers.handleDeleteActivitySuccess(state, action.payload)
        case Actions.deleteActivityActions.DELETE_ACTIVITY_FAILURE:
            return ActionHandlers.deleteActivityActionHandlers.handleDeleteActivityFailure(state, action.payload)


        /* fetching surveys actions */
        case Actions.fetchSurveyListActions.FETCH_SURVEY_LIST:
            return ActionHandlers.fetchSurveyListActionHandlers.handleFetchingSurveyList(state, action.payload)
        case Actions.fetchSurveyListActions.FETCH_SURVEY_LIST_SUCCESS:
            return ActionHandlers.fetchSurveyListActionHandlers.handleFetchSurveyListSuccess(state, action.payload)
        case Actions.fetchSurveyListActions.FETCH_SURVEY_LIST_FAILURE:
            return ActionHandlers.fetchSurveyListActionHandlers.handleFetchSurveyListFailure(state, action.payload)

        /* create survey actions */
        case Actions.createSurveyActions.CREATE_SURVEY:
            return ActionHandlers.createSurveyActionHandlers.handleCreateSurvey(state, action.payload)
        case Actions.createSurveyActions.CREATE_SURVEY_SUCCESS:
            return ActionHandlers.createSurveyActionHandlers.handleCreateSurveySuccess(state, action.payload)
        case Actions.createSurveyActions.CREATE_SURVEY_FAILURE:
            return ActionHandlers.fetchSurveyListActionHandlers.handleFetchSurveyListFailure(state, action.payload)

        /* create update survey actions */
        case Actions.updateSurveyActions.UPDATE_SURVEY:
            return ActionHandlers.updateSurveyActionHandlers.handleUpdateSurvey(state, action.payload)
        case Actions.updateSurveyActions.UPDATE_SURVEY_SUCCESS:
            return ActionHandlers.updateSurveyActionHandlers.handleUpdateSurveySuccess(state, action.payload)
        case Actions.updateSurveyActions.UPDATE_SURVEY_FAILURE:
            return ActionHandlers.updateSurveyActionHandlers.handleUpdateSurveyFailure(state, action.payload)

        /* create delete survey actions */
        case Actions.deleteSurveyActions.DELETE_SURVEY:
            return ActionHandlers.deleteSurveyActionHandlers.handleDeleteSurvey(state, action.payload)
        case Actions.deleteSurveyActions.DELETE_SURVEY_SUCCESS:
            return ActionHandlers.deleteSurveyActionHandlers.handleDeleteSurveySuccess(state, action.payload)
        case Actions.deleteSurveyActions.DELETE_SURVEY_FAILURE:
            return ActionHandlers.deleteSurveyActionHandlers.handleDeleteSurveyFailure(state, action.payload)

        /* update user profile*/

        case Actions.updateUserProfileActions.UPDATE_USER_PROFILE:
            return ActionHandlers.updateUserProfileActionHandlers.handleUpdateUserProfile(state, action.payload)
        case Actions.updateUserProfileActions.UPDATE_USER_PROFILE_SUCCESS:
            return ActionHandlers.updateUserProfileActionHandlers.handleUpdateUserProfileSuccess(state, action.payload)
        case Actions.updateUserProfileActions.UPDATE_USER_PROFILE_FAILURE:
            return ActionHandlers.updateUserProfileActionHandlers.handleUpdateUserProfileFailure(state, action.payload)


        /* survey holder profile*/
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_GET_SURVEY:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderGetSurvey(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_SET_ID:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderSetId(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_SET_TITLE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderSetTitle(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_CREATE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionCreate(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_DELETE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionDelete(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_TYPE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetType(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_TITLE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetTitle(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_TOOLTIP:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetTooltip(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_FILTER:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetFilter(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionToggleFilter(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER_MODE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionToggleFilterMode(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MAXIMUM:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetAnswersMaximum(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MINIMUM:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetAnswersMinimum(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MAXIMUM:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionToggleAnswersMaximum(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MINIMUM:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionToggleAnswersMinimum(state, action.payload);

        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_INDEX:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionIndex(state, action.payload);


        /* survey view */
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_OPEN_CREATE_MODAL:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewOpenCreateModal(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_IS_CREATING:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewIsCreating(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_FAILED_TO_CREATE:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewFailedToCreate(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_CREATE_ERROR:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewCreateError(state, action.payload);

        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_OPEN_EDIT_MODAL:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewOpenEditModal(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_IS_EDITING:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewIsEditing(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_FAILED_TO_EDIT:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewFailedToEdit(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_EDIT_ERROR:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewEditError(state, action.payload);

        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_OPEN_DELETE_MODAL:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewOpenDeleteModal(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_IS_DELETING:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewIsDeleting(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_FAILED_TO_DELETE:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewFailedToDelete(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_DELETE_ERROR:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewDeleteError(state, action.payload);


        /* activity holder profile*/
        case Actions.updateActivityHolderActions.UPDATE_ACTIVITY_HOLDER_GET_ACTIVITY:
            return ActionHandlers.updateActivityHolderActionHandlers.handleUpdateActivityHolderGetActivity(state, action.payload);
        case Actions.updateActivityHolderActions.UPDATE_ACTIVITY_HOLDER_SET_ID:
            return ActionHandlers.updateActivityHolderActionHandlers.handleUpdateActivityHolderSetId(state, action.payload);
        case Actions.updateActivityHolderActions.UPDATE_ACTIVITY_HOLDER_SET_TITLE:
            return ActionHandlers.updateActivityHolderActionHandlers.handleUpdateActivityHolderSetTitle(state, action.payload);
        case Actions.updateActivityHolderActions.UPDATE_ACTIVITY_HOLDER_SET_TOTAL_CAPACITY:
            return ActionHandlers.updateActivityHolderActionHandlers.handleUpdateActivityHolderSetTotalCapacity(state, action.payload);
        case Actions.updateActivityHolderActions.UPDATE_ACTIVITY_HOLDER_SET_GROUP_CAPACITY:
            return ActionHandlers.updateActivityHolderActionHandlers.handleUpdateActivityHolderSetGroupCapacity(state, action.payload);
        case Actions.updateActivityHolderActions.UPDATE_ACTIVITY_HOLDER_SET_CURRENT_CAPACITY:
            return ActionHandlers.updateActivityHolderActionHandlers.handleUpdateActivityHolderSetCurrentCapacity(state, action.payload);
        case Actions.updateActivityHolderActions.UPDATE_ACTIVITY_HOLDER_SET_END_DATE:
            return ActionHandlers.updateActivityHolderActionHandlers.handleUpdateActivityHolderSetEndDate(state, action.payload);


        /* activity view */
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_SELECTING_SURVEY:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewSelectingSurvey(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_CREATING_SURVEY:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewCreatingSurvey(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_OPEN_CREATE_MODAL:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewOpenCreateModal(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_IS_CREATING:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewIsCreating(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_FAILED_TO_CREATE:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewFailedToCreate(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_CREATE_ERROR:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewCreateError(state, action.payload);

        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_OPEN_EDIT_MODAL:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewOpenEditModal(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_IS_EDITING:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewIsEditing(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_FAILED_TO_EDIT:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewFailedToEdit(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_EDIT_ERROR:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewEditError(state, action.payload);

        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_OPEN_DELETE_MODAL:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewOpenDeleteModal(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_IS_DELETING:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewIsDeleting(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_FAILED_TO_DELETE:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewFailedToDelete(state, action.payload);
        case Actions.updateActivityViewActions.UPDATE_ACTIVITY_VIEW_DELETE_ERROR:
            return ActionHandlers.updateActivityViewActionHandlers.handleUpdateActivityViewDeleteError(state, action.payload);

        default:
            return state

    }
}

export default dashboardReducer
