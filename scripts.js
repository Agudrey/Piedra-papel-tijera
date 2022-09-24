// Buttons

const rock_Btn = document.getElementById('rock_button');
const paper_Btn = document.getElementById('paper_button');
const scissors_Btn = document.getElementById('scissors_button');

const reset_btn = document.getElementById('reset_btn')


// Characters

const userImg = document.getElementById('userImg');
const robotImg = document.getElementById('robotImg');


// Footer 

const text_result = document.getElementById('textResult');


// Scores

const name_user = document.getElementById('name_user');
const score_human = document.getElementById('score_human');
const score_machine = document.getElementById('score_machine');


// -----------------------------Funtions--------------------------------------- //


const machine_election = () =>{    //1,4,7 => rock    2,5,8 => paper    3,6,9 => scissors

  let num_random = Math.round(Math.random() * (9 - 1) + 1);
  let m_election

  if(num_random === 1 || num_random === 4 || num_random === 7){
    m_election = 'rock'
    return m_election;
  
  }else if(num_random === 2 || num_random === 5 || num_random === 8){
    m_election = 'paper'
    return m_election;
  
  }else{
    result = 'scissors';
    return m_election;
  } 
}



const play = (user, machine, contH, contM) =>{
  let result;


  if(user === 'rock'){
    userImg.src = './imagenes/svg/rockstar_main.svg';
  
    if(machine ==='rock'){
      robotImg.src = './imagenes/svg/rockstar_main.svg';
      result = 'Empate';
      return result;
  
    }else if(machine === 'paper'){
      contM.push('*');
      score_machine.textContent = contM.length;
      robotImg.src = './imagenes/svg/toilet-paper_main.svg';
      result ='Perdiste :(';
      return result;
  
    }else{
      contH.push('*');
      score_human.textContent = contH.length;
      robotImg.src = './imagenes/svg/scissor_main.svg';
      result = 'Ganaste :)';
      return result;
    }
    
  }else if(user === 'paper'){
    userImg.src = './imagenes/svg/toilet-paper_main.svg';
  
    if(machine === 'rock'){
      contH.push('*');
      score_human.textContent = contH.length;
      robotImg.src = './imagenes/svg/rockstar_main.svg';
      result = 'Ganaste :)';
      return result;
  
    }else if(machine === 'paper'){
      robotImg.src = './imagenes/svg/toilet-paper_main.svg';
      result ='Empate';
      return result;
  
    }else{
      contM.push('*');
      score_machine.textContent = contM.length;
      robotImg.src = './imagenes/svg/scissor_main.svg';
      result = 'Perdiste :(';
      return result;
    }
  
  }else{
    userImg.src = './imagenes/svg/scissor_main.svg';
  
    if(machine === 'rock'){
      contM.push('*');
      score_machine.textContent = contM.length;
      robotImg.src = './imagenes/svg/rockstar_main.svg';
      result = 'Perdiste :(';
      return result;
  
    }else if(machine === 'paper'){
      contH.push('*');
      score_human.textContent = contH.length;
      robotImg.src = './imagenes/svg/toilet-paper_main.svg';
      result ='Ganaste :)';
      return result;
  
    }else{
      robotImg.src = './imagenes/svg/scissor_main.svg';
      result = 'Empate';
      return result;
    }
  }
};


const reset = (contH, contM) =>{
  userImg.src = './imagenes/svg/user_main.svg';
  robotImg.src = './imagenes/svg/robot_main.svg';

  contH.splice(0);
  contM.splice(0);

  score_human.textContent = contH.length;
  score_machine.textContent = contM.length;

  console.log(contH.length);
  console.log(contM.length);

}

// -----------------------------Start-------------------------------------- //


let cont_h = [];
let cont_m = [];



rock_Btn.addEventListener('click', () =>{

  if(cont_h.length < 10 && cont_m.length < 10){
    console.log(play('rock', machine_election(), cont_h, cont_m));
  }
  
  if(cont_h.length === 10 || cont_m.length === 10){
    if(cont_h.length > cont_m.length){
      text_result.textContent = 'HAS GANADO!';
      text_result.style.color = 'var(--verde)';
      return

    }else if(cont_m.length > cont_h.length){
      text_result.textContent = 'HAS PERDIDO';
      text_result.style.color = 'var(--rojo)';
      return
    }
  }
});

paper_Btn.addEventListener('click', () =>{

  if(cont_h.length < 10 && cont_m.length < 10){
    console.log(play('paper', machine_election(), cont_h, cont_m));
  }
  
  if(cont_h.length === 10 || cont_m.length === 10){
    if(cont_h.length > cont_m.length){
      text_result.textContent = 'HAS GANADO!';
      text_result.style.color = 'var(--verde)';
      return

    }else if(cont_m.length > cont_h.length){
      text_result.textContent = 'HAS PERDIDO';
      text_result.style.color = 'var(--rojo)';
      return
    }
  }
});

scissors_Btn.addEventListener('click', () =>{

  if(cont_h.length < 10 && cont_m.length < 10){
    console.log(play('scissors', machine_election(), cont_h, cont_m));
  }
  
  if(cont_h.length === 10 || cont_m.length === 10){
    if(cont_h.length > cont_m.length){
      text_result.textContent = 'HAS GANADO!';
      text_result.style.color = 'var(--verde)';
      return

    }else if(cont_m.length > cont_h.length){
      text_result.textContent = 'HAS PERDIDO';
      text_result.style.color = 'var(--rojo)';
      return
    }
  }
});


reset_btn.addEventListener('click', () =>{
  reset(cont_h, cont_m)
});