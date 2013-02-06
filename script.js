var show = function(elem){
    document.getElementById(elem).style.color="#000000";
}

window.onload = function(){ 
    var d = new Date();
    var hora = d.getHours(); 
    var min  = d.getMinutes(); 
    if (hora == 1){ 
        show('es'); 
        show('la');
    }else{
        show('son');
        show('las');
    }
    switch (hora){
        case 0:
        case 12:
            show('doce');
            break;
        case 1:
        case 13:
            show('una');
            break;
        case 2:
        case 14:
            show('dos');
            break;
        case 3:
        case 15:
            show('tres');
            break;
        case 4:
        case 16:
            show('cuatro');
            break;
        case 5:
        case 17:
            show('cinco');
            break;
        case 6:
        case 18:
            show('seis');
            break;
        case 7:
        case 19:
            show('siete');
            break;
        case 8:
        case 20:
            show('ocho');
            break;
        case 9:
        case 21:
            show('nueve');
            break;
        case 10:
        case 22:
            show('diez');
            break;
        case 11:
        case 23:
            show('once');
            break;
    }
    
    if (min > 4 && min <= 34) {
        show('y'); 
    }else if (min > 34){
        show('menos');
    }else{
         //en punto
    } 

    if (min <= 4){
            //en punto
    }else if((min > 4 && min <=9) || (min > 54 )){
        show('mcinco');
    }else if((min > 9 && min <=14) || (min > 49 && min <= 54 )){
        show('mdiez');
    }else if((min > 14 && min <=19) || (min > 44 && min <= 49 )){
        show('cuarto');
    }else if((min > 19 && min <=24) || (min > 39 && min <= 44 )){
        show('veinte');
    }else if((min > 24 && min <=29) || (min > 34 && min <= 39 )){
        show('veinticinco');
    }else if((min > 29 && min <=34)){
        show('media');
    }else{
        
    }
} 
