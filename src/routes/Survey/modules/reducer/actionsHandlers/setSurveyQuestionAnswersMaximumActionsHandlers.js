import {Map, List, Set} from 'immutable';

let setSurveyQuestionAnswersMaximum= (state, payload) => {

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )),
                    "answersMaximum"
                ],

                (option) => {return payload.option}
        )
    );

    return newState;
}

export {
   setSurveyQuestionAnswersMaximum,
}
