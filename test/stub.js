import test from 'ava';

test.todo('will think about writing this later');

test('This had better pass', t => {
    t.true(true, true);
});

test('This too had better pass', t => {
    let obj = {
        cat: 'meow'
    };

    t.deepEqual(obj, { cat: 'meow' });
});
