import axios from 'axios'

// Action Type
const GET_USER_WORDS = 'GET_USER_WORDS'

// Action Creators
const getUserWords = words => ({ type: GET_USER_WORDS, words })

// Thunks
export const loadUserWords = userId => async dispatch => {
  try {
    const res = await axios.get(`https://notseek.herokuapp.com/api/users/${userId}/words`)
    const words = res.data
    console.log('words froms store', words)
    dispatch(getUserWords(words))
  } catch (error) {
    console.error(error)
  }
}

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_WORDS:
      return action.words
    default:
      return state
  }
}

export default reducer