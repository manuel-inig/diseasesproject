class Diseases {
    constructor(name, symptoms, treatment) {
        this.name = name; // Nombre de la enfermedad
        this.symptoms = symptoms; // Lista de síntomas
        this.treatment = treatment; // Tratamiento recomendado
    }

    // Método para mostrar información sobre la enfermedad
    getDetails() {
        return `Disease: ${this.name}\nSymptoms: ${this.symptoms.join(', ')}\nSeverity: ${this.severity}\nTreatment: ${this.treatment}`;
    }
}

//Variables declaration

let emptyText = null;
let found = FALSE; 
let counter = 0;

let diseasesArray = [
    new Diseases(
        'Flu', 
        ['fever', 'cough', 'fatigue', 'headache'], 
        'rest, fluids, antiviral medication'
    ),

    new Diseases(
        'COVID-19', 
        ['fever', 'dry cough', 'tiredness', 'loss of taste or smell'], 
        'rest, fluids, isolation, antiviral medication'
    ),

    new Diseases(
        'Diabetes', 
        ['increased thirst', 'frequent urination', 'fatigue', 'blurred vision'], 
        'insulin therapy, healthy diet, regular exercise'
    ),

    new Diseases(
        'Asthma', 
        ['shortness of breath', 'chest tightness', 'wheezing', 'coughing'], 
        'inhalers, bronchodilators, avoiding triggers'
    )
];


function search(){
    console.log(document.getElementById('textfield').value);
}

