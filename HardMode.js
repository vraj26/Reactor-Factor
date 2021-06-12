var counter = [0];
var x = 1;
var zer = 0;
var next = 0;
var clicks = [];
var attempts = [];
var at = ""



function button1(){

    
    
    attempts[x] = x;                


    localStorage.setItem("attemptsHard", JSON.stringify(attempts));

    
    x++;
    next++;
 
    ca = document.getElementById("attemptNo")
    ca.value = attempts[attempts.length-1]

    document.getElementById("button").disabled = true;
    setTimeout(function(){document.getElementById("button").disabled = false},32000);

            if(document.getElementById("button").disabled = true){

                picture = document.getElementById("image");
  

                picture.onclick = function(){
                    x = Math.floor(Math.random() * 200) 
                    y = Math.floor(Math.random() * 550)
        
        
                    setInterval(moveIt, 1);
        
                    function moveIt() {
                        picture.style.bottom = x + "px"
                        picture.style.left = y + "px"
                    }
                    
                    zer++;
                    counter[next] = zer;
                    localStorage.setItem("counterHard", JSON.stringify(counter))

                    at = document.getElementById("clickNo")

                    at.value = counter[next]
                   
                        

            }

        }
        next = counter.length


    }

    function Data(){
        if(JSON.parse(localStorage.getItem("attemptsHard")!=null)){
            attempts = JSON.parse(localStorage.getItem("attemptsHard"));
            counter = JSON.parse(localStorage.getItem("counterHard"));
            x = attempts.length 
            
        }

        
    }

    document.addEventListener('DOMContentLoaded', () => {

        const timeLeftDisplay = document.querySelector('#time-left');
        const startBtn = document.querySelector('#button');
        timeLeft = 10;
    
        function countdown(){
    
            setInterval(function(){
    
                if(timeLeft <=0) {
    
                    clearInterval(timeLeft = 0);
                    refresh = window.location.reload();
                }
    
                timeLeftDisplay.innerHTML = timeLeft;
                timeLeft-=1;
    
            }, 1000)
        }
    
        startBtn.addEventListener('click', countdown);
        
    })













