var first_word= 'Software Engineer'
var i=0,j=0,k=0,l=0,m=0;
function loop(){
  if(i<first_word.length){
    document.getElementById('text1').innerHTML+= first_word.charAt(i)
    i++
    setTimeout(loop,200)
  }
}
loop()
var framework= ['Flask','Django','Kivy']
var web = ['HTML5', 'CSS3','JavaScript','ReactJs/Redux','Bootstrap']
var oop = ['Python','Java']
var db = ['MySQL','NoSQL']
function loop1(){
  if(j>2) j =0;
  document.getElementById('fw').innerHTML = framework[j]
  j++;
  setTimeout(loop1,2000)
}
loop1()
function loop2(){
  if(k>4) k =0;
  document.getElementById('fe').innerHTML = web[k]
  k++;
  setTimeout(loop2,2000)
}
loop2()
function loop3(){
  if(l>1) l =0;
  document.getElementById('oops').innerHTML = oop[l]
  l++;
  setTimeout(loop3,2000)
}
loop3()
function loop4(){
  if(m>1) m =0;
  document.getElementById('db').innerHTML = db[m]
  m++;
  setTimeout(loop4,2000)
}
loop4()


var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("pda");
var btn1 = document.getElementById("ot");
var btn2 = document.getElementById("adm");
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2= document.getElementsByClassName("close2")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
