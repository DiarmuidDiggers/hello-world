const testDiv = document.getElementById("tester");

const possiblePolarisations = ["vertical", "horizontal", "dia45", "dia135"];
let polarisationsAtA = [];
let detectorsUsedAtB = [];
let correctValues = [];
let measuredValues = [];
let qubits = [];

class Qubit {
    constructor() {
        this.value = getRandom(2);
        this.polarisation = possiblePolarisations[getRandom(4)];
        this.measuredWith = possiblePolarisations[getRandom(4)];
        this.measuredOutput;
    }
    determineOutput() {
        if (this.polarisation == this.measuredWith) {
            this.measuredOutput = this.value;
        } else {
            this.measuredOutput = getRandom(2);
        }
    }
    pushValuesToArrays() {
        polarisationsAtA.push(this.polarisation);
        detectorsUsedAtB.push(this.measuredWith);
        correctValues.push(this.value);
        measuredValues.push(this.measuredOutput);
    }

}

function getRandom(range) {
    return Math.floor(Math.random() * range);
}

function instantiateQubits() {
    for (let i = 0; i < 20; i++) {
        qubits[i] = new Qubit();
        qubits[i].determineOutput();
        qubits[i].pushValuesToArrays();
    }
    testDiv.innerHTML = "Measured: " + measuredValues + "</br> Correct......" + correctValues;
}

instantiateQubits();