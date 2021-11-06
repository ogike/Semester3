const textarea = document.querySelector('#the-textarea');
const button = document.querySelector('#the-button');
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

//a feladat
button.addEventListener('click', () => {
    let obj = JSON.parse(textarea.value)
    console.log(obj)

    //b feladat
    task1.innerHTML = obj.hourly.find( (elem) => elem.wind_deg > 135 
                                    && elem.wind_deg < 225 
                                    && elem.weather[0].main == "Clouds")
                                .dt
    
    //c feladat
    let minTemp = obj.daily[0].temp.max
    for(let day of obj.daily){
        if(day.temp.max < minTemp){
            minTemp = day.temp.max
        }
    }
    task2.innerHTML = minTemp
    
    //d feladat
    task3.innerHTML = obj.daily.every( (day) => day.pressure > 1010)
    
    //e feladat
    let sumOfTemp = obj.daily.reduce( (a, b) => a + b.feels_like.day , 0)
    task4.innerHTML = sumOfTemp / obj.daily.length
    
    //f feladat
    task5.innerHTML = obj.hourly.filter( (hour) => hour.wind_speed > 3).length

})
