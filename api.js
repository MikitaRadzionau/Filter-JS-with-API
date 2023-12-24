//https://fakestoreapi.com/products

let grid = document.querySelector(".cars");
let filterInput = document.getElementById('filterInput');

fetch('./database/cars.json')
.then(res=> res.json())
.then(json => {
    for(let value of json){
        addElement(grid,value)
    }
})

// add event list (input)
filterInput.addEventListener('keyup',filterCars);

// callback function    
function filterCars(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item');

    for(i=0;i<item.length;i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }
    }
}


// get the value from the api
function addElement(appendIn,value){
    let div = document.createElement('div');
    div.className = 'item justify-self-center';

    let {color,fuelType,horsepower,image,make,model,transmission,year,price} = value

    div.innerHTML = `
    <img src="${image}" class="bg-cover img" alt="Nah">
            <div class="text-center py-3">
                <h1 class="text-lg title">name: ${make} ${model}</h1>
                <a href="#" class="block"><span>Type: ${fuelType}</span></a>
                <span class="block py-3 text-sm text-red-400">Штраф $ <span class="text-md">${price}</span></span>
                <p>horsepower: ${horsepower}</p>
                <p>transmission: ${transmission}</p>
                <p>year:${year}</p>
                <p>color:${color}</p>
                <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Show more</button>
            </div>
    `
    appendIn.appendChild(div);
}