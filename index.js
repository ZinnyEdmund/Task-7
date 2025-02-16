class Telephone {
    constructor(){
        this.phoneNumbers = new Set();  //Stores the valid phone number
        this.observer = [];  //List of observer
    }

    //Add a new number
    addPhoneNumber(number){
        this.phoneNumbers.add(number);
    }

    //Remove a new phone number
    removePhoneNumber(number){
        this.phoneNumbers.delete(number);
    }
    //Will add an observer
    addObserver(observer){
        this.observer.push(observer);
    }

    //It will notify all observers when a number is dialed
    notifyObservers(number){
        this.observer.forEach(observer => observer.update(number));
    }

    //It dials a phone number and notifys the observer
    dialPhoneNumber(number){
        if(this.phoneNumbers.has(number)){
            console.log(`Dialing ${number}...`);
                this.notifyObservers(number);
        }
        else{
            console.log("The phone number wasn't found!");
        }
    }
}

class Observer{
    constructor(action){
        this.action = action;
    }
    update(phoneNumber){
        this.action(phoneNumber);
    }
}

//Telephone examples
const mobileSystem = new Telephone();

//Add phone numbers
mobileSystem.addPhoneNumber("2348049578891");
mobileSystem.addPhoneNumber("2348039488230");


//To create an observer
const firstObserver = new Observer(number => 
    console.log(`Dialed: ${number}`)
);
const secondObserver = new Observer(number => 
    console.log(`Now dialing ${number}`)
);

//Add observer to the telephone
mobileSystem.addObserver(firstObserver);
mobileSystem.addObserver(secondObserver);

//Examples...
mobileSystem.dialPhoneNumber("2348049578891");
mobileSystem.dialPhoneNumber("666666456646");