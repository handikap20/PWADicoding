class Btn extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large blue" id="save">
                <i class="large material-icons">save</i>
            </a>
            <a class="btn-floating btn-large red" id="delete">
                <i class="large material-icons">delete_forever</i>
            </a>
	    </div>`;
    }
}
customElements.define("btn-detail",Btn);