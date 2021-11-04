import axios from 'axios';

const ACESS_TOKEN = 4587494801293757;
const URL_HEROS = `https://superheroapi.com/api/${ACESS_TOKEN}`;
const corsProxyUrl = "https://thingproxy.freeboard.io/fetch/";

const api = axios.create({
  baseURL: corsProxyUrl + URL_HEROS
})


export default api;