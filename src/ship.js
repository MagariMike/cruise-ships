class Ship { 
    constructor(currentPort, previousPort){ 
        this.currentPort = currentPort
        this.previousPort = null
        
    }
    setSail() {
       
        this.previousPort = this.currentPort; 
        this.currentPort = null

    };
    
    
    dock(port) { 
        this.currentPort = port;
        
     } 
   
       
}

module.exports = Ship; 