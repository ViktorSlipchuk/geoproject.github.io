const openMenu = document.getElementById('open-menu');
const selectProd = document.getElementById('select-production');

function active(){
    selectProd.classList.add("select-production--active");
    selectProd.innerHTML = `
        <a href="healthyFood.html">Їжа</a>
        <a href="cosmetic.html">Косметика</a>
        <a href="medicine.html">Ліки</a>  
        <a href="dishes.html">Посуд</a>
        <a href="accessories.html">Аксесуари</a>
    `;
    openMenu.onclick = desActive;
}
desActive();
function desActive(){
    selectProd.classList.remove("select-production--active");
    selectProd.innerHTML = "";
    openMenu.onclick = active;
}