const rdata = JSON.parse(data.replace(/&quot;/g, '"'));
const input = document.getElementById('search_here');
let filteredArr = [];
input.addEventListener('keyup', (e) => {
    box.innerHTML = "";
    filteredArr = rdata.filter(info => info['name'].includes(e.target.value));
    if (filteredArr.length > 0) {
        filteredArr.map(info => {
            box.innerHTML += `<b>${info['name']}</b> <br>`
        })
    }
    else {
        box.innerHTML = "<b style='color: red;'>No results found</b>"
    }
})