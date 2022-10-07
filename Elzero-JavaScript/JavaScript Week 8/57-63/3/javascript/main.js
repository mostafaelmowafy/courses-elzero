function ageInTime(theAge) {
    if(theAge < 10 || theAge > 100) (
        console.log("Age Out Of Range")
    )
    else{
        let ageMonth =theAge * 12;
        console.log(`${ageMonth} Months`)
        let ageWeak =theAge * 52.177;
        console.log(`${ageWeak.toFixed(2)} weaks`)
        let ageDay =ageWeak * 7;
        console.log(`${ageDay.toFixed(2)} Days`)
        let ageHouer =ageDay * 24
        console.log(`${ageHouer.toFixed(2)} Hours`)
        let ageMinute =ageHouer *60;
        console.log(`${ageMinute.toFixed(2)} Minutes`)
        let ageSecound =ageMinute *60;
        console.log(`${ageSecound.toFixed(2)} Secounds`)
    }
    
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
