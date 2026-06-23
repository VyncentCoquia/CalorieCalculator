function calculateCalories(){

    let weight =
        parseFloat(
            document.getElementById("weight").value
        );

    let height =
        parseFloat(
            document.getElementById("height").value
        );

    let age =
        parseInt(
            document.getElementById("age").value
        );

    let gender =
        document.getElementById("gender").value;

    let activity =
        parseFloat(
            document.getElementById("activity").value
        );

    if(
        !weight ||
        !height ||
        !age ||
        !gender ||
        !activity
    ){
        alert("Please complete all fields.");
        return;
    }

    let bmi =
        weight / ((height / 100) ** 2);

    let bmr;

    if(gender === "male"){
        bmr =
            10 * weight +
            6.25 * height -
            5 * age +
            5;
    }
    else{
        bmr =
            10 * weight +
            6.25 * height -
            5 * age -
            161;
    }

    let bmiRange;
            switch (true){
                case (bmi < 18.5):
                    bmiRange = "Underweight";
                    break;
            
                case (bmi >= 18.5 && bmi <= 24.9):
                    bmiRange = "Healthy weight";
                    break;

                case (bmi >= 25.0 && bmi <= 29.9):
                    bmiRange = "Overweight";
                    break;
                
                    default:
                    bmiRange = "Obese";
            

    }

    let maintenanceCalories =
        Math.round(
            bmr * activity
        );

    let deficitCalories =
        maintenanceCalories - 500;

    document.getElementById("result")
        .innerHTML =
        `
        Maintenance: ${maintenanceCalories} kcal<br>
        Fat Loss: ${deficitCalories} kcal
        Body Mass Index: ${bmi.toFixed(1)} you are ${bmiRange}
        `;
}