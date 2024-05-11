let kutu = document.getElementById('box')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(yazilar => {
        for (liste of yazilar) {
            kutu.innerHTML += `
                            <div class="col-md-4 mt-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">${liste.title.substring(0,18)}</h4>
                                        <p>${liste.body.substring(0,148)}</p>
                                    </div>
                                </div>
                            </div>
                            `
        }
    })


fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(imaj => {
        // for(fotos of imaj){
        //     document.write(`<img src="${fotos.thumbnailUrl}">`)
        // }

        for(let i=0; i<100;i++){
            document.write(`<img src="${imaj[i].thumbnailUrl}" style="margin:5px;">`)
        }
    })