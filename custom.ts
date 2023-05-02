
//% block="Roman Numerals"
//% color=#900603
//% icon="\uf00d"
namespace roman {
    enum Numeral {
        I = 1,
        V = 5,
        X = 10,
        L = 50,
        C = 100,
        D = 500,
        M = 1000,
    }

    //% block="I" weight=99
    //% blockId="romanNumeralI"
    export function rnI(): number {
        return Numeral.I;
    }

    //% block="V" weight=95
    //% blockId="romanNumeralV"
    export function rnV(): number {
        return Numeral.V;
    }

    //% block="X" weight=90
    //% blockId="romanNumeralX"
    export function rnX(): number {
        return Numeral.X;
    }

    //% block="L" weight=50
    //% blockId="romanNumeralL"
    export function rnL(): number {
        return Numeral.L;
    }

    //% block="C" weight=40
    //% blockId="romanNumeralC"
    export function rnC(): number {
        return Numeral.C;
    }

    //% block="D" weight=30
    //% blockId="romanNumeralD"
    export function rnD(): number {
        return Numeral.D;
    }

    //% block="M" weight=20
    //% blockId="romanNumeralM"
    export function rnM(): number {
        return Numeral.M;
    }

    // desc
    //% weight=0
    //% blockId="romanNumeralConcat"
    //% inlineInputMode="inline"
    //% block="$a|$b||$c|$d|$e|$f|$g|$h|$i|$j"
    //% a.shadow="romanNumeralI"
    //% b.shadow="romanNumeralI"
    //% c.shadow="romanNumeralI"
    //% d.shadow="romanNumeralI"
    //% e.shadow="romanNumeralI"
    //% f.shadow="romanNumeralI"
    //% g.shadow="romanNumeralI"
    //% h.shadow="romanNumeralI"
    //% i.shadow="romanNumeralI"
    //% j.shadow="romanNumeralI"
    export function build(
        a: number,
        b?: number,
        c?: number,
        d?: number,
        e?: number,
        f?: number,
        g?: number,
        h?: number,
        i?: number,
        j?: number
    ) {
        const params = [a, b, c, d, e, f, g, h, i, j]
            .filter(el => {
                switch (el) {
                    case 1:
                    case 5:
                    case 10:
                    case 50:
                    case 100:
                    case 500:
                    case 1000:
                        return true;
                    default: return false;
                }
            });

        let acc = a;
        // don't bother error checking for this dumb joke
        for (let index = 1; index < params.length; index++) {
            const pre = params[index - 1];
            const curr = params[index]; 
            if (curr <= pre) {
                acc += curr;
            } else {
                acc += curr - pre * 2;
            }
        }
        return acc;
    }
}