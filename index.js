function time(){
    var date = new Date
    gio = date.getHours()
    phut = date.getMinutes()
    if (phut < 10){
        document.getElementById('time').innerHTML ='Timer: ' + gio + ':'+"0"+ phut
    }
    else if (phut > 10){
        document.getElementById('time').innerHTML ='Timer: ' + gio + ':'+ phut
    } 
}
setInterval(time,1000)
function day(){
    switch (new Date().getDay()) {
        case 0:
          document.getElementById('date').innerHTML =  "Today is: "+ "Sunday"
          break;
        case 1:
            document.getElementById('date').innerHTML = "Today is: "+"Monday";
          break;
        case 2:
            document.getElementById('date').innerHTML = "Today is: "+"Tuesday";
          break;
        case 3:
            document.getElementById('date').innerHTML ="Today is: "+ "Wednesday";
          break;
        case 4:
            document.getElementById('date').innerHTML = "Today is: "+"Thursday";
          break;
        case 5:
            document.getElementById('date').innerHTML = "Today is: "+"Friday";
          break;
        case 6:
            document.getElementById('date').innerHTML = "Today is: "+"Saturday";
      }
}
setInterval(day,1000)
function date(){
    var date = new Date()
    var time = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    document.getElementById('sub_date').innerHTML ="Date: "+ time
}
setInterval(date,1000)

function index(){
  pass = document.getElementById("pass").value
  if (pass == "itc.edu.vn"){
    document.getElementById('img').src = "./img/qrcode.png";
    document.getElementById('erro').innerHTML = ""
  }
  else {
    document.getElementById('erro').innerHTML = " Mã không hợp lệ"
  }

}


