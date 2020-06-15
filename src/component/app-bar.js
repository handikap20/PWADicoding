class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render(){
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");
        if(idParam){
            this.innerHTML = `
            <nav class="light-blue darken-4" role="navigation">
                <div class="nav-wrapper container">
                    <a href="./index.html#team" class="brand-logo" id="logo-container">Info Football</a>
                    <a href="./index.html#team" class="sidenav-trigger" data-target="nav-mobile">
                        <i class="material-icons">arrow_back</i>
                    </a>
                </div>
            </nav>
            `;
        }else {
            this.innerHTML = `
            <nav class="light-blue darken-4" role="navigation">
                <div class="nav-wrapper container">
                  <a href="./index.html" class="brand-logo" id="logo-container">Info Football</a>
                  <a href="#" class="sidenav-trigger" data-target="nav-mobile">☰</a>
                  <ul class="topnav right hide-on-med-and-down"></ul>
                  <ul class="sidenav" id="nav-mobile"></ul>
                </div>
            </nav>
                `;
        }
    }
}
customElements.define("app-bar",AppBar);