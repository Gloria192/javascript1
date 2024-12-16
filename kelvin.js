function kelvin(){
const kelvin = 293;
 // initial value of kelvin()

const celsius = kelvin - 273;
//Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable.
let fahrenheit = celsius * (9 / 5) + 32;
 // the initial value of fahrenheit
 fahrenheit = Math.floor(fahrenheit);
 //Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature
 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
  // Convert to Newton
  let newton = celsius * (33 / 100);
  // Round down
  newton = Math.floor(newton);
  console.log(`The temperature is ${newton} degrees Newton.`);
}
kelvin()