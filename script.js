function myFirstApp(name,app){
name =prompt("Як має імя?", " ");
age =prompt("Скільки мені років?", " ");

alert(`Привіт, мене звати ${name}, мені ${age} років і це моя перша програима`);

  function showSkills(){
    let skills=['html', 'css', 'js'];

  for( let i=0; i<skills.length; i++){
    alert("Я вмію " + skills[i]);
  }
}
showSkills();

  function cheakAge(){
  if (app>18){
    alert('Ви досягли необхідного віку');
  }else{
    alert('Вам не достатньо років');
  }
  }
  cheakAge();

 function calcPow(){

  let result=prompt("Вписати цифру", " ");
  result*=result;
  alert(result);
 
}
calcPow();

}


myFirstApp('ivan', 32);