document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get("id");
    const isiFromSaved = urlParams.get("saved");
    const btnSaved = document.getElementById("save");
    const btnDelete = document.getElementById("delete");
    let item;
    btnDelete.style.display = "none"
    console.log(idParam);
    if (isiFromSaved) {
        btnSaved.style.display = "none";
        btnDelete.style.display = "block";
        getSavedTeamById();
    } else {
        item = loadTeamById();
    }		
    btnSaved.onclick = () => {
        console.log("Tombol di kilk !");
        const get = getById(idParam);
        if(get) {
            get.then(favorite => {
                if(favorite) {
                    if(favorite.id === parseInt(idParam)){
                        M.toast({html: 'Data sudah tersimpan di favorite team!'});
                    }
                }else {
                    item.then(favorite => {
                    savedTeamFav(favorite);
                    });
                }
            });
        }
    }
    btnDelete.onclick = () => {
        console.log("Tombol di kilk !");
        deleteTeamListener(idParam);
    }
   });