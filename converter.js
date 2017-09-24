function poundstokilograms(pounds){
    return pounds * 2.2;
}
function convert() {
    document.getElementById("kilograms").value = poundstokilograms(document.getElementById("pounds").value);
}
