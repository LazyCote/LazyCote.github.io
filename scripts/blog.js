var doc=document, 
	wiw=window;

var html=0,
	b=0
/*основной дроп*/
for (;html<$(".ul-html .container__li-php").length;html++) {
	b=html/2
	if (Number.isInteger(b) == true) {
		b=b+1
	} else {
		b=b+.5
	}
}
$(".ul-html").css("padding-top",b*50+50+"px")
html=0;
/*поддроп*/
for (;html<$(".ul-html_drop .container__li-php_drop").length;html++) {

}
html=html/2-1;
$(".ul-html_drop").css("padding-top",html*50+"px")





var js=0,
	a=0;
/*основной дроп*/
for (;js<$(".ul-js .container__li-php").length;js++) {
	a=js/2
	if (Number.isInteger(a) == true) {
		a=a+1
	} else {
		a=a+.5
	}
}
$(".ul-js").css("padding-top",a*50+50+"px")
/*поддроп*/
js=0;
for (;js<$(".ul-js_drop .container__li-php_drop").length;js++) {
}
js=js/2-1;
$(".ul-js_drop").css("padding-top",js*50+"px")





var css=0,
	c=0;
/*основной дроп*/
for (;css<$(".ul-css .container__li-php").length;css++) {
	c=css/2
	if (Number.isInteger(c) == true) {
		c=c+1
	} else {
		c=c+.5
	}
}
$(".ul-css").css("padding-top",c*50+50+"px")
/*поддроп*/
css=0;
for (;css<$(".ul-css_drop .container__li-php_drop").length;css++) {
}
css=css/2-1;
$(".ul-css_drop").css("padding-top",css*50+"px")