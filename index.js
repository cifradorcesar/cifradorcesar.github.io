const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

const shifMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span");
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then( () => {
            const charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ? 
                alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] : 
                charSinCodificar
            printChar(currentLetterIndex + 1, wordArray);
        });
}

const animateChar = spanChar => {
    let cambiosDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cambiosDeLetra++;
            if(cambiosDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50);
    });
}

// Función para habilitar el botón de enviar cuando los campos coinciden
function checkFields() {
    const user = document.getElementById('user').value;
    const sameUser = document.getElementById('sameUser').value;
    const password = document.getElementById('password').value;
    const samePassword = document.getElementById('samePassword').value;
    const submitButton = document.getElementById('submitButton');

    if (user === sameUser && password === samePassword) {
        submitButton.disabled = false; // Habilitar el botón
    } else {
        submitButton.disabled = true; // Deshabilitar el botón
    }
}

// Llamar a la función checkFields cada vez que se modifique algún campo
document.getElementById('user').addEventListener('input', checkFields);
document.getElementById('sameUser').addEventListener('input', checkFields);
document.getElementById('password').addEventListener('input', checkFields);
document.getElementById('samePassword').addEventListener('input', checkFields);


const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage()
}

cifrador.onsubmit = submit;


function validateFields() {
    const user = document.getElementById('user').value;
    const sameUser = document.getElementById('sameUser').value;
    const password = document.getElementById('password').value;
    const samePassword = document.getElementById('samePassword').value;

    // Validar campos
    if (!user) {
        document.getElementById('userError').innerText = 'Por favor, ingrese un nombre de usuario.';
        return false;
    }
    if (!sameUser) {
        document.getElementById('sameUserError').innerText = 'Por favor, repita su nombre de usuario.';
        return false;
    }
    if (!password) {
        document.getElementById('passwordError').innerText = 'Por favor, ingrese una contraseña.';
        return false;
    }
    if (!samePassword) {
        document.getElementById('samePasswordError').innerText = 'Por favor, repita su contraseña.';
        return false;
    }

    // Si todos los campos están llenos, enviar formulario
    sendMessage();
}
 
