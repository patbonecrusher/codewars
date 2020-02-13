/*
This is the first part of this kata series. Second part is here.

We want to create a simple interpreter of assembler which will support the following instructions:

mov x y - copies y (either a constant value or the content of a register) into register x
inc x - increases the content of the register x by one
dec x - decreases the content of the register x by one
jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward), but only if x (a constant or a register) is not zero
Register names are alphabetical (letters only). Constants are always integers (positive or negative).

Note: the jnz instruction moves relative to itself. For example, an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.

The function will take an input list with the sequence of the program instructions and will return a dictionary with the contents of the registers.

Also, every inc/dec/jnz on a register will always be followed by a mov on the register first, so you don't need to worry about uninitialized registers.

*/


// My solution
function simple_assembler(program) {
    /* return a dictionary with the registers */
    let regs = {};
    let pc = 0

    while (pc < program.length) {
        let instruction = program[pc].split(' ');
        let cmd = instruction[0];
        let reg = instruction[1];
        let val = isNaN(instruction[2]) ? regs[instruction[2]] : parseInt(instruction[2], 10);
        switch (cmd) {
            case "mov": regs[reg] = val; pc++; break;
            case "inc": regs[reg]++; pc++; break;
            case "dec": regs[reg]--; pc++; break;
            case "jnz":
                let v = isNaN(reg) ? regs[reg] : parseInt(instruction[2], 10)
                !v ? pc++ : pc += val; break;
            default: break;
        }
    }
    return regs
}


console.log(simple_assembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']))
console.log(simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a']))

function simple_assembler_clever(program) {
    var reg = {};
    var regOrValue = (n) => n.match(/[a-z]/) ? reg[n] : +n;

    var ops = {
        'mov': (a, b) => { reg[a] = regOrValue(b); return 1; },
        'inc': (a, b) => { reg[a]++; return 1; },
        'dec': (a, b) => { reg[a]--; return 1; },
        'jnz': (a, b) => { return regOrValue(a) != 0 ? +b : 1; }
    };

    var ip = 0;
    while (ip < program.length) {
        var [op, a, b] = program[ip].split(' ');
        ip += ops[op](a, b);
    }

    return reg;
}

