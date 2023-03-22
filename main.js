

function myFunction (){
return fetch("sma_gentext.xml").then(response => {
    return response.text()
}).then(xmlString => {
const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
const target = xmlDocument.getElementById("42007").getElementsByTagName("target")[0]
.textContent
return console.log(target)

})}

export default myFunction;