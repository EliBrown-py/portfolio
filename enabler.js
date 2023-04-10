var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
const myModal = new bootstrap.Modal('#promotion-modal');
window.addEventListener('DOMContentLoaded',() =>{
    myModal.show();
})