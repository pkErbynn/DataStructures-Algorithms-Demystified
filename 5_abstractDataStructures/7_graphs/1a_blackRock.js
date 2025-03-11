class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addEdgeConnection(employeePair)
    {
        const [employee1, employee2] = employeePair.split('/');

        if(!this.adjacencyList[employee1]){
            this.adjacencyList[employee1] = [];
        }
        this.adjacencyList[employee1].push(employee2);

        // if(!this.adjacencyList[employee2]){
        //     this.adjacencyList[employee2] = [];
        // }
        // this.adjacencyList[employee2].push(employee1);


        console.log(this.adjacencyList)
    }

    // depthTraversalFromEmp(employeeNode){
    //     let result = []
    //     let stack = []
    //     let visitedEmployeeNodeTracker = {} // true/false

    //     stack.push(employeeNode);

    //     while(stack.length > 0){
    //         let currentNode = stack.pop();

    //         if(visitedEmployeeNodeTracker[currentNode] != true)
    //         {
    //             result.push(currentNode);
    //             visitedEmployeeNodeTracker[currentNode] = true;

    //             if(!this.adjacencyList[currentNode]) return;

    //             let nearingSubEmp = this.adjacencyList[currentNode];
    //             console.log(nearingSubEmp);
                
    //             for(let sub of nearingSubEmp){
    //                 if(visitedEmployeeNodeTracker[sub] != true){
    //                     stack.push(sub);
    //                 }
    //             }
    //         }
    //     }

    //     console.log(result.length);
        
    // }


    // depth-first search, means, children nodes has priority first, thus use stack 
    lineManagerLength(employee1, employee2){
        let stack = []
        let visitedEmployeeNodeTracker = {} // true/false
        let levelCounter = 0;

        stack.push(employee1);

        while(stack.length > 0){
            let currentEmployeeNode = stack.pop();

            visitedEmployeeNodeTracker[currentEmployeeNode] = true;

            let subordinates = this.adjacencyList[currentEmployeeNode] || [];
            console.log(subordinates);
            
            for(let sub of subordinates){

                if(sub === employee2) 
                {
                    console.log("managerial length:", levelCounter);
                    return levelCounter;
                }

                if(visitedEmployeeNodeTracker[sub] != true){
                    stack.push(sub);
                }
            }

            levelCounter += 1;
        }

        return 0;
    }
}


let companyNetwork = new Graph();
companyNetwork.addEdgeConnection("Susan/John")
companyNetwork.addEdgeConnection("John/Army")
companyNetwork.addEdgeConnection("Army/Erb")
companyNetwork.lineManagerLength("Susan", "Erb")

/*

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addEdgeConnection(employeePair)
    {
        const [employee1, employee2] = employeePair.split('/');

        if(!this.adjacencyList[employee1]){
            this.adjacencyList[employee1] = [];
        }
        this.adjacencyList[employee1].push(employee2);


        console.log(this.adjacencyList)
    }


    // depth-first search, means, children nodes has priority first, thus use stack 
    lineManagerLength(employee1, employee2){
        let queue = []
        let visitedEmployeeNodeTracker = {} // true/false
        let levelCounter = 0;

        queue.push(employee1);

        while(queue.length > 0){
            let currentEmployeeNode = queue.shift();

            if(currentEmployeeNode === employee2) 
            {
                console.log("managerial length:", levelCounter);
                return levelCounter++;
            }

            visitedEmployeeNodeTracker[currentEmployeeNode] = true;

            let subordinates = this.adjacencyList[currentEmployeeNode] || [];
            console.log(subordinates);
            
            for(let sub of subordinates){

                if(sub === employee2) 
                {
                    console.log("managerial length:", levelCounter);
                    return levelCounter++;
                }

                if(visitedEmployeeNodeTracker[sub] != true){
                    queue.push(sub);
                }

            }

            levelCounter += 1;
        }

        return 0;
    }
}


let companyNetwork = new Graph();
companyNetwork.addEdgeConnection("Susan/John")
companyNetwork.addEdgeConnection("John/Amy")
companyNetwork.lineManagerLength("Susan", "Amy")


*/