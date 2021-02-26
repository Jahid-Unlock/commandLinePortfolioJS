let skill = document.querySelector('.skill')
let about = document.querySelector('.abo')
let contact = document.querySelector('.contact')
let error = document.querySelector('.error')
let clear = document.querySelector('.clear')
let label = document.querySelector('.label')
let input = document.querySelector('#input')
let test = document.querySelector('.test')
let testTwo = document.querySelector('.test_two')
let testThree = document.querySelector('.test_three')
let testFour = document.querySelector('.test_four')
console.log(testFour)
input.addEventListener('keypress', (e) =>{

    if(e.keyCode === 13){
        let inp = input.value.toString().toLowerCase()
        if(inp === 'about' ){
            about.classList.add('disply')
            testThree.textContent = label.textContent + ' ' + input.value;
            input.value = '';
        }
        else if(inp === 'skill'){
            skill.classList.add('disply')
            test.textContent = label.textContent + ' ' + input.value;
            input.value = '';
        
        }else if(inp === 'contact'){
            contact.classList.add('disply')
            testTwo.textContent = label.textContent + ' ' + input.value;
            input.value = '';
        } else if(inp === 'clear'){
            skill.classList.remove('disply')
            about.classList.remove('disply')
            contact.classList.remove('disply')
            error.classList.remove('disply')
            input.value = '';
        }
        else {
            error.classList.add('disply')
            testFour.textContent = label.textContent + ' ' + input.value;
            input.value = '';
        }
    }
})
