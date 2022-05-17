const puppeteer = require("puppeteer");
let page;
console.log("before")
const browserOpenpromise = puppeteer.launch({
    headless: false,
    slowMo: 100,
    defaultViewport: null,
    args:["--start-maximized"]
});
browserOpenpromise
.then(function(browser) {

    const pageArrpromise = browser.pages();// currently open tabs
   return pageArrpromise;

}).then(function(browserPage){
    page = browserPage[0];
   let gotoPromise = page.goto("https://www.google.com/")
   return gotoPromise;
}).then(function(){
    //waiting for the element to appear on the page
    let  elementWaitPromise = page.waitForSelector("input[type = 'text']", {visible:true});
    return elementWaitPromise;
}).then(function(){
    // console.log("reached google");
    // type an elemnt on that page -> selector 
   let keysWillbeSendPromise = page.type("input[type = 'text']" , "pepcoding" );
   return keysWillbeSendPromise;
}).then(function(){
    //page.keyboard to type sepcial characters
    let enterWillbePressed = page.keyboard.press("Enter");
    return enterWillbePressed;
})
.then(function(){
let elementWaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {visible: true});
 return elementWaitPromise;

}).then (function(){
    let keysWillbeSendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md" , "pepcoding" );
return keysWillbeSendPromise;
//moiuse
})  
.catch(function(err){
    console.log(err);
})
console.log("after"); 
