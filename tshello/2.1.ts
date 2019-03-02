(function() { 
    var button: Element = document.querySelector('.button'); 
    var input: HTMLInputElement = <HTMLInputElement>document.querySelector('.form-control'); 
    var messenger: HTMLElement = document.querySelector('.messenger') as HTMLElement;  
    
    button.addEventListener('click', handleButtonClick('Hello', 'Please enter your name')); 
    
    function handleButtonClick(prefix: string, noNameErrorMsg: string) {
        return function(e: MouseEvent) {
            if(input.value.length === 0) {     
                alert(noNameErrorMsg);     
                return;   
            }  
            
            // Update messanger    
            messenger.innerHTML = 'Hello, ' + input.value; 
        }   
    }
})();
