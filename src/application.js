import {addCommas,sectionLoader} from './scriptAnimate.js';

const getApi = async (api) => {
     try {
          const response = await fetch(api);
          const responseJson = await response.json()

          return responseJson;
     } catch (err) {
          console.log(err)
     }
}

const getDataAll = () => {
     getApi('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi/')
     .then(value => {                    
          let indexImg = 8;
          const sectionBox = document.querySelector('.sec4');
          const section = document.querySelector('.sec5');

          section.style.display = 'none';

          value.forEach((data, indexData) => {
               if(indexData >= 8) {
                    valueData(data,++indexImg,sectionBox)
                    randomBackround(indexData);
               }
          })
     })
}

const getDataHeader = (data) => {
     getApi('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/')
     .then(response => {
          const type = document.querySelectorAll('.sec2 .box h5');

          type[0].innerHTML = addCommas(response[0].positif).toLocaleString();
          type[1].innerHTML = addCommas(response[0].sembuh).toLocaleString();
          type[2].innerHTML = addCommas(response[0].meninggal).toLocaleString();
          type[3].innerHTML = addCommas(response[0].dirawat).toLocaleString();
     })
}

const getDataSix = (data) => {
     getApi('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi/')
     .then(res => {
          let indexImg = 1;
          const sectionBox = document.querySelector('.sec4');
          const btn = document.querySelector('.sec5 button');

          btn.style.display = 'block';
          console.log(res);

          res.forEach((response,index) => {
               if(index <= 7) {
                    valueData(response,indexImg++,sectionBox);
                    randomBackround(index);
               }
          })
     })
     .finally(() => {
          sectionLoader.style.display = 'none';
     })
}

const valueData = (data,indexImg,sectionBox) => {
     const box = document.createElement("div");
     const monthNames = ["January", "February", "March", "April", "May", "June",
                                             "July", "August", "September", "October", "November", "December"];

     const date = new Date();
     let hari = date.getDay() , bulan = date.getMonth(), tahun = date.getFullYear();
     box.classList.add('boxInfo');

     if (data.attributes.provinsi != 'Indonesia') {
          box.innerHTML += `
          <div class="boxInfoHeader">
               <img src="./Img/Logo/${data.attributes.Provinsi.toLowerCase()}.png" alt="${indexImg}.png">
          </div>
          <div class="boxInfoBody">
               <section>
                    <h3>${data.attributes.Provinsi}</h3>
                    <span>Update ${hari} ${monthNames[bulan]} ${tahun}</span>
  
                    <div class="info">
                         <div class="type">
                              <h6>Sembuh</h6>
                              <p>${addCommas(data.attributes.Kasus_Semb).toLocaleString()}</p>
                         </div>
                         <div class="type">
                              <h6>Positif</h6>
                              <p>${addCommas(data.attributes.Kasus_Posi).toLocaleString()}</p>
                         </div>
                         <div class="type lastType">
                              <h6>Meninggal</h6>
                              <p>${addCommas(data.attributes.Kasus_Meni).toLocaleString()}</p>
                         </div>
                    </section>
               </div>
          </div>`;
     } else return

     sectionBox.appendChild(box);
}

const randomBackround = (indx) => {
     let element = document.querySelectorAll('.sec4 .boxInfo .boxInfoHeader');
     let r = Math.floor(Math.random() * 255);
     let g = Math.floor(Math.random() * 255);
     let b = Math.floor(Math.random() * 255);
     
     element[indx].style. background = `linear-gradient(-200deg,#4FD2D8, rgb(${r},${g},${b}))`;
}

getDataSix();
getDataHeader();

export {getDataSix,getDataAll}

// https://cors-anywhere.herokuapp.com/