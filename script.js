const enddate="10 february 2023 9:00 AM"
document.getElementById("end_date").innerHTML=enddate;
const inputs = document.querySelectorAll("input");
function clock(){
    const end = new Date(enddate);
    const start=new Date()
    const diff=(end-start)/1000;
    if(diff<0)return;
    inputs[0].value =Math.floor(diff/3600/24);
    //console.log(diff/3600/24)
    inputs[1].value =Math.floor(diff/3600);

    inputs[2].value =Math.floor((diff/60)%60);
    inputs[3].value =Math.floor(diff%60);
}


// initial clock
clock();

setInterval(clock,1000);