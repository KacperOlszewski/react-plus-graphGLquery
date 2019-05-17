export const allFilmsQuery = `
query { 
    allFilms { 
      films { 
        id
        title 
      } 
    } 
}
`;

export const allPeopleQuery = `
query {
    allPeople{
      people{
        name
      }
    }
}
`;
