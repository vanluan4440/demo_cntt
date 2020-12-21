function time(){
    var date = new Date
    gio = date.getHours()
    phut = date.getMinutes()
    if (phut < 10){
        return gio + ':'+"0"+ phut
    }
    else if (phut > 10){
        return  gio + ':'+ phut
    } 
}
function day(){
    switch (new Date().getDay()) {
        case 0:
          return "Sunday";
          break;
        case 1:
          return "Monday";
          break;
        case 2:
          return "Tuesday";
          break;
        case 3:
          return "Wednesday";
          break;
        case 4:
          return "Thursday";
          break;
        case 5:
          return "Friday";
          break;
        case 6:
          return "Saturday";
      }
      
}

function date(){
    var date = new Date()
    var time = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    return time
}

function index_time(){
  document.getElementById("sub_date").innerHTML = day() +"--"+ date() +", Now: "+ time()
}
setInterval(index_time,1000)
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


