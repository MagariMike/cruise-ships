const CruiseShip = require('../src/ship');
const port = require('../src/port');
const Port = require('../src/port');

describe('Ship',() => { 
    it('Can be instantiated', () => {
        expect(new CruiseShip()).toBeInstanceOf(Object);
        
    })
    
    
    it('returns startingPort', () => { 
        const cruiseShip2 = new CruiseShip('Grimsby Cruise', port);
        expect(cruiseShip2.currentPort).toBe(port);
    })

    describe('setSail', () => {
        it('', () => { 
            let cruiseShip3 = new CruiseShip('Dave', port); 
            cruiseShip3.setSail();
            expect(cruiseShip3.setSail()).toBeFalsy();
        })
    })

    describe('dock', () => {
        it('Can dock at a different port' , () => {
            const dover = new Port('dover');
            const ship = new CruiseShip('ship');

            const calais = new Port('Calais');
            CruiseShip.dock(calais);
            expect(ship.currentPort).toEqual(calais)
        })
    })
}) 



