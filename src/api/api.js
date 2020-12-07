import axios from 'axios';

const API_KEY = 'a072a71ffdf745449e81cc972606db86';
const PAGE_SIZE = 20;

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/'
});

export const getNews = page => {
  return api.get(`top-headlines?country=ru&apiKey=${API_KEY}&page=${page}&pageSize=${PAGE_SIZE}`);
}