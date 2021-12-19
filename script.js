let day = prompt("Select the day")

function getStudyHours(day) {
  if (day === 'monday'){
  return 8 ;
}else if (day === 'tuesday'){
return 7;
}
 else if (day === 'wednesday'){
return 6;
}else if (day === 'thursday'){
return 5;
}else if (day === 'friday'){
return 4 ;
}else if (day === 'saturday'){
return 3;
}else if (day === 'sunday'){
return 2;
}else {
  return "Hatalı Giriş Yaptınız"
}
}
console.log (getStudyHours(day));

function getActualStudyHours(){
return getStudyHours("monday") +
getStudyHours("tuesday") +
getStudyHours("wednesday") +
getStudyHours("thursday") +
getStudyHours("friday") +
getStudyHours("saturday") +
getStudyHours("sunday") 

}
console.log (getActualStudyHours())

function getIdealStudyHours (){

  let idealHours = 6;
  return idealHours *7
}
console.log(getIdealStudyHours())

function  calculateStudyDebt (){
  let actualStudyHours = getActualStudyHours ()
  let idealStudyHours = getIdealStudyHours ()
  
  if (actualStudyHours > idealStudyHours){
  return ("${actualStudyHours} -${idealStudyHours} saat eksik çalıştınız")
} else if (actualStudyHours < idealStudyHours){
  return ("Çalışma Borcunuz Var.") 
}
}
console.log(calculateStudyDebt())let day = prompt("Select the day")

function getStudyHours(day) {
  if (day === 'monday'){
  return 8 ;
}else if (day === 'tuesday'){
return 7;
}
 else if (day === 'wednesday'){
return 6;
}else if (day === 'thursday'){
return 5;
}else if (day === 'friday'){
return 4 ;
}else if (day === 'saturday'){
return 3;
}else if (day === 'sunday'){
return 2;
}else {
  return "Hatalı Giriş Yaptınız"
}
}
console.log (getStudyHours(day));

function getActualStudyHours(){
return getStudyHours("monday") +
getStudyHours("tuesday") +
getStudyHours("wednesday") +
getStudyHours("thursday") +
getStudyHours("friday") +
getStudyHours("saturday") +
getStudyHours("sunday") 

}
console.log (getActualStudyHours())

function getIdealStudyHours (){

  let idealHours = 6;
  return idealHours *7
}
console.log(getIdealStudyHours())

function  calculateStudyDebt (){
  let actualStudyHours = getActualStudyHours ()
  let idealStudyHours = getIdealStudyHours ()
  
  if (actualStudyHours > idealStudyHours){
  return ("${actualStudyHours} -${idealStudyHours} saat eksik çalıştınız")
} else if (actualStudyHours < idealStudyHours){
  return ("Çalışma Borcunuz Var.") 
}
}
console.log(calculateStudyDebt())