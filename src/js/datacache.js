import { standings, listTeam, infoTeam } from "./api.js";
import { hideLoaderCircle, hideLoaderLine } from "./dataapi.js";
const loadCacheClassement = () => {
    if ('caches' in window) {
        caches.match(standings).then(response => {
          console.log(response);
          if (response) {
            response.json().then(data => {
                let view = "";
                data.standings.forEach(standT => {
                    let detail = "";
                    standT.table.forEach(result => {
                      detail += `
                    <tr>
                      <td>${result.position}</td>
                      <td><img class="responsive-img" width="24" height="24" src="${result.team.crestUrl}" onerror="this.onerror=null;this.src='../../src/image/club.svg'">${result.team.name}</td>
                      <td>${result.won}</td>
                      <td>${result.draw}</td>
                      <td>${result.lost}</td>
                      <td>${result.goalsFor}</td>
                      <td>${result.goalsAgainst}</td>
                      <td>${result.goalDifference}</td>
                      <td>${result.points}</td>
                      <td>${result.playedGames}</td>
                    </tr>
                      `;
                    })
                    view += `
                    <div class="col s12">
                    <div class="card-panel">
                    <span class="blue-text text-darken-2">${standT.group}</span> 
                      <table class="responsive-table striped">
                        <thead>
                          <tr>
                              <th>Posisi</th>
                              <th>Club</th>
                              <th>W</th>
                              <th>D</th>
                              <th>L</th>
                              <th>GF</th>
                              <th>GA</th>
                              <th>GD</th>
                              <th>Points</th>
                              <th>Games</th>
                          </tr>
                        </thead>
                        <tbody>
                          `+detail+`
                        </tbody>
                      </table>
                    </div>
                  </div>`;
                });
            
                document.getElementById("detail").innerHTML = view;
                hideLoaderLine();           
            });
          }
        });
    }
}
const loadCacheListTeam = () => {
  console.log(listTeam);
    if ('caches' in window) {
        caches.match(listTeam).then(response => {
          if (response) {
            response.json().then(data => {
            console.log("work");
              let html = "";
                data.teams.forEach(team => {  
                    const url = team.crestUrl.replace(/^http:\/\//i, 'https://'); 
                    html += `
                    <div class="col s12 m4">
                    <a href="./detailclub.html?id=${team.id}">
                      <div class="card">
                          <img src="${url}" width="150" height="100" onerror="this.onerror=null;this.src='../../src/image/club.svg'" style="padding : 10px">
                        <div class="card-content">
                         <p>${team.name}</p>
                        </div>
                     </div>
                     </a>
                    </div>
                    `;
                  })
                   document.getElementById("team").innerHTML = html;
                   hideLoaderCircle();    
            });
          }
          else {
            console.log("gagal");
          }
        });
    }  
}

const loadCacheTeamById = (idParam,resolve) => {
  console.log("pewored by chache");
    console.log(idParam);
    if ('caches' in window) {
      caches.match(infoTeam+idParam).then(response => {
          if (response) {
              response.json().then(data => {
                console.log(data);
                  let activeC = "";
                  data.activeCompetitions.forEach(active => {
                    activeC += `
                      <tr>
                          <td>${active.name}</td>
                          <td>${active.area.name}</td>
                      </tr>
                    `;
                  });
                  let squadHTML = "";
                  data.squad.forEach(squads => {
                    squadHTML += `
                    <div class="col s12 m4">
                      <div class="card" style="height:150px;">
                        <div class="card-content">
                        <p><b>No : </b>${squads.shirtNumber || "-"}</p>
                        <p><b>Nama : </b>${squads.name}</p>
                        <p><b>Posisi : </b>${squads.position}</p>
                        <p><b>Kebangsaan : </b>${squads.nationality}</p>
                        </div>
                      </div>
                    </div>
                    `;
                  });
                  const teamHTML = `
                  <div class="row">
                  <div class="col s12 m12">
                    <div class="card">
                      <div class="card-image">
                        <img src="${data.crestUrl}" height="300" onerror="this.onerror=null;this.src='../../src/image/club.svg'">
                      </div>
                      <div class="card-content">
                      <span class="card-title">${data.name}</span>
                       <p>Sebutan :  <span class="blue-text text-darken-2">${data.shortName}</span></p>
                       <p>Negara asal club :  <span class="blue-text text-darken-2">${data.area.name}</span></p>
                       <p>Stadium : <span class="blue-text text-darken-2">${data.venue}</span></p>
                       <p>Berdiri : <span class="blue-text text-darken-2">${data.founded}</span></p>
                       <p>Email : <span class="blue-text text-darken-2">${data.email}</span></p>
                       <p>Alamat : <span class="blue-text text-darken-2">${data.address}</span></p>
                       <p>Website : <span class="blue-text text-darken-2">${data.website}</span></p>
                       <p>Kompetisi yang diikuti :  </p>
                          <table class="responsive-table striped">
                          <thead>
                            <tr>
                                <th>Nama Kompetisi</th>
                                <th>Negara domestik</th>
                            </tr>
                          </thead>
                          <tbody>`+activeC+`</tbody>
                          </table>
                          <h5>List Pemain :</h5>
                      </div>
                      <div class="row" style="padding : 10px">
                        `+squadHTML+`
                      </div>
                    </div>
                  </div>
                </div>
                  `;
                  document.getElementById("body-content").innerHTML = teamHTML;
                    resolve(data);
                    hideLoaderLine();
              });
          }
      });
  }
}
export { loadCacheClassement, loadCacheTeamById, loadCacheListTeam };