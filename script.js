var style = false

function swapStyle() {
    console.log("hello world");

    if (style == false) {
        document.getElementById('linkStyle').setAttribute('href', 'Style.css');
        style = !style;
    }
    else {
        document.getElementById('linkStyle').setAttribute('href', 'Style2.css');
        style = !style;
    }
}

function showXML() {
    window.alert("Please use internet Explorer to view the following page correctly");
    window.location.href = "textbooks.xml";
}