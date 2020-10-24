function getFirstName(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// getFirstName("Ali Abedi");

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

// console.log(getFirstName("Ali Abedi"));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName("Ali Abedi"));