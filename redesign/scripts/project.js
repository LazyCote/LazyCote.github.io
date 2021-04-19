var doc = document,
    wiw = window;
var arrowContainer = doc.querySelectorAll(".tile__container-arrow"),
    arrow = doc.querySelectorAll(".arrow"),
    tileBlock = doc.querySelectorAll(".tile__container-block");
// Внутренние переменные для функций
var iOldTile, tileOpen = false;
//
function Main() {
  findElement();
}
Main();
function findElement() {
  let arrowContainer = Array.from(window.arrowContainer),
  arrow = Array.from(window.arrow),
  tileBlock = Array.from(window.tileBlock);
  var i;
  arrowContainer.forEach((th) => {
    th.addEventListener("click",(event)=>{
      let parent = event.target.parentElement;
      if (parent.classList != "tile__container-block")
          parent = parent.parentElement;
      i = tileBlock.indexOf(parent);
      cssTileBlock(i, iOldTile);
    })
  });
}
function cssTileBlock(th, tn) {
  console.log(th,"\n",tn)
  console.log()
  if (th != tn && tn != undefined || tn != null) {
    tileBlock[tn].children[1].style.display = "none";
    tileBlock[tn].children[2].children[0].style.transform="rotate(0deg)";
  }
  if (th == tn && tileOpen) {
    tileBlock[tn].children[1].style.display = "none";
    tileBlock[tn].children[2].children[0].style.transform="rotate(0deg)";
    tileOpen = !tileOpen;
    return iOldTile = th;
  }
  tileBlock[th].children[1].style.display = "block";
  tileBlock[th].children[2].children[0].style.transform="rotate(180deg)";
  tileOpen = true;
  return iOldTile = th;
}
