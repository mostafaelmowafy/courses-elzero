function getDetails(zName, zAge, zCountry) {
    function namePattern(zName ="") {
        zName = zName.split(" ");
        zName = zName[0] + " " + zName[1][0];
        return `Hello ${zName}.`;
    }
    function ageWithMessage(zAge) {
        return `Your Age Is ${zAge.slice(0,2)}`
    }
    function countryTwoLetters(zCountry) {
        zCountry= zCountry.slice(0,2).toUpperCase()
        return `You Live In ${zCountry}`
    }
    function fullDetails() {
        return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY