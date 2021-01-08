let allImages = document.querySelector('.img-area');
let load = document.querySelector('#Load-button');
load.addEventListener('click',(e)=>{
    e.preventDefault();
     fetch('https://pixabay.com/api/?key=19804655-6018dcc646a95e3cfff9f3b0f&q=beauty+salon&image_type=photo').then((res) =>{
              return res.json();
        }).then((response)=>{
            let output='';
            response.hits.forEach(oneImage => {
                output+=`
                <div class="single-img"><img src="${oneImage.largeImageURL}" alt="No Image found"></div>
                `;
            })
            allImages.innerHTML = output;
        })
})

