const Ship = require('../src/ship');
const Port = require('../src/port');


describe('Ship',() => { 
    it('Can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
        
    })
    
    
    it('returns startingPort', () => { 
        const currentPort = new Port('Brighton');
        // currentPort = { name: Brighton }
        const cruiseShip2 = new Ship('Brighton');
        expect(cruiseShip2.currentPort).toEqual('Brighton');
    })

    describe('setSail', () => {
        const testPort1 = new Port('Chester')
        const cruiseShip3 = new Ship(testPort1);
        
        it('sets current port as null', () => { 
             
            cruiseShip3.setSail();
            expect(cruiseShip3.currentPort).toBeFalsy();
            
        })
        
        it('sets previous port to current port', () => { 
            expect(cruiseShip3.previousPort).toEqual(testPort1);
            // research testing for an object value - most likely .toMatch instead of .toEqual
        });
        
    })

    describe('dock', () => {
        it('Can dock at a different port' , () => {
            const dover = new Port('dover');
            const ship = new Ship('ship', Port);

            const calais = new Port('Calais');
            ship.dock(calais);
            expect(ship.currentPort).toEqual(calais)
        })
    })
}) 



