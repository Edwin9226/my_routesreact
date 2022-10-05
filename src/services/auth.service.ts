const baseUrl= 'https://rickandmortyapi.com/api/';
const charatcerUrl= baseUrl+"/character";

export const getMorthy= () => {
return fetch(charatcerUrl + '2').then(res=>res.json());
};

