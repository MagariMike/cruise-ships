const CruiseShip = require('../src/cruise-ships');

describe('constructor',() => { 
    it('returns an object', () => {
        expect(new CruiseShip()).toBeInstanceOf(Object);
        
    })

    it('returns passenger count', () => {
        const cruiseShip1 = new CruiseShip('Bahama Cruise', 9);
        expect(cruiseShip1.passengers).toEqual(9);
    })

    it('returns startingPoint', () => { 
        const cruiseShip2 = new CruiseShip('Grimsby Cruise', 5, 'Grimsby');
        expect(cruiseShip2.startingPoint).toEqual('Grimsby');
    })
}) 