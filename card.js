document.querySelector('#name').oninput = () => {
    document.querySelector('.previewName').innerText= document.querySelector('#name').value;
}
document.querySelector('#number').oninput = () => {
    document.querySelector('.previewNumber').innerText= document.querySelector('#number').value;
}

document.querySelector('#month').oninput = () => {
    document.querySelector('.previewDate').innerText= document.querySelector('#month').value;
}

document.querySelector('#year').oninput = () => {
    document.querySelector('.previewDate2').innerText= document.querySelector('#year').value;
}

document.querySelector('#cvc').oninput = () => {
    document.querySelector('.previewCvc').innerText= document.querySelector('#cvc').value;
}


function validationName(){
    var form = document.getElementById("information");
    var name = document.getElementById("name").value;
    var message = document.getElementById("nameError");
    var pattern = /[a-z]{2,3}$/;
    var input = document.getElementById("name");
    

    if (name.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        message.innerHTML = "";
        input.style.border = "1px solid hsl(278, 94%, 30%)";
        
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        message.innerHTML = "Wrong format, letters only";
        input.style.border = "1px solid hsl(0, 100%, 66%)";
        
        
        
        
    }
    if (name =="" || name == " " ){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        message.innerHTML = "Can't be blank";
        input.style.border = "1px solid hsl(0, 100%, 66%)";
        
        
    }}

    function validationNumber(){
        var form = document.getElementById("information");
        var number = document.getElementById("number").value;
        var message = document.getElementById("numberError");
        var pattern = /[0-9 ]{19}/;
        var input = document.getElementById("number");
        
    
        if (number.match(pattern)){
            form.classList.add("valid");
            form.classList.remove("invalid");
            message.innerHTML = "";
            input.style.border = "1px solid hsl(278, 94%, 30%)";
            
        }
        else {
            form.classList.remove("valid");
            form.classList.add("invalid");
            message.innerHTML = "Wrong format, numbers only";
            input.style.border = "1px solid hsl(0, 100%, 66%)";
            
            
        }
        if (number == "" || number == " "){
            form.classList.remove("valid");
            form.classList.remove("invalid");
            message.innerHTML = "Can't be blank";
            input.style.border = "1px solid hsl(0, 100%, 66%)";
            
        }}

        function validationMonth(){
            var form = document.getElementById("information");
            var month = document.getElementById("month").value;
            var message = document.getElementById("dateError");
            var pattern = /[0-9]{1}/;
            var input = document.getElementById("month");
            
        
            if (month.match(pattern)){
                form.classList.add("valid");
                form.classList.remove("invalid");
                message.innerHTML = "";
                input.style.border = "1px solid hsl(278, 94%, 30%)";
                
            }
            else {
                form.classList.remove("valid");
                form.classList.add("invalid");
                message.innerHTML = "Wrong format, numbers only";
                input.style.border = "1px solid hsl(0, 100%, 66%)";
                
                
                
            }
            if (month == "" || month == " "){
                form.classList.remove("valid");
                form.classList.remove("invalid");
                message.innerHTML = "Can't be blank";
                input.style.border = "1px solid hsl(0, 100%, 66%)";
                
            }}

            function validationYear(){
                var form = document.getElementById("information");
                var year = document.getElementById("year").value;
                var message = document.getElementById("dateError");
                var pattern = /[0-9]{1}/;
                var input = document.getElementById("year");
                
            
                if (year.match(pattern)){
                    form.classList.add("valid");
                    form.classList.remove("invalid");
                    message.innerHTML = "";
                    input.style.border = "1px solid hsl(278, 94%, 30%)";
                    
                }
                else {
                    form.classList.remove("valid");
                    form.classList.add("invalid");
                    message.innerHTML = "Wrong format, numbers only";
                    input.style.border = "1px solid hsl(0, 100%, 66%)";
                    
                    
                    
                }
                if (year == "" ){
                    form.classList.remove("valid");
                    form.classList.remove("invalid");
                    message.innerHTML = "Can't be blank";
                    input.style.border = "1px solid hsl(0, 100%, 66%)";
                    
                }}

                function validationCvc(){
                    var form = document.getElementById("information");
                    var cvc = document.getElementById("cvc").value;
                    var message = document.getElementById("cvcError");
                    var pattern = /[0-9]{2}/;
                    var input = document.getElementById("cvc");
                    
                
                    if (cvc.match(pattern)){
                        form.classList.add("valid");
                        form.classList.remove("invalid");
                        message.innerHTML = "";
                        input.style.border = "1px solid hsl(278, 94%, 30%)";
                        
                    }
                    else {
                        form.classList.remove("valid");
                        form.classList.add("invalid");
                        message.innerHTML = "Wrong format, numbers only";
                        input.style.border = "1px solid hsl(0, 100%, 66%)";
                        
                        
                        
                    }
                    if (cvc == "" || cvc== " " ){
                        form.classList.remove("valid");
                        form.classList.remove("invalid");
                        message.innerHTML = "Can't be blank";
                        input.style.border = "1px solid hsl(0, 100%, 66%)";
                        
                    }}

                    const page1 = document.querySelector('#information');
                    const page2 = document.querySelector('.thank');
                    const btn = document.getElementById('confirm');
                    const btn2 = document.getElementById('continue');
                    
                    
                    
                    
                    
                    page1.addEventListener("submit", (e) => {  
                               
                        page2.classList.remove('hidden'); 
                        page1.classList.add('hidden');
                        page1.style.display='none'; 
                        page2.style.display='';
                        e.preventDefault();
                          
                    })

                    btn2.addEventListener("click", () => {  
                        
                        location.reload();
                    })
                
                
                    
                    