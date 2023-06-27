let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let button = document.getElementById("btn");
let result = document.getElementById("result");
let clr = document.getElementById("clr");
let rs = document.getElementById("result");
let ss = document.getElementById("sts");


clr.onclick = () => {

    age.value = '';
    height.value = '';
    weight.value = '';

    rs.textContent = 'Your BMI will be shown here! 📩';
    rs.style.color = 'black';
    ss.textContent = 'Your status will be shown here! 🎯';
    ss.style.color = 'black';

}


button.onclick = () => {

    let result = document.getElementById("result");
    let sts = document.getElementById("sts");

    if(!age.value){
        sts.style.color = 'red';
        sts.textContent = 'Age field is required!';

        setTimeout(() => {
            sts.style.color = 'black';
            sts.textContent = 'Your status will be shown here! 🎯';
        }, 1800);
        return;
    }

    if(!height.value){
        sts.style.color = 'red';
        sts.textContent = 'Height field is required!';

        setTimeout(() => {
            sts.style.color = 'black';
            sts.textContent = 'Your status will be shown here! 🎯';
        }, 1800);
        return;
    }


    if(!weight.value){
        sts.style.color = 'red';
        sts.textContent = 'Weight field is required!';

        setTimeout(() => {
            sts.style.color = 'black';
            sts.textContent = 'Your status will be shown here! 🎯';
        }, 1800);
        return;
    }

    if(!age.value || !height.value || !weight.value){
        sts.style.color = 'red';
        sts.textContent = 'All fields are required!';

        setTimeout(() => {
            sts.style.color = 'black';
            sts.textContent = 'Your status will be shown here! 🎯';
        }, 1800);
        return;
    }

    let h = height.value;
    let w = weight.value;


    let new_height = h / 100;
    // console.log("Height in metres: " + new_height)
    let n_height = new_height * new_height;
    // console.log("Height squared: " + n_height)
    let bmi = w / n_height;

    console.log(bmi)
    let n = bmi.toString();
    let real_bmi = Number(n.slice(0, 4));
    console.log(real_bmi);
    // console.log(typeof(n))

    // console.log("BMI:" + bmi)

    if(bmi < 16){
        result.style.color = 'red';
        result.innerText = 'Your BMI is ' + real_bmi;
        sts.style.color = 'red';
        sts.innerText = 'It\'s not good, you are thin! 🔨';
    }
    if(bmi > 16 && bmi < 25){
        result.style.color = 'green';
        result.innerText = "Your BMI is " + real_bmi;
        sts.style.color = 'green';
        sts.innerText = 'Congrats you are a healthy person 🎯';
    }
    if(bmi > 25){
        result.style.color = 'orange';
        result.innerText = 'Your BMI is ' + real_bmi;
        sts.innerText = 'Not good, you are overweight! 🔨';
        sts.style.color = 'orange';
    }

}


// I hope you liked the video
// Thanks for watching, Dont forget to subscribe and like the video