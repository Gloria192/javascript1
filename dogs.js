function dog(){
    const myAge=8;
    //  declare a variable const whose value cannot be changed
    let earlyYears = 2;
        // this defines earlyyears and its values
        earlyYears *= 10.5;
        let laterYears= myAge - 2;
        laterYears *= 4;
        let myAgeInDogYears = earlyYears + laterYears;
        // this is the total years
        const myName = 'Gloria'.toLocaleLowerCase() ;
        // my name
    
        console.log(earlyYears +" and "+ laterYears)
        console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
        // this prints out my name human age and dog age
    }
    dog()
