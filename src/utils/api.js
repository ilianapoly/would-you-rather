import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA"

export function getInitialData(){
    return Promise.all(
        [
            _getUsers(),
            _getQuestions()
        ]
    ).then(([users, questions]) => ( {
        users, questions
    }))
}

export function saveQuestion(info){
    return Promise.all(
        [
            _saveQuestion(info)
        ]
    ).then(([question]) => ( {
        question
    }))
}

export function saveQuestionAnswer(info){
    return Promise.all(
      [
        _saveQuestionAnswer(info)
      ]
    ).then(([authedUser, qid, answer]) => ( {
        authedUser,
        qid,
        answer
    }))
}