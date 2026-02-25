/*

Write a function which does zero-padding.

- It takes a `number` and a target `length`.
- Converts the number to text (`str`).
- While the text is shorter than `length`, it adds `"0"` to the front.
- Returns the padded string

So it makes values like months/days/hours always have fixed width (e.g., `3` → `"03"`).

Simple examples

- Input: `pad(7, 2)` → Output: `"07"`
- Input: `pad(42, 5)` → Output: `"00042"`
- Input: `pad(1234, 2)` → Output: `"1234"` (already long enough, so unchanged

*/

function pad(number, length) {
    let str = "" + number;
    while (str.length < length) {
            str = "0" + str;
        }
    return str;
}

// Alternatively, can also use list/array to push the 0 in front then join them all