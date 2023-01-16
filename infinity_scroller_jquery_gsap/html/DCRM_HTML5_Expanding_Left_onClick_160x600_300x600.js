// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var expandConten;
var bgExit;
var expandBtn;
var closeBtn;

var arrowTop;
var arrowBottom;
var ctaArray;
var productTxt;
var productImg;

var expertiseBtn;
var schoolBtn
var helmetBtn;
var jacketBtn;
var bindingsBtn;
var school;
var gear;
var expertise;
var gearBtn;
var gearBtnproduct;

//animation
var expBck;
var expMtn;
var expTxt1;
var expTxt2;
var expTxt3;
var expCta;

var sclBg;
var sclMtn;
var sclTxt1;
var sclTxt2;
var sclTxt3;
var sclTxt4;
var sclCta;

var gearBg;
var gearMtn;
var gearTxt1;
var gearTxt2;
var gearTxt3;
var gearCta;

//Function to run with any animations starting on load, or bringing in images etc
init = function(){
	ctaArray = ['','Helmet','Jacket','Bindings'];
	
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	expandConten = document.getElementById('expand_content_dc');
	bgExit = document.getElementById('background_exit_dc');
	expandBtn = document.getElementById('expand_btn_dc');
	closeBtn = document.getElementById('close_btn_dc');
	
	arrowTop = document.getElementById('arrowT');
	arrowBottom = document.getElementById('arrowB');
	productTxt = document.getElementById('carousel_container1');
	productImg = document.getElementById('carousel_container');
	
	school = document.getElementById('school_exp');
	gear = document.getElementById('gear_exp');
	expertise = document.getElementById('expertise_exp');
	
	expertiseBtn = document.getElementById('expertise_icon');
	schoolBtn = document.getElementById('school_icon');
	gearBtn = document.getElementById('gear_icon');
	
	helmetBtn = document.getElementById('helmet_cta');
	jacketBtn = document.getElementById('jacket_cta');
	bindingsBtn = document.getElementById('bindings_cta');
	/*gearBtnproduct = document.getElementById('gear_cta');*/
	
	expBck = document.getElementById('expertise_bg');
	expMtn = document.getElementById('exp_mountain');
	expTxt1 = document.getElementById('exp_line1');
	expTxt2 = document.getElementById('exp_line2');
	expTxt3 = document.getElementById('exp_line3');
	expCta = document.getElementById('exp_cta');
	
	sclBg = document.getElementById('school_bg');
	sclMtn = document.getElementById('school_mtn');
	sclTxt1 = document.getElementById('school_line1');
	sclTxt2 = document.getElementById('school_line2');
	sclTxt3 = document.getElementById('school_line3');
	sclCta = document.getElementById('school_cta');
	
	gearBg = document.getElementById('gear_bg');
	gearMtn = document.getElementById('gear_mountain');
	gearTxt1 = document.getElementById('gear_line1');
	gearTxt2 = document.getElementById('gear_line2');
	gearTxt3 = document.getElementById('gear_line3');
	gearCta = document.getElementById('gear_cta');
	
	collapsedAnimation();
	
	//Bring in listeners i.e. if a user clicks or rollsover
	addListeners();
	//Show Ad
	container.style.display = "block";
	
	unitHeight = 600;
	unitTotal = 3;
	unitCtr = 1;
}

//-----------------------------------------------Add Event Listeners
addListeners = function() {
	bgExit.addEventListener('click', bgExitHandler1, false);
	expandBtn.addEventListener('click', onExpandHandler, false);
	closeBtn.addEventListener('click', onCloseHandler, false);
	
	//Nav
	expertiseBtn.addEventListener('click', onExpertiseHandler, false);
	schoolBtn.addEventListener('click', onSchoolHandler, false);
	gearBtn.addEventListener('click', onGearHandler, false);
	
	
	//Carousel
	/*arrowTop.addEventListener('click', onTopArrow, false);
	arrowBottom.addEventListener('click', onBottomArrow, false);
	
	arrowTop.addEventListener('dblclick', function(e){
    e.preventDefault();
	});
	arrowBottom.addEventListener('dblclick', function(e){
    e.preventDefault();
	});*/
	
	//Tracking
	document.getElementById('exp_cta').addEventListener('click', masterHandler, false);
	document.getElementById('school_cta').addEventListener('click', schoolHandler, false);
	//gearBtnproduct.addEventListener('click', product3Handler, false);
	document.getElementById('text1').addEventListener('click', helmetHandler, false);
	document.getElementById('text2').addEventListener('click', jacketHandler, false);
	document.getElementById('text3').addEventListener('click', bindingsHandler, false);
	
}

bgExitHandler = function(e) {	
	//Call Exits
	
	
	//collapse the add
	Enabler.collapse();
    Enabler.stopTimer('panel_1 Expansion');
	//Hide Expand
	expandConten.style.display = "none";
}

bgExitHandler1 = function(e) {	
	//Call Exits
	
	Enabler.exit('Bg_Click');
	//collapse the add
	Enabler.collapse();
    Enabler.stopTimer('panel_1 Expansion');
	//Hide Expand
	expandConten.style.display = "none";
}

onExpandHandler = function(e){ 
        Enabler.expand();
        showExpandedAssets();
		hideArrows();
        Enabler.startTimer('panel_1 Expansion');	
}

showExpandedAssets = function(e){
	//Show Expand over the top
	expandConten.style.display = "block";
	expertise.style.display = "block";
	expertise_mtn.style.display = "block";
	document.getElementById("expertise_icon").style.opacity = "1";
	expertise.style.visibility="visible";
	//hides
	school.style.display = "none";
	gear.style.display = "none";
	gear_mtn.style.display = "none";
	school_mtn.style.display = "none";
	document.getElementById("gear_icon").style.opacity = ".7";
	document.getElementById("school_icon").style.opacity = ".7";
	
	//TweenMax.set("#expBck",{alpha:1, y:600});
	disableNav();
	
	TweenMax.set(expBck, {y:0});
	
	TweenMax.set(expMtn, {alpha:1});
	TweenMax.set("#box1", {clip:"rect(58px, 157px, 58px,  0px)"});
	TweenMax.to("#box1", 1.1, {clip:"rect(0px, 157px, 58px,  0px)", ease:Strong.easeOut, delay:.5, onComplete:enableNav});
	TweenMax.set(expTxt1, {alpha:1});
	TweenMax.set(expTxt2, {alpha:1});
	TweenMax.set(expTxt3, {alpha:1});
	TweenMax.set(expCta, {alpha:1});
	TweenMax.from(expTxt1, .5, {y:"250", alpha:0, delay:.3});
	TweenMax.from(expTxt2, .5, {y:"250", alpha:0, delay:.4});
	TweenMax.from(expTxt3, .5, {y:"250", alpha:0, delay:.5});
	TweenMax.from(expCta, .5, {y:"250", alpha:0, delay:.6});
	
}

onCloseHandler = function(e){
        Enabler.counter('Rich Media Manual Closes');    
        Enabler.collapse();
        Enabler.stopTimer('panel_1 Expansion');
		Enabler.reportManualClose();
		//Hide Expand
		expandConten.style.display = "none";
		TweenLite.to(productTxt, 0.1, {y: 0 });
		TweenLite.to(productImg, 0.1, {y: 0 });
		unitCtr = 1;
}

//Nav
onExpertiseHandler = function(e) {
	//hides
	//school.style.display = "none";
	//gear.style.display = "none";
	document.getElementById("gear_icon").style.opacity = ".7";
	document.getElementById("school_icon").style.opacity = ".7";
	gear_mtn.style.display = "none";
	school_mtn.style.display = "none";
	//show
	expertise.style.display = "block";
	expertise_mtn.style.display = "block";
	document.getElementById("expertise_icon").style.opacity = "1";
	expertTween();	
	
}



onSchoolHandler = function(e) {
	//hides
	//gear.style.display = "none";
	//expertise.style.display = "none";
	document.getElementById("expertise_icon").style.opacity = ".7";
	document.getElementById("gear_icon").style.opacity = ".7";
	expertise_mtn.style.display = "none";
	gear_mtn.style.display = "none";
	//show
	school.style.display = "block";
	school_mtn.style.display = "block";	
	document.getElementById("school_icon").style.opacity = "1";
	schoolTween();
}

onGearHandler = function(e) {
	//hides
	//school.style.display = "none";
	//expertise.style.display = "none";
	document.getElementById("expertise_icon").style.opacity = ".7";
	document.getElementById("school_icon").style.opacity = ".7";
	
	school_mtn.style.display = "none";
	expertise_mtn.style.display = "none";
	//show
	gear.style.display = "block";
	gear_mtn.style.display = "block";
	document.getElementById("gear_icon").style.opacity = "1";
	gearTween();
	
}

//End Nav

//Nav Animations
expertTween = function() {
	expertise.style.visibility="visible";
	var a = 0;
	var t1 = .5;
	var t2 = .2;
	disableNav();
	TweenMax.set(expBck,{alpha:1, y:600});
	
	TweenMax.to(expBck, t1, {y:0, delay:.1});
	TweenMax.to(sclBg, t1, {y:-600, delay:.1});
	TweenMax.to(gearBg, t1, {y:-600, delay:.1});
	//Text animations
	TweenMax.set("#exp_mountain", {alpha:1});
	TweenMax.set("#box1", {clip:"rect(58px, 157px, 58px,  0px)"});
	TweenMax.to("#box1", 1.1, {clip:"rect(0px, 157px, 58px,  0px)", ease:Strong.easeOut, delay:.5, onComplete:enableNav});
	TweenMax.set(expTxt1, {alpha:1});
	TweenMax.set(expTxt2, {alpha:1});
	TweenMax.set(expTxt3, {alpha:1});
	TweenMax.set(expCta, {alpha:1});
	TweenMax.from(expTxt1, t1, {y:"250", alpha:a, delay:.3});
	TweenMax.from(expTxt2, t1, {y:"250", alpha:a, delay:.4});
	TweenMax.from(expTxt3, t1, {y:"250", alpha:a, delay:.5});
	TweenMax.from("#exp_cta", t1, {y:"250", alpha:a, delay:.6, onComplete:expertiseHide});
	
	TweenMax.to("#school_mountain", t2, {alpha:a});
	TweenMax.to(sclTxt1, t2, {alpha:a});
	TweenMax.to(sclTxt2, t2, {alpha:a});
	TweenMax.to(sclTxt3, t2, {alpha:a});
	TweenMax.to(sclCta, t2, {alpha:a});
	
	TweenMax.to("#gear_mountain", t2, {alpha:a});
	TweenMax.to(gearTxt1, t2, {alpha:a});
	TweenMax.to(gearTxt2, t2, {alpha:a});
	TweenMax.to(gearTxt3, t2, {alpha:a});
	TweenMax.to(gearCta, t2, {alpha:a});

	TweenMax.to(productImg, t2, {alpha:a});
	TweenMax.to(productTxt, t2, {alpha:a});
	TweenMax.to(arrowTop, t2, {alpha:a});
	TweenMax.to(arrowBottom, t2, {alpha:a});
	
	function expertiseHide(){
	school.style.visibility="hidden";
	gear.style.visibility="hidden";
	}
	
}

schoolTween = function() {
	school.style.visibility="visible";
	var a = 0;
	var t1 = .5;
	var t2 = .2;
	disableNav();
	TweenMax.set(sclBg,{alpha:1, y:600});
	
	TweenMax.to(sclBg, t1, {y:0, delay:.1});
	TweenMax.to(expBck, t1, {y:-600, delay:.1});
	TweenMax.to(gearBg, t1, {y:-600, delay:.1});
	//Text animations
	TweenMax.set("#school_mountain", {alpha:1});
	TweenMax.set("#box2", {clip:"rect(58px, 157px, 58px,  0px)"});
	TweenMax.to("#box2", 1.1, {clip:"rect(0px, 157px, 58px,  0px)", ease:Strong.easeOut, delay:.5, onComplete:enableNav});
	TweenMax.set(sclTxt1, {alpha:1});
	TweenMax.set(sclTxt2, {alpha:1});
	TweenMax.set(sclTxt3, {alpha:1});
	TweenMax.set(sclCta, {alpha:1});
	TweenMax.set(productImg, {alpha:1});
	TweenMax.from(sclTxt1, t1, {y:"250", alpha:a, delay:.3});
	TweenMax.from(sclTxt2, t1, {y:"250", alpha:a, delay:.4});
	TweenMax.from(sclTxt3, t1, {y:"250", alpha:a, delay:.5});
	TweenMax.from(sclCta, t1, {y:"250", alpha:a, delay:.6, onComplete:schoolHide});
	
	TweenMax.to("#exp_mountain", t2, {alpha:a});
	TweenMax.to(expTxt1, t2, {alpha:a});
	TweenMax.to(expTxt2, t2, {alpha:a});
	TweenMax.to(expTxt3, t2, {alpha:a});
	TweenMax.to("#exp_cta", t2, {alpha:a});
	
	TweenMax.to("#gear_mountain", t2, {alpha:a});
	TweenMax.to(gearTxt1, t2, {alpha:a});
	TweenMax.to(gearTxt2, t2, {alpha:a});
	TweenMax.to(gearTxt3, t2, {alpha:a});
	TweenMax.to(gearCta, t2, {alpha:a});
	
	TweenMax.to(productImg, t2, {alpha:a});
	TweenMax.to(productTxt, t2, {alpha:a});
	TweenMax.to(arrowTop, t2, {alpha:a});
	TweenMax.to(arrowBottom, t2, {alpha:a});
	
	function schoolHide(){
	expertise.style.visibility="hidden";
	gear.style.visibility="hidden";
	
	}
	
	
}

gearTween = function() {
	gear.style.visibility="visible";
	var a = 0;
	var t1 = .5;
	var t2 = .2;
	disableNav();
	TweenMax.set(gearBg,{alpha:1, y:600});
	
	TweenMax.to(gearBg, t1, {y:0, delay:.1});
	TweenMax.to(sclBg, t1, {y:-600, delay:.1});
	TweenMax.to(expBck, t1, {y:-600, delay:.1});
	//Text animations
	TweenMax.set(gearMtn, {alpha:1});
	TweenMax.set("#box3", {clip:"rect(58px, 157px, 58px,  0px)"});
	TweenMax.to("#box3", 1.1, {clip:"rect(0px, 157px, 58px,  0px)", ease:Strong.easeOut, delay:.5, onComplete:enableNav});
	TweenMax.set(gearTxt1, {alpha:1});
	TweenMax.set(gearTxt2, {alpha:1});
	TweenMax.set(gearTxt3, {alpha:1});
	TweenMax.set(gearCta, {alpha:1});
	TweenMax.from(gearTxt1, t1, {y:"250", alpha:a, delay:.3});
	TweenMax.from(gearTxt2, t1, {y:"250", alpha:a, delay:.4});
	TweenMax.from(gearTxt3, t1, {y:"300", alpha:a, delay:.5});
	TweenMax.from(gearCta, t1, {y:"300", alpha:a, delay:.6});
	//Carousel
	//TweenMax.set(productImg, {y:0});
	TweenMax.set(arrowTop, {alpha:1});
	TweenMax.set(arrowBottom, {alpha:1});
	TweenMax.set(productImg, {alpha:1});
	TweenMax.set(productTxt, {alpha:1});
	TweenMax.from(arrowTop, t1, {y:"50", alpha:a, delay:1});
	TweenMax.from(arrowBottom, t1, {y:"-50", alpha:a, delay:1});
	TweenMax.from(productImg, t1, {y:"300", alpha:a, delay:1.2});
	TweenMax.from(productTxt, t1, {y:"300", alpha:a, delay:1.25});
	
	//Fade outs
	TweenMax.to("#exp_mountain", t2, {alpha:a});
	TweenMax.to(expTxt1, t2, {alpha:a});
	TweenMax.to(expTxt2, t2, {alpha:a});
	TweenMax.to(expTxt3, t2, {alpha:a});
	TweenMax.to("#exp_cta", t2, {alpha:a});
	
	TweenMax.to("#school_mountain", t2, {alpha:a});
	TweenMax.to(sclTxt1, t2, {alpha:a});
	TweenMax.to(sclTxt2, t2, {alpha:a});
	TweenMax.to(sclTxt3, t2, {alpha:a});
	TweenMax.to("#school_cta", t2, {alpha:a});
	
	
	gearHide = function(){
	expertise.style.visibility="hidden";
	school.style.visibility="hidden";
	}
	
}

//Collapsed Animation //

collapsedAnimation = function() {
		var x = 3.3;
		var t = .75;
		var h = 600;
		TweenMax.to('#content_dc', 1, {backgroundPosition:"100% 0%", ease:Power1.easeInOut});
		TweenMax.set('#collapsed_box', {clip:"rect(79px, 215px, 79px,  0px)"});
		TweenMax.to('#collapsed_box', 1.1, {clip:"rect(0px, 215px, 79px,  0px)", ease:Strong.easeOut, delay:.75});
		TweenMax.from('#collapsed_text1', t, {y:"50", alpha:0, ease:Strong.easeOut, delay:.1});
		TweenMax.from('#collapsed_text2', t, {y:"75", alpha:0, ease:Strong.easeOut, delay:.2});
		TweenMax.from('#collapsed_text3', t, {y:"75", alpha:0, ease:Strong.easeOut, delay:.3});
		TweenMax.to('#collapsed_text1', t, {y:"-500", alpha:0, delay:x});
		TweenMax.to('#collapsed_text2', t, {y:"-500", alpha:0, delay:x});
		TweenMax.to('#collapsed_text3', t, {y:"-500", alpha:0, delay:x});
		TweenMax.from('#collapsed_icons', t, {y:h, alpha:0, ease:Strong.easeOut, delay:x});
		TweenMax.from('#collapsed_text4', t, {y:h, alpha:0, ease:Strong.easeOut, delay:3.4});
		TweenMax.from('#collapsed_text5', t, {y:h, alpha:0, ease:Strong.easeOut, delay:3.5});
		TweenMax.from('#collapsed_cta', t, {y:h, alpha:0, ease:Strong.easeOut, delay:3.6});
	
}

function disableNav() { //ADDED NEW FUNCTION TO DISABLE NAV
	expertiseBtn.removeEventListener('click', onExpertiseHandler, false);
	schoolBtn.removeEventListener('click', onSchoolHandler, false);
	gearBtn.removeEventListener('click', onGearHandler, false);
}

function enableNav() { //ADDED NEW FUNCTION TO RE-ENABLE NAV
	expertiseBtn.addEventListener('click', onExpertiseHandler, false);
	schoolBtn.addEventListener('click', onSchoolHandler, false);
	gearBtn.addEventListener('click', onGearHandler, false);
}



function disableArrows() { //ADDED NEW FUNCTION TO DISABLE ARROWS
	arrowTop.removeEventListener('click', onTopArrow, false);
	arrowBottom.removeEventListener('click', onBottomArrow, false);
}

function enableArrows() { //ADDED NEW FUNCTION TO RE-ENABLE ARROWS
	arrowTop.addEventListener('click', onTopArrow, false);
	arrowBottom.addEventListener('click', onBottomArrow, false);
}




//Exits

function masterHandler(e) {
    Enabler.exit('Master');
	bgExitHandler();
}


function schoolHandler(e) {
    Enabler.exit('School');
	bgExitHandler();
}

helmetHandler = function(e) {
    Enabler.exit('Helmet');
	bgExitHandler();	
}

jacketHandler = function(e) {
	Enabler.exit('Jacket');
	bgExitHandler();
}

bindingsHandler = function(e) {
	Enabler.exit('Bindings');
	bgExitHandler();
}


//End Exit 