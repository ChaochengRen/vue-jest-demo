import MathUtil from './../../../js/util/MathUtil'

const mathUtil = new MathUtil();
const testData = [[1, 2, [3, 2]], [5, 3.0, [8, 15]], [2.5, 1.1, [3.6, 2.75]]];


describe('MathUtil', () => {
    describe.each(testData)('MathUtil.add(%d, %d)', (a, b, expected) => {
        test('result should be' + expected, () => {
            expect(mathUtil.add(a, b)).toBe(expected[0]);
        });
    });

    describe.each(testData)('MathUtil.multiply(%d, %d)', (a, b, expected) => {
        test('result should be' + expected, () => {
            expect(mathUtil.multiply(a, b)).toBe(expected[1]);
        });
    });
})