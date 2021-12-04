$(document).ready(function(){
    $('#one').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="1"
        } else{
            document.display.c_display.value += 1;
        }
    });

});

$(document).ready(function(){
    $('#two').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="2"
        } else{
            document.display.c_display.value += 2;
        }
    });

});

$(document).ready(function(){
    $('#three').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="3"
        } else{
            document.display.c_display.value += 3;
        }
    });

});
$(document).ready(function(){
    $('#four').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="4"
        } else{
            document.display.c_display.value += 4;
        }
    });

});

$(document).ready(function(){
    $('#five').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="5"
        } else{
            document.display.c_display.value += 5;
        }
    });
});

$(document).ready(function(){
    $('#six').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="6"
        } else{
            document.display.c_display.value += 6;
        }
    });
});

$(document).ready(function(){
    $('#seven').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="7"
        } else{
            document.display.c_display.value += 7;
        }
    });
});

$(document).ready(function(){
    $('#eight').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="8"
        } else{
            document.display.c_display.value += 8;
        }
    });
});

$(document).ready(function(){
    $('#nine').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="9"
        } else{
            document.display.c_display.value += 9;
        }
    });
});

$(document).ready(function(){
    $('#gero').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="0"
        } else{
            document.display.c_display.value += 0;
        }
    });
});

$(document).ready(function(){
    $('#dot').click(function(){
        if(c_display.value ==''){
            document.display.c_display.value += "0.";
        } else if(c_display.value =="Please enter value"){
            document.display.c_display.value ="0."
        } 
        
        else{
            document.display.c_display.value += ".";
        }
    });
});


$(document).ready(function(){
    $('#add').click(function(){
        if(c_display.value ==''){
            document.display.c_display.value ="" 

        } else if(c_display.value =="Please enter value"){
            document.display.c_display.value =""
        } else{
            document.display.c_display.value += "+";
        }
    });
});

$(document).ready(function(){
    $('#clear').click(function(){
        document.display.c_display.value ='';
    });
});

$(document).ready(function(){
    $('#subs').click(function(){
        if(c_display.value =="Please enter value"){
            document.display.c_display.value ="-"
        } else{
            document.display.c_display.value += "-";
        }
    });
});

$(document).ready(function(){
    $('#multi').click(function(){
        if(c_display.value ==''){
            document.display.c_display.value ="" 
            
        } else if(c_display.value =="Please enter value"){
            document.display.c_display.value =""
        } else{
            document.display.c_display.value += "*";
        }
    });
});

$(document).ready(function(){
    $('#divide').click(function(){
        if(c_display.value ==''){
            document.display.c_display.value ="" 
            
        } else if(c_display.value =="Please enter value"){
            document.display.c_display.value =""
        } else{
            document.display.c_display.value += "/";
        }
    });
});

$(document).ready(function(){
    $('#equale').click(function(){
        if(document.display.c_display.value == ''){
            document.display.c_display.value = "Please enter value";
        } else{
            document.display.c_display.value = 
            eval(document.display.c_display.value);
        }
        
    })
});

$(document).ready(function(){
    $('#delete').click(function(){
        document.display.c_display.value =
         document.display.c_display.value.slice(0,-1) ;
    });
});
