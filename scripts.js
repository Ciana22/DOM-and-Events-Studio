//console Write your JavaScript code here.
// Remember to pay attention to page loading!
console.log(window)
window.addEventListener("load",function() { 
    //buttons
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");

    //html elements fornour buttons
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document. getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let abortButton = document.getElementById("missionAbort");

    takeOffButton.addEventListener("click", function() {
      let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
      if(takeOffConfirmation === true) {
        //console.log({flightStatus});
        //console.log(flightStatus.innerHTML);
        flightStatus.innerHTML = "Shuttle in flight";
        //inner html is for text
        shuttleBackground.style = "background-color: blue";
        spaceShuttleHeight.innerHTML = 10000;  
      }

    })

    landButton.addEventListener("click", function() {
        alert("Shuttle is landing. Landing gear engaged"); //alert becuz there is nothing to confirm
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style = "background-color: green";
        spaceShuttleHeight.innerHTML = 0;
        })
    
      abortButton.addEventListener("click", function() {
        let missionAbortConfirmation = window.confirm("Confirm that you want to abort the mission.");   
        if(missionAbortConfirmation === true) {

        flightStatus.innerHTML = "Mission Aborted!"
        shuttleBackground.style = "background-color: red";
        spaceShuttleHeight.innerHTML = 0; 
        }
         
      })

    })

    
    


