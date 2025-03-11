// EFSM

class GasPump {
    static SIDLE = 'IDLE';
    static S0 = 'S0';
    static S1 = 'S1';
    static S2 = 'S2';
    static S3 = 'S3';
    static S4 = 'S4';

    constructor() {
        this.state = GasPump.SIDLE;
        this.w;
        this.cashValue = 0;
        this.G = 0;
        this.total = 0;
        this.price = 0;
    }

    activate(a) {
        if ( (a > 0) && (this.state == GasPump.SIDLE)) {
            this.price = a;
            this.state = GasPump.S0;
            process.stdout.write('T1 -> ')
        }
    }

    start() {
        if (this.state === GasPump.S0) {
            this.state = GasPump.S1;
            process.stdout.write('T2 -> ')
        }
    }

    debit() {
        if (this.state === GasPump.S1) {
            this.state = GasPump.S2;
            process.stdout.write('T3 -> ')
        }
    }

    approved() {
        if (this.state === GasPump.S2) {
            this.w = 1;
            this.state = GasPump.S3;
            process.stdout.write('T6 -> ')
        }
    }

    cash(c) {
        if (c > 0 && this.state === GasPump.S1) {
            this.cashValue = c;
            this.w = 0;
            this.state = GasPump.S3; 
            process.stdout.write('T5 -> ')
        }
    }

    startPump() {
        if (this.state === GasPump.S3) {
            this.G = 0;
            this.total = 0;
            this.state = GasPump.S4;
            process.stdout.write('T10 -> ')
        }
    }

    pump() {
        if (this.w == 1 && this.state === GasPump.S4) {
            this.G = this.G + 1;
            this.total = 1.1 * this.price * this.G;
            this.state = GasPump.S4;
            process.stdout.write('T12 -> ')
        }

        if (this.w == 0 && (this.cashValue > this.price * (this.G + 1)) && this.state === GasPump.S4) {
            this.G = this.G + 1;
            this.total = this.price * this.G;
            this.state = GasPump.S4;
            process.stdout.write('T8 -> ')
        }

        if (this.w == 0 && (this.cashValue < this.price * (this.G + 1)) && this.state === GasPump.S4) {
            this.state = GasPump.S0;
            process.stdout.write('T9 -> ')
        }
    }

    stop() {
        if (this.state === GasPump.S4) {
            this.state = GasPump.S0
            process.stdout.write('T11 -> ')
        }
    }

    cancel() {
        if (this.state == GasPump.S3) {
            this.state = GasPump.S0;
            process.stdout.write('T7 -> ')
        }
    }

    reject() {
        if (this.state === GasPump.S2) {
            this.state = GasPump.S0;
            process.stdout.write('T4 -> ')
        }
    }
}

const gasPump = new GasPump();

// // test 6
// // 1. Activate the pump with a price per gallon (e.g., $5 per gallon)
// gasPump.activate(5);  // Outputs: T1 ->

// // 2. Start the pump
// gasPump.start();  // Outputs: T2 ->

// // 3. Pay with cash (e.g., $12, which is enough for more than 2 gallons)
// gasPump.cash(12);  // Outputs: T5 ->

// // 4. Start the pumping process (cash mode)
// gasPump.startPump();  // Outputs: T10 ->

// // 5. Pump the first gallon (this will produce T8 since the cash is sufficient)
// gasPump.pump();  // Outputs: T8 ->

// // 6. Pump again, but this time the remaining cash ($2) is insufficient for another gallon ($5 per gallon)
// gasPump.pump();  // Outputs: T9 ->



// test 6
gasPump.activate(100);
gasPump.start();
gasPump.cash(2);
gasPump.startPump();
gasPump.pump();
gasPump.start();

//T1 -> T2 -> T3 -> T6 -> T10 -> T12 -> T11 -> 
//T1 -> T2 -> T5 -> T10 -> T8 -> T9 -> 
//T1 -> T2 -> T3 -> T4 -> T2 -> T3 -> T6 -> T7 -> T2 -> T3 -> T6 -> T10 -> T12 -> T12 -> T11 -> 
//T1 -> T2 -> T3 -> T6 -> T10 -> T11 -> T2 -> T5 -> T7 -> T2 -> T3 -> T6 -> T10 -> T12 -> 
//t5: T1 -> T2 -> T5 -> T10 -> T8 -> T8 -> T11 -> 
//t6: T1 -> T2 -> T5 -> T10 -> T9 -> T2 -> 


// test 5
// gasPump.activate(2);
// gasPump.start();
// gasPump.cash(100);
// gasPump.startPump();
// gasPump.pump();
// gasPump.pump();
// gasPump.stop();

//T1 -> T2 -> T3 -> T6 -> T10 -> T12 -> T11 -> 
//T1 -> T2 -> T5 -> T10 -> T8 -> T9 -> 
//T1 -> T2 -> T3 -> T4 -> T2 -> T3 -> T6 -> T7 -> T2 -> T3 -> T6 -> T10 -> T12 -> T12 -> T11 -> 
//T1 -> T2 -> T3 -> T6 -> T10 -> T11 -> T2 -> T5 -> T7 -> T2 -> T3 -> T6 -> T10 -> T12 -> 
//t5: T1 -> T2 -> T5 -> T10 -> T8 -> T8 -> T11 -> 


// test 4
// gasPump.activate(5);
// gasPump.start();
// gasPump.debit();
// gasPump.approved();
// gasPump.startPump();
// gasPump.stop();
// gasPump.start();
// gasPump.cash(5);
// gasPump.cancel();
// gasPump.start();
// gasPump.debit();
// gasPump.approved();
// gasPump.startPump();
// gasPump.pump();

//T1 -> T2 -> T3 -> T6 -> T10 -> T12 -> T11 -> 
//T1 -> T2 -> T5 -> T10 -> T8 -> T9 -> 
//T1 -> T2 -> T3 -> T4 -> T2 -> T3 -> T6 -> T7 -> T2 -> T3 -> T6 -> T10 -> T12 -> T12 -> T11 -> 
//T1 -> T2 -> T3 -> T6 -> T10 -> T11 -> T2 -> T5 -> T7 -> T2 -> T3 -> T6 -> T10 -> T12 -> 


// test 3
// gasPump.activate(5);
// gasPump.start();
// gasPump.debit();
// gasPump.reject();
// gasPump.start();
// gasPump.debit();
// gasPump.approved();
// gasPump.cancel();
// gasPump.start();
// gasPump.debit();
// gasPump.approved();
// gasPump.startPump();
// gasPump.pump();
// gasPump.pump();
// gasPump.stop();



// test 2
// gasPump.activate(5);
// gasPump.start();
// gasPump.cash(6);
// gasPump.startPump();
// gasPump.pump();
// gasPump.pump();

//T1 -> T2 -> T3 -> T6 -> T10 -> T12 -> T11 -> 
//T1 -> T2 -> T5 -> T10 -> T8 -> T9 -> 


// test 1
// gasPump.activate(15);
// gasPump.start();
// gasPump.debit();
// gasPump.approved();
// gasPump.startPump();
// gasPump.pump();
// gasPump.stop();

// test sample 1
// gasPump.activate(5);
// gasPump.start();
// gasPump.debit();
// gasPump.approved();
// gasPump.startPump();
// gasPump.pump();
// gasPump.stop();






// type data flow
// function F(a, b, c) { let type; let i; let t;  process.stdout.write(`Inputs(${a}, ${b}, ${c}) => ` ); process.stdout.write('type ASSIGNED @1 ->')
//     type = 0; process.stdout.write('type RE-ASSIGNED @2 ->')
//     i = 0;
//     while (i <= 1) {     
//         if (a >= c) {   
//             t = a; 
//             a = c;
//             c = t;  }   
//         if (b >= c) {   
//             t = b;
//             b = c;
//             c = t;  }   
//         if (a + b <= c) {   
//             type = -1; process.stdout.write('type RE-ASSIGNED @14 ->')  }   
//         process.stdout.write('type used @15 ->'); if (type >= 0) {    
//             if (a === c || b === c) { 
//                 type = type + 1; process.stdout.write('type used + RE-ASSIGNED @17 ->')    }   
//             process.stdout.write('type used @18 ->'); if (type === 0 && a === b) {    
//                 type = type + 1; process.stdout.write('type used + RE-ASSIGNED @19 ->');    }   }   
//         i = i + 1;  }   
//         process.stdout.write('type used @21 ->'); return type;    }

// F(1, 1, 1)
// F(5, 3, 5)
// F(3, 5, 3)
// F(1, 1, 3)
// F(5, 6, 3)
// F(5, 5, 5)
// F(5, 15, 5)
// F(5, 5, 0)
// F(0, 3, 2)
// F(13, 0, 2)

// "A" DATA-FLOW
// function F(a, b, c) { let type; let i; let t;  process.stdout.write(`Inputs(${a}, ${b}, ${c}) => ` ); process.stdout.write('a ASSIGNED @1 ->')
//     type = 0; 
//     i = 0;
//     while (i <= 1) {     
//         process.stdout.write('a used @5 ->'); if (a >= c) {   
//             t = a;  process.stdout.write('a used @6 ->')
//             a = c;  process.stdout.write('a re-ASSIGNED @7 ->')
//             c = t;  }   
//         if (b >= c) {   
//             t = b;
//             b = c;
//             c = t;  }   
//         process.stdout.write('a used @13 ->'); if (a + b <= c) {   
//             type = -1;  }   
//         if (type >= 0) {    
//             process.stdout.write('a used @16 ->'); if (a === c || b === c) { 
//                 type = type + 1;    }   
//             process.stdout.write('a used @18 ->'); if (type === 0 && a === b) {    
//                 type = type + 1;    }   }   
//         i = i + 1;  }   
//     return type;    }

// F(1, 1, 1)


// VERIFY PREVIOUS
/*
function F(a, b, c) { let type; let i; let t;
    type = 0; 
    i = 0; // let status4 = false; let status5 = false; let status9 = false; let status13 = false; let status15 = false; let status16 = false; let status18 = false;
    while (i <= 1) {     process.stdout.write('4T -> ')
        if (a >= c) {   process.stdout.write('5T -> ')
            t = a;
            a = c;
            c = t;  }   process.stdout.write('5F -> ')
        if (b >= c) {   process.stdout.write('9T -> ')
            t = b;
            b = c;
            c = t;  }   process.stdout.write('9F -> ')
        if (a + b <= c) {   process.stdout.write('13T -> ')
            type = -1;  }   process.stdout.write('13F -> ')
        if (type >= 0) {    process.stdout.write('15T -> ')
            if ( (a === c) || (b === c) ) {   process.stdout.write('16T -> ')
                if (((a === c) == true) && ((b === c) == true))
                {
                    process.stdout.write('(T T) -> ')
                }
                if (((a === c) == true) && ((b === c) == false))
                {
                    process.stdout.write('(T F) -> ')
                }
                if (((a === c) == false) && ((b === c) == true))
                {
                    process.stdout.write('(F T) -> ')
                }
                if (((a === c) == false) && ((b === c) == false))
                {
                    process.stdout.write('(F F) -> ')
                }
                type = type + 1;    }   process.stdout.write('16F -> ')
            if ( (type === 0) && (a === b) ) {    process.stdout.write('18T -> ')
                if (((type === 0) == true) && ((a === b) == true))
                {
                    process.stdout.write('Type (T T) -> ')
                }
                if (((type === 0) == true) && ((a === b) == false))
                {
                    process.stdout.write('Type (T F) -> ')
                }
                if (((type === 0) == false) && ((a === b) == true))
                {
                    process.stdout.write('Type (F T) -> ')
                }
                if (((type === 0) == false) && ((a === b) == false))
                {
                    process.stdout.write('Type (F F) -> ')
                }
                type = type + 1;    } process.stdout.write('18F -> ')  }   process.stdout.write('15F -> ')
        i = i + 1;  }   process.stdout.write('4F -> ')
    return type;    }

F(0, 0, 10)

*/


