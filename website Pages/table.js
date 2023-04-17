var empolyees = JSON.parse(localStorage.getItem('empolyees'));
// if empty
if (empolyees == null){
empolyees = [];
}
var table = document.getElementById('table');
var tableData = document.getElementsByTagName('td');
var tableRows = document.getElementsByTagName('tr');
for (empolyee of empolyees) {
    let template = 
                `<tr>
                    <td>${empolyee.id}</td>
                    <td>${empolyee.name}</td>
                    <td>${empolyee.email}</td>
                    <td><button id="update" onclick = "visitUpdate(empolyees.indexOf(empolyee));">update</button></td>
                    <td><button id="delete" onclick = "deleteEmpolyee(empolyees.indexOf(empolyee));">delete</button></td>
                </tr>`;
    
    table.innerHTML += template;
}
// update action
function visitUpdate(idx) {
    // pass the empolyee to the local storage
    localStorage.setItem("autoFill", JSON.stringify(empolyees[idx]));
    window.location = 'update.html';
}
// delete action

function deleteEmpolyee(idx){
    // empolyees = empolyees.filter(function(empolyee){
    //     return empolyees.indexOf(empolyee) != idx;
    // })
    empolyees.splice(idx, 1);
    localStorage.setItem('empolyees', JSON.stringify(empolyees));
    table.deleteRow(idx + 1);
}
