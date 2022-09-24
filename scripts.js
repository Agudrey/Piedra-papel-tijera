// Buttons

const rock_Btn = document.getElementById('rock_button');
const paper_Btn = document.getElementById('paper_button');
const scissors_Btn = document.getElementById('scissors_button');


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


const play = (user, machine) =>{
  let result;


  if(user == 'rock'){
    userImg.src = './imagenes/svg/rockstar_main.svg';

    if(machine == 'rock'){
      robotImg.src = './imagenes/svg/rockstar_main.svg';
      result = 'Empate';
      return result;

    }else if(machine == 'paper'){
      robotImg.src = './imagenes/svg/toilet-paper_main.svg';
      result ='Perdiste :(';
      return result;

    }else{
      robotImg.src = './imagenes/svg/scissor_main.svg';
      result = 'Ganaste :)';
      return result;
    }
  
  }else if(user == 'paper'){
    userImg.src = './imagenes/svg/toilet-paper_main.svg';

    if(machine == 'rock'){
      robotImg.src = './imagenes/svg/rockstar_main.svg';
      result = 'Ganaste :)';
      return result;

    }else if(machine == 'paper'){
      robotImg.src = './imagenes/svg/toilet-paper_main.svg';
      result ='Empate';
      return result;

    }else{
      robotImg.src = './imagenes/svg/scissor_main.svg';
      result = 'Perdiste :(';
      return result;
    }

  }else{
    userImg.src = './imagenes/svg/scissor_main.svg';

    if(machine == 'rock'){
      robotImg.src = './imagenes/svg/rockstar_main.svg';
      result = 'Perdiste :(';
      return result;

    }else if(machine == 'paper'){
      robotImg.src = './imagenes/svg/toilet-paper_main.svg';
      result ='Ganaste :)';
      return result;

    }else{
      robotImg.src = './imagenes/svg/scissor_main.svg';
      result = 'Empate';
      return result;
    }
  }
}



rock_Btn.addEventListener('click', () =>{
  console.log(play('rock', machine_election()));
});

paper_Btn.addEventListener('click', () =>{
  console.log(play('paper', machine_election()));
});

scissors_Btn.addEventListener('click', () =>{
  console.log(play('scissors', machine_election()));
});