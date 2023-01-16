class Ship { 
    constructor(itinerary){ 
        this.itinerary = itinerary
        this.currentPort = itinerary.ports[0]
        this.previousPort = null
        
    }
    setSail() {
       
        this.previousPort = this.currentPort; 
        this.currentPort = null

    };
    
    
    dock() { 
        this.currentPort = itinerary.findIndex(this.previousPort)+1;
        this.currentPort = 
     } 
   
       
}

module.exports = Ship; 