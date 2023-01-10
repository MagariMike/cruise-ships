const CruiseShip = require('../src/ship');
//const Port = require('../src/port');

describe('Ship',() => { 
    it('Can be instantiated', () => {
        expect(new CruiseShip()).toBeInstanceOf(Object);
        
    })
    
    
    it('returns startingPort', () => { 
        const cruiseShip2 = new CruiseShip('Grimsby Cruise', 'Grimsby');
        expect(cruiseShip2.startingPort).toBe('Grimsby');
    })

    describe('setSail', () => {
        it('', () => { 
            let cruiseShip3 = new CruiseShip('Dave', ''); 
            cruiseShip3.setSail();
            // expect(cruiseShip3.setSail()).toEqaul(true) - With Wyconbe in the above 3rd field 
            expect(cruiseShip3.setSail()).toBeFalsy();
        })
    })
}) 



/*describe('Port', () => {
    xit('returns an object', () => { 
        expect(new Port).toBeInstanceOf(Object);
    })

    xit('returns name', () => { 
        const port1 = new Port('Grimsby');
        expect(port1.name).toEqual('Grimsby');
    })
})*/