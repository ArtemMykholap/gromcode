 const finishForm = () => {
         const changeAttribute = document.querySelector('input[type="text"]')
         changeAttribute.type = 'password'; //first type for change attribute
         const newInput = document.createElement('input');
         newInput.setAttribute('type', 'text'); //second type for change and add attributes
         newInput.setAttribute('name', 'login')
         const elementInput = document.querySelector('.login-form');
         elementInput.append(newInput);
     }
     // finishForm()