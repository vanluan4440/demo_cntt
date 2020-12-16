function time(){
    var date = new Date
    gio = date.getHours()
    phut = date.getMinutes()
    giay = date.getSeconds()
    if (phut < 10){
        document.getElementById('time').innerHTML ='Timer:' + gio + ':'+"0"+ phut + ':'+ giay
    }
    else if (phut > 10){
        document.getElementById('time').innerHTML ='Timer:' + gio + ':'+ phut + ':'+ giay
    }
    if (giay <10){
        document.getElementById('time').innerHTML ='Timer:' + gio + ':'+ phut + ':'+ "0"+ giay
    }
    else if (giay >10){
        document.getElementById('time').innerHTML ='Timer:' + gio + ':'+ phut + ':'+ giay
    }
    
}
setInterval(time,1)
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
function open_windown(){
    window.location = "https://drive.google.com/drive/folders/1gVoUokYsI1d7G3u7VR39qwXg496b_9j1?usp=sharing"
}
function open_photoshopcs6()
{
    window.location = "https://drive.google.com/drive/folders/12Tgb59XcSKMBy3oPuFwnYLqus8UF072h?usp=sharing"
}