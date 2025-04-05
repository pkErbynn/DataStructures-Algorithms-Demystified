// NB: To run, class name must match file name

import java.util.*;

class Node {
    int value;
    Node left, right;

    // Constructor to initialize the node
    public Node(int value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    Node root;

    // Constructor to initialize the binary tree
    public BinaryTree(Node root) {
        this.root = root;
    }

    public List<List<Integer>> zigzagTreeTraversal() {
        List<List<Integer>> result = new ArrayList<>();

        if (root == null) {
            return result; // If the tree is empty, return empty result
        }

        Queue<Node> queue = new LinkedList<>();
        queue.offer(root);

        boolean leftToRight = true; // Tracks the direction of traversal
        
        while (!queue.isEmpty()) {

            int levelSize = queue.size();
            List<Integer> levelNodes = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                Node node = queue.poll();

                // If we are traversing left to right, add the node normally at END
                if (leftToRight) {
                    levelNodes.add(node.value);
                } else {
                    // If we are traversing right to left, add the node at the FRONT
                    levelNodes.add(0, node.value);
                }

                // Add child nodes to the queue
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
            }

            // Add the current level's result to the final list
            result.add(levelNodes);

            // Toggle the direction for the next level
            leftToRight = !leftToRight;
        }

        return result;
    }

    public static void main(String[] args) {
        // Create the binary tree
        Node root = new Node(10);
        root.left = new Node(5);
        root.right = new Node(15);
        root.left.left = new Node(2);
        root.left.right = new Node(8);
        root.right.left = new Node(12);
        root.right.right = new Node(18);

        // Initialize the BinaryTree object
        BinaryTree bt = new BinaryTree(root);

        // Get the zigzag traversal result
        List<List<Integer>> result = bt.zigzagTreeTraversal();

        // Print the result
        System.out.println("Zigzag Level Order Traversal:");
        for (List<Integer> level : result) {
            System.out.println(level);
        }
    }
}