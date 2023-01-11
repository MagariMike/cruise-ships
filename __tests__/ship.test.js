const CruiseShip = require('../src/ship');
const Port = require('../src/port');


describe('Ship',() => { 
    it('Can be instantiated', () => {
        expect(new CruiseShip()).toBeInstanceOf(Object);
        
    })
    
    
    it('returns startingPort', () => { 
        const cruiseShip2 = new CruiseShip('Grimsby Cruise', Port);
        expect(cruiseShip2.currentPort).toBe(Port);
    })

    describe('setSail', () => {
        it('', () => { 
            let cruiseShip3 = new CruiseShip('Dave', Port); 
            cruiseShip3.setSail();
            expect(cruiseShip3.setSail()).toBeFalsy();
        })
    })

    describe('dock', () => {
        it('Can dock at a different port' , () => {
            const dover = new Port('dover');
            const ship = new CruiseShip('ship', Port);

            const calais = new Port('Calais');
            ship.dock(calais);
            expect(ship.currentPort).toEqual(calais)
        })
    })
}) 



