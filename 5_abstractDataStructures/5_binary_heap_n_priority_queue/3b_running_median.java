// Java Version

import java.io.*;
import java.util.*;


class b_running_median {  // Class name should match filename in Java
  private PriorityQueue<Integer> minH; // Min-heap (for the larger half of the numbers)
  private PriorityQueue<Integer> maxH; // Max-heap (for the smaller half of the numbers)

  public b_running_median() {
    minH = new PriorityQueue<>();
    maxH = new PriorityQueue<>(Collections.reverseOrder());
  }

  // 1. Add number to one of the heaps

  public void add(int number){
    // add element to minHeap by default 
      // ie. when max is empty and make sure that all the elements in the maxH are less than that of the min right hand Heap
      // max [. ].... min [. ]
    
    // 2. Add element to maxH if it is empty or if it is smaller than the current max of maxH...otherwise add to the other

    if(maxH.isEmpty() || number < maxH.peek()){
      maxH.add(number);
    }
    else {
      minH.add(number);
    }

    // 3. Balancing the heaps to ensure the difference in size is no more than 1

    // balancing the heaps to make sure that they are not more than 2 in difference
      // if does, move the element around to balance

    // Move the max from maxH to minH
    if(maxH.size() - minH.size() > 1){
      int maxRoot = maxH.poll();
      minH.add(maxRoot);
    }

    // Move the min from minH to maxH
    else if(minH.size() - maxH.size() > 1){
      int minRoot = minH.poll();
      maxH.add(minRoot);
    }
  }

  // 4. Get the current median

  public double getMedian(){

    // maxH has more elements, return its root
    if(maxH.size() > minH.size()){
      return maxH.peek();
    }

    // minH has more elements, return its root
    if(minH.size() > maxH.size()){
      return minH.peek();
    }
    
    // if same size, Heaps are balanced, take the average of both roots
    double median = (double) (maxH.peek() + minH.peek() ) / 2;
    System.out.println("median: " + median + ": " + maxH.peek() + "," + minH.peek());
    return median;
  }

  public void show(){
    for (Integer num : maxH) {
      System.out.println(num);
    }
    System.out.println("===");
    for (Integer num : minH) {
      System.out.println(num);
    }
  }

  public static void main(String[] args) {
    b_running_median sol = new b_running_median();
    sol.add(9);
    sol.add(2);
    sol.show();
    sol.getMedian();
    sol.add(4);
    sol.add(6);
    sol.show();
    sol.getMedian();
    sol.add(1);
    sol.add(3);
    sol.show();
    sol.getMedian();
    


  
  }
}


