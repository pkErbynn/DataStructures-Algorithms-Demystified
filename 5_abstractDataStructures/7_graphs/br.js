function buildHierarchy(pairs) {
    const hierarchy = {};
    pairs.forEach(pair => {
        const [manager, employee] = pair.split('/');
        if (!hierarchy[manager]) {
            hierarchy[manager] = [];
        }
        hierarchy[manager].push(employee);
    });
    return hierarchy;
}

function findLevels(hierarchy, start, end) {
    const queue = [[start, 0]]; // Store pairs of [current node, current depth]
    const visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        const [current, depth] = queue.shift();
        if (current === end) {
            return depth;
        }
        const neighbors = hierarchy[current] || [];
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, depth + 1]);
            }
        });
    }
    return -1; // Return -1 if no path is found
}

function readInputAndProcess(input) {
    const inputLines = input.trim().split('\n');
    const comparisonPair = inputLines[0];
    const pairs = inputLines.slice(1);

    const hierarchy = buildHierarchy(pairs);
    const [start, end] = comparisonPair.split('/');

    const levels = findLevels(hierarchy, start, end);
    console.log(levels >= 0 ? levels : 0); // Print 0 if no connection exists in either direction
}

// Example usage with hardcoded input:
const input = `Susan/Amy\nSusan/John\nJohn/Amy`;
readInputAndProcess(input);
