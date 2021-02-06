var doc=document, 
	wiw=window;
var a=0,
	b=0;
var changeSize=false;
//основной дроп
if (wiw.matchMedia("(min-width: 768px)").matches) {
		$("li.selector__container-li > ul.container__ul-php").offset({top:290})
} else if (wiw.matchMedia("(min-width: 320px)").matches) {
	$("li.selector__container-li").css("width","150px").offset({left:10})
	$("ul.container__ul-php > li.container__li-php").css("width","150px")
	$("li.selector__container-li > ul.container__ul-php").offset({left:150}).css("z-index","10")
	$("ul.container__ul-php_drop").css("margin-top","100%").css("z-index","15")
}
//поддроп
$("li.container__li-php").each(()=>{
$("li.container__li-php").offset({top:0,left:0})
$("li.container__li-php > ul.container__ul-php_drop ").offset({top:0})
})


