const CruiseShip = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');
const Ship = require('../src/ship');

describe('Port', () => {
    it('Can be instantiated', () => { 
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('returns name', () => { 
        const port1 = new Port('Grimsby');
        expect(port1.name).toEqual('Grimsby');
    })

    it('Can add a ship', () => {
        const port = new Port('dover', []);
        const ship = {};
        port.addShip(ship);
        expect(port.ships).toEqual([ship])
    
    })
})