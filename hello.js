let inp = document.querySelector("#input");
let btn = document.querySelector("#search");
//search baar 
btn.addEventListener("click", () => {
    let find = inp.value;
    async function getapi() {
        try {
            let url = "https://v1.nocodeapi.com/aditya2171/spotify/zglgpomrdyAgjexQ/search?q="
            let type = "&type=track";

            let res = await axios.get(url + find + type);
            let str = ``;
            let result = res.data.tracks.items

            result.map((items) => {

                let card = `
                <div class = "hello"
              <div class="col  ">
        <div class="card h-100 blur ">
         <img src=${items.album.images[0].url} class="card-img-top" alt=""   height="210px">
            <div class="card-body text-primary ">
             <h5 class="card-title">song :${items.album.name}</h5>
             <h5 class="card-title"> artists : ${items.artists[0].name}</h5>
             <h5 class="card-title"> release_date : ${items.album.release_date}</h5>
             <audio = src = ${items.preview_url} controls class= "w-100"></audio>
            </div>
       </div>  
       </div>  
    </div>
     `;
                str = str + card;
                document.querySelector("#d1").innerHTML = str;
            });
        }
        catch (e) {
            alert("something want wrong when api fetched")
        }
    }
     getapi();
})
async function getapi() {
    try {
        let url = "https://v1.nocodeapi.com/aditya2171/spotify/zglgpomrdyAgjexQ/search?q=hiphop"
        let type = "&type=track";

        let res = await axios.get(url + type);
        let str = ``;
        let result = res.data.tracks.items

        result.map((items) => {

            let card = `
            <div class = "hello"
          <div class="col  ">
    <div class="card h-100 blur ">
     <img src=${items.album.images[0].url} class="card-img-top" alt=""   height="210px">
        <div class="card-body text-primary ">
         <h5 class="card-title">song :${items.album.name}</h5>
         <h5 class="card-title"> artists : ${items.artists[0].name}</h5>
         <h5 class="card-title"> release_date : ${items.album.release_date}</h5>
         <audio = src = ${items.preview_url} controls class= "w-100"></audio>
        </div>
   </div>  
   </div>  
</div>
 `;
            str = str + card;
            document.querySelector("#d1").innerHTML = str;
        });
    }
    catch (e) {
        alert("something want wrong when api fetched")
    }
}
getapi();

