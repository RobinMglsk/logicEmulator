const L74HC00 = require('./chips/L74HC00');
const L74HC30 = require('./chips/L74HC30');
const L74HC138 = require('./chips/L74HC138');

for(i = 0x7f80; i < 0x8000; i += 0x0f){
    const address = i.toString(2).padStart(16, '0').split('').reverse().map(c => (c === '0') ? 0 : 1);
    const cs = getChipSelect(address);
    console.log(address.reverse().join(''), ...getSelectedDevice(cs));
}

function getChipSelect(addr) {
    const l74HC00 = new L74HC00(0, 0, 0, 0, 0, 0, 0, 0);

    l74HC00.a1 = addr[15];
    l74HC00.b1 = addr[15];

    const l74HC30 = new L74HC30(
        addr[14],
        addr[13],
        addr[12],
        addr[11],
        addr[10],
        addr[9],
        addr[8],
        addr[7]
    );

    l74HC00.a2 = l74HC00.y1;
    l74HC00.b2 = l74HC30.y;

    const l74HC138 = new L74HC138(
        addr[4],
        addr[5],
        addr[6],
        l74HC30.y,
        addr[15],
        addr[7],
    );

    const cs = {
        rom: l74HC00.y1,
        ram: l74HC00.y2,
        unused: l74HC138.y0,
        display: l74HC138.y1,
        6522_1: l74HC138.y2,
        6522_2: l74HC138.y3,
        6551: l74HC138.y4,
        SD: l74HC138.y5,
        io1: l74HC138.y6,
        io2: l74HC138.y7,
    };

    return cs;
}

function getSelectedDevice(cs) {
    const devices = [];
    Object.keys(cs).forEach((key) => {
        if (cs.hasOwnProperty(key) && !cs[key]) {
            devices.push(key);
        }
    });
    return devices;
}
