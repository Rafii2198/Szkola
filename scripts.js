const queryString = window.location.search;
const ipage = document.getElementById("page");
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('page')){
    const page = urlParams.get('page');
    ipage.src = page;

}