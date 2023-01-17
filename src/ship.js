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

        const nextPort = itinerary.ports.indexOf(this.previousPort);

        this.currentPort = itinerary.ports[nextPort +1];
        
     };
   
       
}

module.exports = Ship; 