
    let name = document.getElementById('nameInput');
	let submitButton =  document.getElementById('btn');
	let displayText = document.getElementById('outputText');
	let time = new Date();
	let getTime = time.toLocaleTimeString();
	

   submitButton.addEventListener('click',function(){
		const humanName = name.value;
		  if(  humanName !== ''){
            const cogratsMessage = ` Good evining ${humanName}. It is exactly ${getTime}. Congratulations! You made it..!`;
		    displayText.innerText = cogratsMessage;
		
		  } else{
			const errorMessage = `Error! Please enter your  name...`;
			displayText.innerHTML = errorMessage;
		
		}
		
			
		
    });
