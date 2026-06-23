function calculateCalories(){

    let weight =
        document.getElementById("weight").value;

    let calories = weight * 30;

    document.getElementById("result")
        .innerText =
        "Recommended Calories: " +
        calories;

        if(weight === ""){
    alert("Please enter your weight");
}
}