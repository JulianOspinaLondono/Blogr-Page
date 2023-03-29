const ProductP = document.querySelector('.ProductP');
const ProductActive = document.querySelector('.ProductActive');
const CompanyP = document.querySelector('.CompanyP');
const CompanyActive = document.querySelector('.CompanyActive');
const ConnectP = document.querySelector('.ConnectP');
const ConnectActive = document.querySelector('.ConnectActive');

ProductP.addEventListener('click', toggleProductActive);
CompanyP.addEventListener('click', toggleCompanyActive);
ConnectP.addEventListener('click', toggleConnectActive);

function toggleProductActive() {
    ProductActive.classList.toggle('inactive');
    CompanyActive.classList.add('inactive');
    ConnectActive.classList.add('inactive');
}
function toggleCompanyActive() {
    CompanyActive.classList.toggle('inactive');
    ProductActive.classList.add('inactive');
    ConnectActive.classList.add('inactive');
}
function toggleConnectActive() {
    ConnectActive.classList.toggle('inactive');
    ProductActive.classList.add('inactive');
    CompanyActive.classList.add('inactive');
}