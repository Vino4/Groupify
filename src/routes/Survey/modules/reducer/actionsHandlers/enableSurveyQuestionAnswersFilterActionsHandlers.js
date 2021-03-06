import {Map, List, Set} from 'immutable';

let enableSurveyQuestionAnswersFilter= (state, payload) => {

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )),
                    "answersEnableFilter"
                ],

                (option) => {return true}
        )
    );

    return newState;
}

export {
   enableSurveyQuestionAnswersFilter,
}
