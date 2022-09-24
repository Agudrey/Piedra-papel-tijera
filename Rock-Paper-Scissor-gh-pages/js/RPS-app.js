// REFERENCIA DE VARIABLES
// var options = [0 = "piedra", 1 = "papel", 2 = "tijera"];
// counterM == Counter Machine (número de vueltas ganadas por la máquina)
// counterH == Counter Human (número de vueltas ganadas por el usuario)
// numberCounterM == Numero del contador Machine
// numberCounterH == Numero del contador Humano
// accumulatedUser == Array que acumula las iteraciones del Humano y las traduce en la placa final
// accumulatedMachine == Array que acumula las iteraciones de la Máquina y las traduce en la placa final
var options = [0, 1, 2],
    accumulatedUser = [],
    accumulatedMachine = [],
    choiceMachine,
    choiceHuman,
    counterHuman = 0,
    counterMachine = 0,
    counter = document.getElementById('textoResultado'),
    counterM = document.getElementById('counterM'),
    counterH = document.getElementById('counterH'),
    numberCounterM = document.getElementById('numberCounterM'),
    numberCounterH = document.getElementById('numberCounterH'),
    noNamePlayer,
    namePlayer,
    user = document.getElementById('user'),
    robot = document.getElementById('robot'),
    rock = document.getElementById("piedra"),
    paper = document.getElementById("papel"),
    scissor = document.getElementById("tijera"),
    start = document.getElementById('popUp_container_boton'),
    startSecondChance = document.getElementById('boton_enter_secondChance');
    startSecondChance.style.display = "none";
// ------ finalización de declaración de variables globales


// ------ Inicio Saludo de cada día

// Array para textos de saludos de cada día de la semana
var dayOfTheWeek = [
    "The weekend is almost over!", 
    "Monday?, work?, study?, naaaa!", 
    "Playing on a Tuesday? ...I envy you!", 
    "Wednesday, the midweek day", 
    "Thursday is almost weekend!", 
    "Friday should be a day of the weekend!", 
    "Hey!, It's Saturday!."
    ];

var d = new Date();
var dayOf = d.getDay();

// función para obtener el día actual para la pantalla de inicio
function getWeekDay() {
    switch (dayOf){
        case 0: return dayOfTheWeek[0]; /* Sunday */
        case 1: return dayOfTheWeek[1]; /* Monday */
        case 2: return dayOfTheWeek[2]; /* Tuesday */
        case 3: return dayOfTheWeek[3]; /* Wednesday */
        case 4: return dayOfTheWeek[4]; /* Thursady */
        case 5: return dayOfTheWeek[5]; /* Friday */
        case 6: return dayOfTheWeek[6]; /* Saturday */
    }
}

var dayToday = getWeekDay();
var greetingsDay = document.getElementById('dayToday');
    greetingsDay.style.display = "inline-block"
    greetingsDay.innerHTML = `${dayToday}`;
    
// Short version
// function getWeekDay() {
//     switch (new Date().getDay()){
//         case 0: return "The weekend is almost over!.";
//         case 1: return "Monday?, work?, study?, naaaa!.";
//         case 2: return "Playing on a Tuesday? I envy you!.";
//         case 3: return "Wednesday, the midweek day.";
//         case 4: return "Thursday is almost weekend!.";
//         case 5: return "Friday should be a day of the weekend!.";
//         case 6: return "Hey!, It's Saturday!.";
//     }
// }

// var greetingsDay = document.getElementById('dayToday');
//     greetingsDay.style.display = "inline-block"
//     greetingsDay.innerHTML = `${getWeekDay()}`;


// ------ Fin Saludo de cada día


// Array para cargar los iconos que rotan
var imagesIcons = new Array(
    ['svg/rockstar_main.svg'],
    ['svg/toilet-paper_main.svg'],
    ['svg/scissor_main.svg'],
    ['svg/user_main.svg'],
    ['svg/robot_main.svg'],
    ['svg/spock_main.svg']
);

// función para definir los iconos del array imagesIcons
function selectedIcons(player, icon){
    player.src = imagesIcons[icon];
}

// Creo los addEventListener para cada uno de los inputs de "LET'S PLAY", "LET'S PLAY Second chance", Rock, Paper y Scissor
start.addEventListener("click", function(event){
    event.preventDefault();
    idHumanPlayer();
});

startSecondChance.addEventListener("click", function(event){
    event.preventDefault();
    idHumanPlayer_secondChance();
});

rock.addEventListener("click", function(event){
    event.preventDefault();
    deactivateButtons();
    Humano(0); // humano eligió piedra 
});

paper.addEventListener("click", function(event){
    event.preventDefault();
    deactivateButtons();
    Humano(1); // humano eligió papel 
});

scissor.addEventListener("click", function(event){
    event.preventDefault();
    deactivateButtons();
    Humano(2); // humano eligió tijera 
});


// función para la generación del nombre del nuevo jugador
function idHumanPlayer() {

    namePlayer = (document.getElementById('inputName').value).trim().toUpperCase();

    if (namePlayer){
        document.getElementById('popup_register').style.display = "none";
        let div = document.createElement('div');
        div.innerHTML = `${namePlayer}`;
        counterH.appendChild(div);

            console.log(namePlayer);

    }  else if (!namePlayer){

        let noValidationName = document.getElementById('cambio');
        noValidationName.textContent = "...no name? are you sure?";
        start.style.display = "none";
        startSecondChance.style.display = "flex"; //cambio de botón
        
        console.log("primera chance NO");
    } 
} 

// función para la generación de la chance de nuevo nombre o "HUMAN" en caso de no haber nada.
function idHumanPlayer_secondChance() {

    namePlayer = (document.getElementById('inputName').value).trim().toUpperCase();

    if (namePlayer){
        document.getElementById('popup_register').style.display = "none";
        let div = document.createElement('div');
        div.innerHTML = `${namePlayer}`;
        counterH.appendChild(div);

            console.log(namePlayer);

    } else if (!namePlayer){
        // si no hay ningún nombre, tras dos intentos, muestra un cartel temporal donde indica que se llamará "HUMAN" al jugador.
        noNamePlayer = "HUMANOID";
        let noValidationName = document.getElementById('cambio');

        noValidationName.textContent = "NO NAME!!, OK! ... then I'll call you: 'HUMANOID'";
        document.getElementById('popup_text_secondary').style.display = "none";
        document.getElementById('inputName').style.display = "none";
        startSecondChance.style.display = "none";

        setTimeout(function(){
        document.getElementById('popup_register').style.display = "none";
        let div = document.createElement('div');
        div.innerHTML = `${noNamePlayer}`;
        counterH.appendChild(div);
            console.log(noNamePlayer);
        }, 2000);        
    } 
}


// desactivo los botones en cada evento para evitar el doble click y que loopee la animación
function deactivateButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}

// activo los botones en cada evento que quedaron desactivados con deactivateButtons().
function activateButtons() {
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
}

// función sigue jugando haciendo click en "rematch..."
// opción para NO recargar la página y volver todos los datos a 0 menos el nombre
function currentGame() {
    accumulatedUser.length = 0,
    accumulatedMachine.length = 0,
    counterHuman = 0,
    counterMachine = 0,
    numberCounterM.innerHTML = 0,
    numberCounterH.innerHTML = 0,
    finalBackground = document.getElementById('finalScreen'),
    finalBackground.style.display = 'none',
    counter.innerHTML = 
        `
        <div class="footerGrid";>
            <div id="textoResultado" class="textResultAnimated" style="font-size: 100%;";>CHOOSE:
                <img class="buttonText" src="svg/rockstar_yellow.svg" alt="Rockstar Icon">
                <img class="buttonText" src="svg/toilet-paper_yellow.svg" alt="Toilet Paper Icon">
                <img class="buttonText" src="svg/scissor_yellow.svg" alt="Scissors Icon">?</div>
        </div>
                `,
    counterH.style.color = 'var(--violeta-medio)',
    counterM.style.color = 'var(--violeta-medio)',
    numberCounterH.style.color = 'var(--violeta-oscuro-degrade)',
    numberCounterM.style.color = 'var(--violeta-oscuro-degrade)',
    document.body.style.backgroundImage = "linear-gradient(180deg, var( --violeta-oscuro-degrade), var(--violeta-claro))";
    selectedIcons(user, 3);
    selectedIcons(robot, 4);
    counterAnimation(user);
    counterAnimation(robot);
    activateButtons();
        console.log("Seguimos!");
}


// función para recargar la pantalla y comenzar otra vez
function newGame() {
    location.reload();
        console.log("Arrancamos otra vez!");
}
        

// Animaciones
// Animaciones para los iconos en empates
function animationTie(element) {
    element.animate(
    [
        // keyframes
        { transform: 'rotate(10deg) scale(1)' }, 
        { transform: 'rotate(-10deg) scale(0.9)' },
        { transform: 'rotate(10deg) scale(0.9)' },
        { transform: 'rotate(-10deg) scale(0.9)' },
        { transform: 'rotate(10deg) scale(0.9)' },
        { transform: 'rotate(0deg) scale(1)' },
    ], { 
        // tiempos
        duration: 300,
        iterations: 1,
        easing: 'linear', 
    }
)};

// Animaciones para los iconos de Robot y User
function animationWon(element) {
    element.animate(
    [
        // keyframes
        { transform: 'scale(1.4, 1.4) translateY(0)' },
        { transform: 'scale(1.1, 0.9) translateY(0)' },
        { transform: 'scale(0.9, 1.1) translateY(-100px)' },
        { transform: 'scale(1.05, 0.95) translateY(0)' },
        { transform: 'scale(1, 1) translateY(-7px)' },
        { transform: 'scale(1, 1) translateY(0)' },
        { transform: 'scale(1, 1) translateY(0)' },
    ], { 
        // tiempos
        duration: 600,
        iterations: 1,
        easing: 'ease-out', 
    }
)};

// función para rotar números
function counterAnimation(element) {
    element.animate([
        // keyframes
        { transform: 'rotateX(0deg)' }, 
        { transform: 'rotateX(180deg)' },
        { transform: 'rotateX(0deg)' }, 
    ], { 
        // tiempos
        duration: 200,
        iterations: 1,
        easing: 'ease-out', 
    });
}

// función para rotar los iconos cuando se hace click en alguna opción 
function rotateImagesIcons(){
    var index = Math.floor((Math.random() * imagesIcons.length));
    document.getElementById("user").src = imagesIcons[index][0];
    document.getElementById("robot").src = imagesIcons[index][0];
}


// función para random de elección máquina
function randomNumber(min, max){
    var number = Math.floor(Math.random() * (max - min +1) + min);
        return number;
}


// función según la elección humano
function Humano(choiceHuman) {
   
    namePlayer = (document.getElementById('inputName').value).toUpperCase();

    //funciones para cambios de icono Machine - si no los defino como función siempre muestra la imagen de la última variable (en este caso: rock);
    
    continueText = function() {
        document.getElementById('descriptiveText').textContent = '(click in one of 3 options to continue playing!)';
    };

    // la máquina define un número random y su consecuente opción
    choiceMachine = randomNumber(0,2);
    // animación de las opciones   

    function pararAnimacion() {
        clearInterval(fin);
    }

    rotateImagesIcons();
    fin = setInterval(rotateImagesIcons,35);
    setTimeout(pararAnimacion, 400);

    // función para definir si gana Roca, Papel o Tijera y sus consecuencias
    // el setTimeout espera a la animación de las opciones
    setTimeout(function(){
        //este prirmer if es para frenar la función (e inhabilitar los botones) cuando el contador llegue a 3.
        if(counterHuman === 3 || counterMachine === 3){
            return;
        }   
        if(choiceHuman == 0) { // humano eligió piedra 
            selectedIcons(user, 0);
            continueText();
            accumulatedUser.push(`${namePlayer}` + " (Rock)");
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                youLost();
                selectedIcons(robot, 1);
                animationWon(robot);
                accumulatedMachine.push(" loses - MACHINE (Paper) wins");
                counterAnimation(numberCounterM);
            } else if (options[choiceMachine] == 2) { // máquina eligió tijera 
                youWon();
                selectedIcons(robot, 2);
                animationWon(user);
                accumulatedMachine.push(" wins - MACHINE (Scissors) loses");
                counterAnimation(numberCounterH);
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                itsATie();
                selectedIcons(robot, 0);
                animationTie(user);
                animationTie(robot);
                accumulatedUser.pop();
            } else {
                console.log("error");
            }
        }
        if (choiceHuman == 1) { // humano eligió papel 
            selectedIcons(user, 1);
            continueText();
            accumulatedUser.push(`${namePlayer}` + " (Paper)");
            if (options[choiceMachine] == 2) { // máquina eligió tijera 
                youLost();
                selectedIcons(robot, 2);
                animationWon(robot);
                accumulatedMachine.push(" loses - MACHINE (Scissors) wins");
                counterAnimation(numberCounterM);
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                youWon();
                selectedIcons(robot, 0);
                animationWon(user);
                accumulatedMachine.push(" wins - MACHINE (Rock) loses");
                counterAnimation(numberCounterH);
            } else if (options[choiceMachine] == 1) { // máquina eligió papel 
                itsATie();
                selectedIcons(robot, 1);
                animationTie(user);
                animationTie(robot);
                accumulatedUser.pop();
            } else {
                console.log("error");
            }
        }
        if (choiceHuman == 2) { // humano eligió tijera 
            selectedIcons(user, 2);
            continueText();
            accumulatedUser.push(`${namePlayer}` + " (Scissors)");
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                youWon();
                selectedIcons(robot, 1);
                animationWon(user);
                accumulatedMachine.push(" wins - MACHINE (Paper) loses");
                counterAnimation(numberCounterH);
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                youLost();
                selectedIcons(robot, 0);
                animationWon(robot);
                accumulatedMachine.push(" loses - MACHINE (Rock) wins");
                counterAnimation(numberCounterM);
            } else if (options[choiceMachine] == 2) { // máquina eligió tijera 
                itsATie();
                selectedIcons(robot, 2);
                animationTie(user);
                animationTie(robot);
                accumulatedUser.pop();
            } else {
                console.log("error");
            }
        }
            console.log("usuario: " + accumulatedUser); //testeo en consola
            console.log("maquina: " + accumulatedMachine); //testeo en consola

            // reavtivo los botones luego de qeu termina la función para poder volver a hacer click
            rock.disabled = false;
            paper.disabled = false;
            scissor.disabled = false;
    } ,600);
}


// función para color de resultados
function colorCounter() {
    // si va ganando Humano
    if (counterHuman > counterMachine) {
        counterH.style.color = 'var(--verde)';
        counterM.style.color = 'var(--rojo)';
        numberCounterH.style.color = 'var(--verde)';
        numberCounterM.style.color = 'var(--rojo)';
        counterH.textContent = namePlayer || noNamePlayer;
    // si va ganando Máquina    
    } else if (counterHuman < counterMachine) {
        counterH.style.color = 'var(--rojo)';
        counterM.style.color = 'var(--verde)';
        numberCounterH.style.color = 'var(--rojo)';
        numberCounterM.style.color = 'var(--verde)';
        counterH.textContent = namePlayer || noNamePlayer;
    // si van empatando y es la última ronda
    } else if ((counterHuman == 2) && (counterMachine == 2)) {
        counterH.style.color = 'var(--rojo)';
        counterM.style.color = 'var(--rojo)';
        numberCounterH.style.color = 'var(--rojo)';
        numberCounterM.style.color = 'var(--rojo)';
        document.body.style.backgroundImage = "linear-gradient(180deg, var( --violeta-oscuro), var(--violeta-claro))";
        setTimeout(function(){
            counter.textContent = 'MATCHPOINT!!';
            counter.style.color = 'var(--blanco)';
        },760);
        counterH.textContent = namePlayer || noNamePlayer;
    // si van empatando 
    } else {
        counterH.style.color = 'var(--blanco)';
        counterM.style.color = 'var(--blanco)';
        numberCounterH.style.color = 'var(--blanco)';
        numberCounterM.style.color = 'var(--blanco)';
        counterH.textContent = namePlayer || noNamePlayer;
    }
}


// funciones para textos de Ganador, Perdedor o Empate
function youWon() {
    counter.textContent = 'YOU WON!';
    counter.style.color = 'var(--verde)';
    counterH.textContent = namePlayer;
    numberCounterH.textContent = ++counterHuman;
    colorCounter();
    counterResults();
        setTimeout(function(){
            counter.textContent = 'YOU\'RE IN LUCK!!';
            counter.style.color = 'var(--verde)';
        },750);
}

function youLost() {
    counter.textContent = 'YOU LOST!';
    counter.style.color = 'var(--rojo)';
    counterM.textContent = 'MACHINE';
    numberCounterM.textContent = ++counterMachine;
    colorCounter();
    counterResults();
        setTimeout(function(){
            counter.textContent = 'TRY AGAIN!';
            counter.style.color = 'var(--rojo)';
        },750);
}

function itsATie() {
    counter.textContent = 'IT\'S A TIE!';
    counter.style.color = 'var(--blanco)';
    colorCounter();
    counterResults();
        setTimeout(function(){
            counter.textContent = 'TIE THIS OFF!!';
            counter.style.color = 'var(--blanco)';
        },750);
}


// función para realizar el listado de resultados de las partidas
function summaryResults(){
    var result = accumulatedUser.map( (item, ix) => `<h5><span style="color: #000">Round ${ix + 1}:</span> ${item} ${accumulatedMachine[ix]}</h5><br>`);
        console.log(`resultado: ${result}`);
    return `${result}`.replace(/,/g,"");
}

// función para datos genéricos de pantalla final y contador total de ganados y perdidos
function genericResults(colorBackground, result){

    var finalBackground = document.getElementById('finalScreen');

    setTimeout(function(){
        finalBackground.style.display = 'flex';
        finalBackground.style.backgroundColor = colorBackground;
        finalBackground.innerHTML = `
            <h1>${result}</h1>
            <h2>${namePlayer || noNamePlayer}: ${counterHuman}</h2>
            <h2>MACHINE: ${counterMachine}</h2>
            <br>
            <h5>${summaryResults()}</h5>
            <button class="boton" onclick="currentGame()">WANNA REMATCH, ${namePlayer || noNamePlayer}?</button>
            <br>
            <button class="boton" onclick="newGame()">NEW PLAYER!</button>
            `;
        },500);      
}


// disparador de pantalla final y paso los parametros para ganador o perdedor
function counterResults() {
    if (counterHuman === 3) {
        genericResults("rgba(var(--verde-RGB), 0.8)", "YOU WON!!");
    } else if (counterMachine === 3) {
            genericResults("rgba(var(--rojo-RGB), 0.8)", "YOU LOST!!");
    } else {
        console.log("Sigue el juego");
    }
}