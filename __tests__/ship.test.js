const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


describe('Ship',() => { 
    it('Can be instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary);
        expect(ship).toBeInstanceOf(Object);
        
    })
    
    
    it('Has a starting port', () => { 
        
        const grimsby = new Port('Grimsby');
        const portsItinerary = new Itinerary([grimsby]);
        const cruiseShip2 = new Ship(portsItinerary);
        expect(cruiseShip2.itinerary).toEqual(portsItinerary)

       
    })

    describe('setSail', () => {
        
        
        it('Can set sail', () => { 
            
            const dover = new Port('Dover');
            const calais = new Port('Calais')
            const itinerary = new Itinerary([dover,calais])
            const ship = new Ship(itinerary); 
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
            
            
        })
        
        it('can\'t sail further than its itinerary', () => {
            const dover = new Port('Dover');
            const calais = new Port('Calais');
            const itinerary = new Itinerary([dover, calais]);
            const ship = new Ship(itinerary);
          
            ship.setSail();
            ship.dock();
          
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
          });
    })

    describe('dock', () => {
        it('Can dock at a different port' , () => {
        

            const dover = new Port('Dover');
            const calais = new Port('Calais');
            const itinerary = new Itinerary([dover,calais]);
            const ship = new Ship(itinerary);
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toEqual(calais);


        })
    })
}) 



