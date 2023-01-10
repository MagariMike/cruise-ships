const CruiseShip = require('../src/ship');
const Port = require('../src/port');

describe('Port', () => {
    it('Can be instantiated', () => { 
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('returns name', () => { 
        const port1 = new Port('Grimsby');
        expect(port1.name).toEqual('Grimsby');
    })
})