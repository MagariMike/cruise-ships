const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


describe('Ship',() => { 
    
    describe('Ship', () => {
        describe('with ports and an itinerary', () => {
            let ship;
            let dover;
            let calais;
            let itinerary;

            beforeEach(() => {
                dover = new Port('Dover');
                calais = new Port('Calais');
                itinerary = new Itinerary([dover, calais]);
                ship = new Ship(itinerary);
              });
        
            it('Can be instantiated', () => {
                
                expect(ship).toBeInstanceOf(Object);
                
            })
    
            it('Has a starting port', () => { 
            
               
                expect(ship.itinerary).toEqual(itinerary)
        
               
            })
    
            it('Can set sail', () => { 
                
                
                ship.setSail();
                expect(ship.currentPort).toBeFalsy();
                expect(dover.ships).not.toContain(ship);
                
            })
    
            it('Gets added to a port on instantiation', () => {
           
                expect(dover.ships[0]).toEqual(ship);
    
            })
        
        });
      
        
      });
    


    describe('setSail', () => {
        
        
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
            expect(calais.ships).toContain(ship);

        })
    })


    
}) 



