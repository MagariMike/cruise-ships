const CruiseShip = require('../src/cruise-ships');
const Port = require('../src/port');

describe('Ship',() => { 
    it('returns an object', () => {
        expect(new CruiseShip()).toBeInstanceOf(Object);
        
    })
    // Passengers not on the track 
    it('returns passenger count', () => {
        const cruiseShip1 = new CruiseShip('Bahama Cruise', 9);
        expect(cruiseShip1.passengers).toEqual(9);
    })

    it('returns startingPort', () => { 
        const cruiseShip2 = new CruiseShip('Grimsby Cruise', 5, 'Grimsby');
        expect(cruiseShip2.currentPort).toBe('Grimsby');
    })

    describe('setSail', () => {
        it('', () => { 
            let cruiseShip3 = new CruiseShip('Dave', 20, ''); 
            cruiseShip3.setSail();
            // expect(cruiseShip3.setSail()).toEqaul(true) - With Wyconbe in the above 3rd field 
            expect(cruiseShip3.setSail()).toBeFalsy();
        })
    })
}) 



describe('Port', () => {
    it('returns an object', () => { 
        expect(new Port).toBeInstanceOf(Object);
    })

    it('returns name', () => { 
        const port1 = new Port('Grimsby');
        expect(port1.name).toEqual('Grimsby');
    })
})