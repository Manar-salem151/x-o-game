let title=document.getElementsByClassName("head")[0];
let turn='x';
let squares=[]

function end(n1,n2,n3){
    title.innerHTML=`${squares[1]} is winner`
    document.getElementById("item-"+n1).style.backgroundColor="black"
    document.getElementById("item-"+n2).style.backgroundColor="black"
    document.getElementById("item-"+n3).style.backgroundColor="black"
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){location.reload()},4000)
}

function winner(){
    for( let i=1; i<10; i++){
    squares[i]=document.getElementById("item-" + i).innerHTML
    }

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1]!=""){
    end(1,2,3)
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5]!=""){
        end(4,5,6)
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9]!=""){
        end(7,8,9)
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[7]!=""){
        end(1,4,7)
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5]!=""){
        end(2,5,8)
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6]!=""){
        end(3,6,9)
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5]!=""){
        end(1,5,9)
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5]!=""){
        end(3,5,7)
    }

}

function game(id){
    let element=document.getElementById(id)
    if(turn=="x" && element.innerHTML==""){

        element.innerHTML="x"
        turn="o"
        title.innerHTML="o"
    }
    else if(turn=="o" && element.innerHTML==""){

        element.innerHTML="o"
        turn="x"
        title.innerHTML="x"
    }
    winner()
}









