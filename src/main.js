// @ts-ignore
document.querySelector('#app').innerHTML = `
<h1>Hello!</h1>
<div>
  <p>Nice to have you here! 🥳</p>
  <p>Here is your excercise:</p>
  <pre>Implement a pin store, that saves pin codes 5 digits long.<br/>
For example <strong>"39271"</strong> is a valid pin code.

A pin is valid when it satisfies the following criteria
 - exactly 5 digits
 - only digits / numbers
 - not all the same. e.g. '11111'
 - ascending or descending sequences are not allowed
 - it consists of more or exactly 4 different digits
    e.g.: '11134' is not allowed, but '11378' and '97531' are allowed
 - digits can be used twice, but not more often.
    e.g. '18961' is valid, but '18911' not.
  </pre>
</div>
`;
