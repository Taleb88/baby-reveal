function Human(firstName, lastName, dateOfBirth, height, weight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.height = height;
    this.weight = weight;
    this.updateHeight = function(updatedHeight) {
        this.height = updatedHeight;
    }
}

let baby = new Human('Kareem', 'Lucas', '01-10-2020', '24in', '5lbs');
baby.updateHeight('26.5in');

document.getElementById('description').innerHTML = `<b>First Name:</b> ${baby.firstName} <br>
                                                    <b>Last Name:</b> ${baby.lastName} <br>
                                                    <b>Date of Birth:</b> ${baby.dateOfBirth} <br>
                                                    <b>Height:</b> ${baby.height} <br>
                                                    <b>Weight:</b> ${baby.weight} <br>`