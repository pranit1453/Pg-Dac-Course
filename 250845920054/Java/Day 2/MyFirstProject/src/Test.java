import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		System.out.println("Welcome to 1D Array");

		/*
		 * 1D Array Creation Accept Array Display Array Maximum Number in Array Minimum
		 * Number in Array All Occurrences in Array Nth Maximum Number in Array Nth
		 * Minimum Number in Array
		 */

		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Size of an Array: ");
		int size = sc.nextInt();
		int[] arr = new int[size];
		System.out.print("Accepted Array is: ");
		ArrayService.acceptArray(arr);
		ArrayService.displayArray(arr);
		int choice;
		do {
			System.out.println("\n1. Search a number\n2. find max\n3. find min");
			System.out.println("4. add all numbers\n5. find all occurances\n6. find nth maximum");
			System.out.println("7. find nth minimum\n8.exit\n choice :");
			choice = sc.nextInt();

			switch (choice) {
			case 1:
				System.out.print("Enter Number to search: ");
				int key = sc.nextInt();
				int index = ArrayService.searchByKey(arr, key);
				if (key != -1) {
					System.out.print(key + " found at index " + index);

				} else {
					System.out.println("Key is Invalid");

				}
				break;
			case 2:
				int max = ArrayService.findMax(arr);
				if (max != -1) {
					System.out.print("Maximum Number in Array is: " + max);

				}
				break;
			case 3:
				int min = ArrayService.findMin(arr);
				if (min != -1) {
					System.out.print("Minimum Number in Array is: " + min);

				}
				break;
			case 4:
				int add = ArrayService.addAllNum(arr);
				System.out.print("Addition of All Number in Array is: " + add);

				break;
			case 5:
				System.out.print("Enter Key: ");
				key = sc.nextInt();
				int[] arrPos = ArrayService.findAllOccurrence(arr, key);
				if (arrPos != null) {
					System.out.println("all positions are : ");
					ArrayService.displayArray(arrPos);

				} else {
					System.out.println("not found");	

				}
				break;
			case 6:
				System.out.print("Enter Key: ");
				key = sc.nextInt();
				max = ArrayService.findNthMax(arr, key);
				System.out.println(key + " Maximum value :  " + max);
				break;
			case 7:
				System.out.print("Enter Key: ");
				key = sc.nextInt();
				min = ArrayService.findNthMin(arr, key);
				System.out.println(key + " Minimum value :  " + min);
				break;
			case 8:
				System.out.println("Thank You!!!");
				System.exit(0);
			default:
				System.out.println("Invalid Operation Please Enter Valid Operation");
			}

		} while (choice != 8);

		sc.close();
	}

}
