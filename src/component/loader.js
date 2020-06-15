class Loader extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
    <div class="row center-align" id="loader">
		<div class="progress">
			<div class="indeterminate"></div>
		</div>
	</div>       
        `;
    }
}
customElements.define("loader-el",Loader); 