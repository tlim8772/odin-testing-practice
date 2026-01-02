export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function reverse(str) {
    return str.split('').reverse().join('');
}

export class Calculator {
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    divide(x, y) {
        return x / y;
    }

    multiply(x, y) {
        return x * y;
    }
}

export function caeserCipher(str, l) {
    function shift(c, l) {
        let base = null, d = 0;
        if (/^[A-Z]$/.test(c)) {
            base = 'A';
        } else if (/^[a-z]$/.test(c)) {
            base = 'a';
        }
        d = (c.charCodeAt(0) - base.charCodeAt(0) + l) % 26;
        return String.fromCharCode(base.charCodeAt(0) + d);
    }

    function isAlphabet(c) {
        return /^[A-Za-z]$/.test(c);
    }

    return str.split('').map(c => (isAlphabet(c)) ? shift(c, l) : c).join('');
}

export function analyzeArray(arr) {
    return {
        average: arr.reduce((acc, v) => acc + v, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
}