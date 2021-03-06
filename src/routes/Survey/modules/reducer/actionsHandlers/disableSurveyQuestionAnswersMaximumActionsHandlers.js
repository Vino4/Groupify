import {Map, List, Set} from 'immutable';

let disableSurveyQuestionAnswersMaximum= (state, payload) => {

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )),
                    "answersEnableMaximum"
                ],

                (option) => {return false}
        )
    );

    return newState;
}

export {
   disableSurveyQuestionAnswersMaximum,
}
