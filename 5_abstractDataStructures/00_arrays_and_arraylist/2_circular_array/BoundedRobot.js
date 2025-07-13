/*

Problem Statement:

You are given a string instructions made up of the characters:
	•	'G': go straight 1 unit,
	•	'L': turn 90 degrees to the left (anti-clockwise),
	•	'R': turn 90 degrees to the right (clockwise).

A robot starts at position (0, 0) on an infinite plane, facing north (i.e., toward the positive y-axis). The robot will follow the sequence of instructions repeatedly forever.


Task:

Return true if there exists a circle (i.e., the robot stays within a bounded path) such that the robot never leaves it, regardless of how many times it repeats the instructions.

Otherwise, return false.


Example:
Input: instructions = "GGLLGG"
Output: true

Explanation:
Step 1: G → (0, 1), facing North  
Step 2: G → (0, 2), facing North  
Step 3: L → (0, 2), facing West  
Step 4: L → (0, 2), facing South  
Step 5: G → (0, 1), facing South  
Step 6: G → (0, 0), facing South  

Back at the origin, now facing South.
Repeating the instructions, the robot enters a cycle.


Example 2:
Input: instructions = "GG"
Output: false

Explanation:
Step 1: G → (0, 1), facing North  
Step 2: G → (0, 2), facing North  

Still moving straight, facing North.
It will never return or loop — unbounded.


Example 3:
Input: instructions = "GL"
Output: true

Explanation:
Step 1: G → (0, 1), facing North  
Step 2: L → (0, 1), facing West  

Repeating:  
G → (-1, 1), facing West  
L → (-1, 1), facing South  
G → (-1, 0), facing South  
L → (-1, 0), facing East  
G → (0, 0), facing East  
L → (0, 0), facing North  

Eventually returns to the origin and enters a loop.

*/



var isRobotBounded = function(instructions) {
    // Directions correspond to North, East, South, and West respectively
    // Each direction is represented by a movement delta in (x, y) coordinates.
    const directions = [
        [0, 1],  // North → move up along the y-axis
        [1, 0],  // East  → move right along the x-axis
        [0, -1], // South → move down along the y-axis
        [-1, 0]  // West  → move left along the x-axis
    ];

    let x = 0, y = 0;  // Start at the origin (0, 0)
    let dir = 0;       // Start facing North (index 0 of the directions array)

    for (let inst of instructions) {
        // Loop through each instruction in the string

        if (inst === 'G') {
            // 'G' means "Go forward 1 unit" in the current direction.
            // Use the current direction to determine how to move.

            x += directions[dir][0]; // Add the x-component of the current direction
            y += directions[dir][1]; // Add the y-component of the current direction

        } else if (inst === 'L') {
            // 'L' means "Turn left (90 degrees anti-clockwise)"
            // Turning left changes the direction counter-clockwise.
            // The directions are indexed as: 0=N, 1=E, 2=S, 3=W
            // Turning left means we go one index back: 0 → 3, 3 → 2, 2 → 1, 1 → 0

            // To handle wrapping (e.g. from 0 back to 3), we do:
            dir = (dir + 3) % 4;

            /**
             * Why (dir + 3) % 4?
             * - dir - 1 would give us the previous direction.
             * - But we can't do negative indices in JS, so instead of (dir - 1),
             *   we add 3 and mod 4. For example:
             *      dir = 0 (North) → (0 + 3) % 4 = 3 → West
             *      dir = 1 (East)  → (1 + 3) % 4 = 0 → North
             */

        } else if (inst === 'R') {
            // 'R' means "Turn right (90 degrees clockwise)"
            // Turning right means moving to the next direction in the array:
            // 0 → 1, 1 → 2, 2 → 3, 3 → 0

            dir = (dir + 1) % 4;

            /**
             * (dir + 1) % 4 wraps around the direction array.
             * Example:
             *      dir = 3 (West) → (3 + 1) % 4 = 0 → North
             */
        }
    }

    // After finishing all instructions once, check:
    // 1. If we’re back at the origin → it's a closed loop → return true.
    // 2. If we’re NOT facing north → means the robot is now turning;
    //    repeating the instructions will eventually make it return to origin → return true.

    return (x === 0 && y === 0) || dir !== 0;

    /**
     * Explanation:
     * - If robot returns to (0,0), it's definitely bounded in a circle.
     * - If it doesn't face north anymore, the direction change means 
     *   it won't move in a straight line anymore after repeating the sequence;
     *   this implies it will eventually loop → return true.
     * - If robot is not at (0,0) and still facing north, it will keep going away → return false.
     */
};