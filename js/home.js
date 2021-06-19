window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

createInnerHtml = () => {
    const headerHtml = "<th></th><th>FullName</th><th>Address</th><th>city</th>" +
                        "<th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>";

    //Set innerHtml
    let innerHtml = `${headerHtml}`;
    let adderessBookList = createAddressBookJSON(); 

    //for loop for printing multiple persons
    for(const addressBookData of adderessBookList) {
        innerHtml = `${innerHtml}
        <tr>
            <td></td>
            <td>${addressBookData._name}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zip}</td>
            <td>${addressBookData._phone}</td>
            <td>
            <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
            <img id="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>
    `;
    }

    document.querySelector('#table-display').innerHTML = innerHtml;
}

//create json Object
const createAddressBookJSON = () => {
    let personListLoacal = [
        {
            _name:'Snehal Patil',
            _address:'Kranti chowk',
            _city:'Sangli',
            _state:'Maharshtra',
            _phone:'91 9999999999',
            _zip:'444 444'}
    ];

    return personListLoacal;
}

//UC-13
const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

//UC14
const remove = (node) => {
    let addressBookData = addressBookList.find(addData => addData._id == node.id);
    if (!addressBookData) return;
    const index = addressBookList
                  .map(addData => addData._id)
                  .indexOf(addressBookData._name);
    addressBookList.splice(index,1);
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHTML();
}