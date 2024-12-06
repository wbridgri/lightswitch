

let light = true;
onBtn = document.getElementById('onBtn');
offBtn = document.getElementById('offBtn');




onBtn.addEventListener('click', ()=> {
    if(light === true) {
        light = false;
        console.log(light)
        document.getElementById('heading').innerHTML = 'Light is On';
        document.body.style.backgroundColor = "#fff"
        document.body.style.color = "#000"
        
    }else {
        light = true;
        document.getElementById('heading').innerHTML = 'Light is Off';
        document.body.style.backgroundColor = "#000"
        document.body.style.color = "#fff"
    

    }

})

offBtn.addEventListener('click', ()=>{
    if(light === false) {
        light = true;
        console.log(light);
        document.getElementById('heading').innerHTML = 'Light is Off';
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    
    }else {
        light = false;
        document.getElementById('heading').innerHTML = 'Light is On';
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";

    }
})
