fetch('https://rickandmortyapi.com/api/character' ,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(function(json){

            var container = document.querySelector('.container')
            json.results.map(function(results){
                container.innerHTML+=`
                <div> <img src=` + results.image + `> </div>
                <strong>` + results.name + `</strong>   
                <hr>
              `; 
            })

        })
        
    
    