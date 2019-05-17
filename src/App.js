import React, {useState} from 'react';
import {allFilmsRequest, allPeopleRequest} from "./queries/requests";

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    const fetchMovies = async() => {
        const {allFilms} = await allFilmsRequest();
        setFilms(allFilms.films);
    };

    const fetchPeople = async() => {
        const {allPeople} = await allPeopleRequest();
        setPeople(allPeople.people);
    };

    return (
        <div>
            Hello world

            <div>
                <button onClick={fetchMovies}>
                    Fetch movies
                </button>

                <ul>
                    {films.map(film => <li key={film.id}>{film.title}</li>)}
                </ul>
            </div>

            <div>
                <button onClick={fetchPeople}>
                    Fetch people
                </button>

                <ul>
                    {people.map((person, index) => <li key={index}>{person.name}</li>)}
                </ul>
            </div>

        </div>
    )
};

export default App;
