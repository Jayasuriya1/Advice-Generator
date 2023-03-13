var bodyEle = document.querySelector('body')
//creating advice content displaying container
var adviceContainer = document.createElement('div');
adviceContainer.classList.add("container-fluid","message")
bodyEle.append(adviceContainer)
var adviceRow = document.createElement('div');
adviceRow.classList.add("row","style1")
adviceContainer.append(adviceRow)
var adviceCol = document.createElement('div');
adviceCol.classList.add("col-10","text-center")
adviceRow.append(adviceCol)

//creating button

var btn = document.createElement('div')
btn.classList.add("btn")
btn.innerHTML=`
<button type="button" onclick=advice(this) class="btn btn-dark img-fluid">Click Me </button>
`
adviceCol.innerHTML=`<h1>Click Below Button To Get Some Advice</h1>`
bodyEle.append(btn)

async function advice(){
    adviceCol.innerHTML=''
    var responce = await fetch(`https://api.adviceslip.com/advice`)
    var data = await responce.json()
    console.log(data)
    adviceCol.innerHTML=`<h1>${data.slip.advice}</h1>`
}
