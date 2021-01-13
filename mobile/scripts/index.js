var	main_css=document.getElementById("main_css"),
	footer_css=document.getElementById("footer_css"),
	viewport=document.getElementById("viewport");

console.log(window.screen.width);

if (window.screen.width==1024 || window.screen.width>1024) {
	main_css.setAttribute("href","style/index.css");
	footer_css.setAttribute("href","style/header__and__footer.css");
	viewport.setAttribute("content","width=1920");
}
if (window.screen.width==1000 || window.screen.width<1000) {
	main_css.setAttribute("href","style/index2.css");
	footer_css.setAttribute("href","style/header__and__footer2.css");
	viewport.setAttribute("content","width=960");
}
var i=0,
	o=0;
document.querySelector(".ul__li-img").addEventListener("click",()=>{
	o=i%2;
	if (o==0) {
		document.querySelector(".nav__ul").style.display="block";
		i++;
	} else if (o==1) {
		document.querySelector(".nav__ul").style.display="none";
		i++;
	}
	
})