//for Color
function setColor() {
    const val = document.getElementById('colorbox').value
    document.getElementById('text-container').style.color = val
}

//for size change of text
function sizeChange() {
    const size = document.getElementById('text-size').value
    document.getElementById('text-container').style.fontSize = size + 'px'
}

//for font bold,italic,underline
function setBold() {
    var set = document.getElementById('bold').innerText
    document.getElementById('bold').innerText = 'Remove Bold'
    if(set === 'Remove Bold') {
        set = 'normal'
        document.getElementById('bold').innerText = 'Bold'
    }
    document.getElementById('text-container').style.fontWeight = set
}
function setItalic(){
    var set=document.getElementById('italic').innerText;
    document.getElementById('italic').innerText='Remove Italic';
    if(set==='Remove Italic') {
        set='normal';
        document.getElementById('italic').innerText='Italic';
    }
    document.getElementById('text-container').style.fontStyle=set;
}
function setLine(){
    var set=document.getElementById('underline').innerText;
    document.getElementById('underline').innerText='Remove Underline';
    if(set==='Remove Underline') {
       set='none';
       document.getElementById('underline').innerText='Underline';
    }
    document.getElementById('text-container').style.textDecoration=set;
}

//for Font family
function setFont() {
    var select = document.getElementById('list')
    const font = document.getElementById('list').options[select.selectedIndex].value
    document.getElementById('text-container').style.fontFamily = font
}
const options = [
    {key:"serif" , text:"Serif"},
    {key:"sans-serif" , text:"Sans-serif"},
    {key:"monospace" , text:"Monospace"},
    {key:"cursive" , text:"Cursive"},
    {key:"fantasy" , text:"Fantasy"}
]
options.forEach((item) => {
    let option = document.createElement("option")
    option.innerText = item.text
    document.getElementById('list').appendChild(option)
})

//for display
function display(){
    var colorset=document.getElementById('colorbox').value;
    var size=document.getElementById('fontsize').value;
    var bold=document.getElementById('bold').innerText;
    var italic=document.getElementById('italic').innerText;
    var underline=document.getElementById('underline').innerText;
    var select = document.getElementById('list');
    var font=document.getElementById('list').options[select.selectedIndex].value;
    document.getElementById('css-props').innerHTML=`CSS properties of above text: <br>color: ${colorset}; <br>
    font-size:${size};<br>
    text-decoration: ${underline};<br>
    font-weight: ${bold};<br>
    font-style: ${italic};<br>
    font-family: ${font};`
}


