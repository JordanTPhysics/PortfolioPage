// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


class Stack {
    constructor(){
        this.top = -1;
        this.items = {};
    
    }

    get peek() {
        return this.items[this.top];

    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }
}


describe('My Stack', ()=>{


    let stack;

    beforeEach(() => {
        stack = new Stack();
    });



    it('is created empty', () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('hello world')
        expect(stack.top).toBe(0);
        expect(stack.items).toBe('hello world')
    })




})