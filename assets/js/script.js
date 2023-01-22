let btnGam = document.querySelector('.gamburger')
let btnGam2 = document.querySelector('.gamburger2')
let openedo = document.querySelector('.modal');
let openedo2 = document.querySelector('.login');
let clos = document.querySelector('.close')
let clos2 = document.querySelector('.clos2')
let list = document.querySelector('.navig');
let login = document.querySelector('.log');

login.addEventListener('click', function(){
  openedo2.showModal();
  clos2.addEventListener('click', function() {
    openedo2.close();
  })
});

btnGam.addEventListener('click', function() {
  openedo.showModal();
  let arr = list.children;
  for (const iterator of arr) {
    iterator.addEventListener('click', function () {
      openedo.close();
    })
  }
  clos.addEventListener('click', function() {
    openedo.close();
  })
});

btnGam2.addEventListener('click', function() {
  openedo.showModal();
  let arr = list.children;
  for (const iterator of arr) {
    iterator.addEventListener('click', function () {
      openedo.close();
    })
  }
  clos.addEventListener('click', function() {
    openedo.close();
  })
});