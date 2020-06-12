class appBar extends HTMLElement {
     constructor(){
          super();
     }

     connectedCallback() {
          this.render();
     }     

     render(){
          this.innerHTML = `
               <div class="header-mob">
                    <h3>Covid Data</h3>
               </div>

               <ul>
                    <li><a href="/">Beranda</a></li>
                    <li><a href="tentang.html">Tentang</a></li>
                    <li><a href="#exampleModal" data-toggle="modal" data-target="#exampleModal">Kontak</a></li>
               </ul>

               <!-- Navigation mobile -->
               <div class="menu-toggle">
                    <input type="checkbox">
                    <span></span>
                    <span></span>
                    <span></span>
               </div>
          `;
     }

}
 
customElements.define("app-bar", appBar);
