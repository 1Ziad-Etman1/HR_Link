var empolyees = JSON.parse(localStorage.getItem('empolyees'));
var autoFill = JSON.parse(localStorage.getItem('autoFill'));
const form = document.querySelector('form');

// get gender
function setGender(){
    if (autoFill.gender == 'male'){
        document.getElementById('autoMale').checked = true;
    }
    else{
        document.getElementById('autoFemale').checked = true;
    }
}
// fill the form
document.getElementById('autoName').value = autoFill.name;
document.getElementById('autoId').value = autoFill.id;
document.getElementById('autoEmail').value = autoFill.email;
document.getElementById('autoAddress').value = autoFill.address;
document.getElementById('autoPhone').value = autoFill.phone;
setGender();
document.getElementById('autoAvailableVac').value = autoFill.availableVac;
document.getElementById('autoActualVac').value = autoFill.actualVac;
document.getElementById('autoSalary').value = autoFill.salary;
document.getElementById('autoBirthDate').value = autoFill.birthDate;

// updadate the old data
// get gender
form.addEventListener('submit', function(e){
    e.preventDefault();
    function getGender(){
        if (document.getElementById('autoMale').checked){
            return 'male';
        }
        else{
          return 'female';
        }
    }
    
    const empolyee = {
        name: document.getElementById('autoName').value,
        id: document.getElementById('autoId').value,
        email: document.getElementById('autoEmail').value,
        address: document.getElementById('autoAddress').value,
        phone: document.getElementById('autoPhone').value,
        gender: getGender(),
        availableVac: document.getElementById('autoAvailableVac').value,
        actualVac: document.getElementById('autoActualVac').value,
        salary: document.getElementById('autoSalary').value,
        birthDate: document.getElementById('autoBirthDate').value,
    }
    
    // delet the autoFill from the local storage
    function checkEqual(empolyee){
        return (
            empolyee.name === autoFill.name &&
            empolyee.id === autoFill.id &&
            empolyee.email === autoFill.email)
    }
    for(let i = 0; i < empolyees.length; i++) {
        if (checkEqual(empolyees[i])) {
            empolyees.splice(i, 1);
            localStorage.removeItem('autoFill')
            empolyees.push(empolyee);
            localStorage.setItem("empolyees", JSON.stringify(empolyees));
        }
    }
    // empolyees.splice(empolyees.indexOf(autoFill), 1);;
    // localStorage.setItem("empolyees", JSON.stringify(empolyees));
    // // insert the new update at the local storage
    // empolyees.push(empolyee);
    // localStorage.setItem("empolyees", JSON.stringify(empolyees));
    
})