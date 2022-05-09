"use strict";
if (typeof(browser) === 'undefined') {
	var browser = chrome;
}

browser.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    //url 알아내는거인데 크롬에서 될려나
    // console은 디버그용
    const url1 = url.split("/");
    console.log(url);
    console.log(url1);
    var url2 = url1[2];
    if (url2 == "www.youtube.com"){
        var id = url1[4];
        console.log("ID : " + id);
        console.log("New URL : ");
        console.log("https://www.youtube.com/watch?v=" + id);
        console.log("유튜브 감지ㅇㅇ");
    }else{
        console.log(url2);
        console.log("유튜브 아님");
    }
})