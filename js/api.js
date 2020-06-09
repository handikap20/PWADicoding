const keyAPI = "69fcf08333764a3aa9053d4b3dc830f7";
const id_liga = "2001"
const base_url = "https://api.football-data.org/v2/";
const standings = `${base_url}competitions/${id_liga}/standings?standingType=TOTAL`;
const listteam = `${base_url}competitions/${id_liga}/teams?stage=GROUP_STAGE`;
const infoteam = `${base_url}teams/`;

const status = (response) => {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

const fetcAPI = (url) => {
  return fetch(url, {
    headers : {
      "X-Auth-Token": keyAPI
    } 
  })
}

const json = (response) => {
  return response.json();
}

const error = (error) => {
  console.log("Error : " + error);
  M.toast({html: 'Tidak ada koneksi!'});
}

const getClasement = () => {
  return fetcAPI(standings)
    .then(status)
    .then(json)
    .catch(error);
}

const getTeamList = () => {
    return fetcAPI(listteam)
    .then(status)
    .then(json)
    .catch(error);
}

const getTeamById = (idParam) => {
     return fetcAPI(infoteam+idParam)
     .then(status)
     .then(json)
     .catch(error);
}