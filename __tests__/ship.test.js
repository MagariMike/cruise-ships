const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


describe('Ship',() => { 
    it('Can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
        
    })
    
    
    it('Has a starting port', () => { 
        
        const grimsby = new Port('Grimsby');
        const portsItinerary = new Itinerary([grimsby]);
        const cruiseShip2 = new Ship(portsItinerary);
        expect(cruiseShip2.currentPort).toEqual(portsItinerary)

       
    })

    describe('setSail', () => {
        
        
        it('Can set sail', () => { 
            
            const dover = new Port('Dover');
            const itinerary = new Itinerary([dover])
            const ship = new Ship(itinerary); 
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
            
        })
        
        
    })

    describe('dock', () => {
        it('Can dock at a different port' , () => {
        

            const dover = new Port('Dover');
            const calais = new Port('Calais');
            const itinerary = new Itinerary([dover,calais]);
            const ship = new Ship(Itinerary);
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toBe(calais);


        })
    })
}) 



