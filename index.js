function time(){
    var date = new Date
    gio = date.getHours()
    phut = date.getMinutes()
    giay = date.getSeconds()
    if (phut < 10){
        document.getElementById('time').innerHTML = gio + ':'+'0'+ phut + ':'+ giay
    }
    if (phut > 10){
        document.getElementById('time').innerHTML = gio + ':'+ phut + ':'+ giay
    }
    if (giay <10){
        document.getElementById('time').innerHTML = gio + ':'+ phut + ':'+ "0"+ giay
    }
    if (giay >10){
        document.getElementById('time').innerHTML = gio + ':'+ phut + ':'+ giay
    }
    
}
setInterval(time,1)
function day(){
    switch (new Date().getDay()) {
        case 0:
          document.getElementById('date').innerHTML = "Sunday"
          break;
        case 1:
            document.getElementById('date').innerHTML = "Monday";
          break;
        case 2:
            document.getElementById('date').innerHTML = "Tuesday";
          break;
        case 3:
            document.getElementById('date').innerHTML = "Wednesday";
          break;
        case 4:
            document.getElementById('date').innerHTML = "Thursday";
          break;
        case 5:
            document.getElementById('date').innerHTML = "Friday";
          break;
        case 6:
            document.getElementById('date').innerHTML = "Saturday";
      }
}
setInterval(day,1000)
function date(){
    var date = new Date()
    var time = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    document.getElementById('sub_date').innerHTML = time
}
setInterval(date,1000)