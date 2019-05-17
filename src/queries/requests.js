import { request } from 'graphql-request'
import { allFilmsQuery, allPeopleQuery } from './queries'

const url = 'https://swapi.apis.guru/';

export const allFilmsRequest = () => request(url, allFilmsQuery);
export const allPeopleRequest = () => request(url, allPeopleQuery);
