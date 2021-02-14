var doc=document,
    wiw=window;
// Хорошо в случае если озображени одно
// function load (img) {
//   var img = $(img);
//   setTimeout(()=>{img.removeClass("beforeLoad");},1000)
// }
var xhr= new XMLHttpRequest();

var images=doc.getElementsByTagName("img");
var image=Array.from(images);


// image.forEach(() => {
// if ($(images).ready()) {
//   loadedImage();
// }
// });
var i=0;
async function load() {
  if(image.length!=0) {
    let promise = new Promise((resolve,reject)=>{resolve("result")})
      for (;i<$(image).length;i++) {
        let link=$(image[i]).attr("src")

          let result =  await fetch(`https://lazycote.github.io/src/s2dLogo.jpg`)
            if (result.status) {
            $(image[i]).removeClass("beforeLoad")

          } else {
            alert("error")
          }


      }




  } else {
    return false;
  }
}
load();
function loadedImage () {
  for (var i = 0; i < image.length; i++) {
    var delay=1000;
    delay=delay*i;
    let imageI=$(images[i])
    setTimeout(()=>{
      imageI.removeClass("beforeLoad")
    },1000)
  }
}




function checkLoad(url) {
  xhr.onprogress=(url)=>{
    console.log("Скачано "+event.loaded+"из "+event.total);
    if (event.loadend!=event.total) {
      console.log("Скачано "+event.loaded+"из "+event.total)
    } else {
      console.log("Загрузка завершена")
    }
  }
  xhr.addEventListener("error",()=>{
    alert("Ошибка")
  })
}
