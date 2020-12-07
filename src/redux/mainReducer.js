import * as api from '../api/api';

const ADD_NEWS = 'ADD_NEWS';
const NEWS_ITEM_SIZE = 150;

const initialState = {
  news: {},
  listSize: Math.ceil(window.innerHeight / NEWS_ITEM_SIZE),
  newsItemSize: NEWS_ITEM_SIZE
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      const maxIndex = Math.max(...Object.keys(action.payload).map(item => ++item));

      return {
        ...state,
        news: {...state.news, ...action.payload},
        listSize: maxIndex > state.listSize ? maxIndex : state.listSize
      };

    default:
      return state;
  }
}

export const addNews = news =>
  ({type: ADD_NEWS, payload: news})

export const getNews = (startIndex) => {
  return dispatch => {
    api.getNews(1).then(({data}) => {
      const news = data.articles.reduce((acc, item, index) => {
        acc[startIndex + index] = item;
        return acc;
      }, {});

      dispatch(addNews(news));
    });
  }
}

export default mainReducer;