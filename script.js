var style=false

function swapStyle(){
    console.log("hello world");

    if(style==false){
        document.getElementById('linkStyle').setAttribute('href','Style.css');
        style=!style;
    }
    else{
    document.getElementById('linkStyle').setAttribute('href','Style2.css');
    style=!style;
    }
}