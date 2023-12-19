let select = document.querySelector("select");
let wrap = document.querySelector(".wrap")


let data = []
for (let i=0;i<temp.length;i++){
    if (data[temp[i].properties.cunli]){
        data[temp[i].properties.cunli].push(temp[i]);
    }else{
        data[temp[i].properties.cunli] = Array(temp[i]);
    }
};

select.innerHTML = ""
for (let key in data){
    select.innerHTML+=`<option value="${key}">${key}</option>`
}

//console.log(data)

select.onchange = function(e){
    wrap.innerHTML = ''
    let cunli = select[select.selectedIndex].value;
    //let cunli = e.target.value;
    for (let i=0;i<data[cunli].length;i++){
        wrap.innerHTML += `
        <div class="name">${data[cunli][i].properties.name}</div>
        <div class="address">${data[cunli][i].properties.address}</div>
        <div class="amask">${data[cunli][i].properties.mask_adult}</div>
        <div class="cmask">${data[cunli][i].properties.mask_child}</div>
        <div class="m" id="m${i}"></div>
        <div class="v" id="v${i}"></div>
        `
        let crds = data[cunli][i].geometry.coordinates
        //console.log(crds)
        initMap(i,crds)
        view(i,crds)
    }
}


