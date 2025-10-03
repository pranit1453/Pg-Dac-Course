import java.util.Scanner;

public class ArrayService2D {
	static Scanner sc = new Scanner(System.in);

	public static void acceptArray(int[][] arr1) {
		for (int i = 0; i < arr1.length; i++) {
			for (int j = 0; j < arr1[i].length; j++) {
				System.out.println("Enter Data For index: " + i + "," + j);
				arr1[i][j] = sc.nextInt();
			}
		}
	}

	public static void displayArray(int[][] arr1) {
		for (int i = 0; i < arr1.length; i++) {
			for (int j = 0; j < arr1[i].length; j++) {
				System.out.print(i + "," + j + ": " + arr1[i][j] + "\t\t");
			}
			System.out.println();

		}

	}

	public static int addAllNumbers(int[][] arr1) {
		int sum = 0;
		for (int i = 0; i < arr1.length; i++) {
			for (int j = 0; j < arr1[i].length; j++) {
				sum += arr1[i][j];
			}
		}
		return sum;
	}

	public static int[] addRowwise(int[][] arr1) {
		int[] temp = new int[arr1.length];
		for (int i = 0; i < arr1.length; i++) {
			temp[i] = 0;
			for (int j = 0; j < arr1[i].length; j++) {
				temp[i] += arr1[i][j];
			}
		}
		return temp;
	}

	public static int[] addColumnwise(int[][] arr1) {
		int[] temp = new int[arr1[0].length];
		for (int i = 0; i < arr1[i].length; i++) {
			for (int j = 0; j < arr1.length; j++) {
				temp[i] += arr1[i][j];
			}
		}
		return temp;
	}

	public static int[][] add2Darrays(int[][] arr1, int[][] arr2) {
		int[][] temp = new int[arr1.length][arr1[0].length];
		for (int i = 0; i < arr1.length; i++) {
			for (int j = 0; j < arr1[i].length; j++) {
				temp[i][j] = arr1[i][j] + arr2[i][j];
			}
		}
		return temp;
	}

	public static int[][] multiplyArray(int[][] arr1, int[][] arr2) {
		if (arr1.length == arr2[0].length) {
			int[][] temp = new int[arr1.length][arr1[0].length];
			for (int i = 0; i < arr1.length; i++) {
				for (int j = 0; j < arr1[0].length; j++) {
					for (int k = 0; k < arr1[0].length; k++) {
						temp[i][j] += arr1[i][k] * arr2[k][j];
					}
				}
			}
			return temp;
		}
		return null;
	}

	public static int[][] findTranspose(int[][] arr1) {
		if (arr1.length == arr1[0].length) {
			int[][] temp = new int[arr1.length][arr1[0].length];
			for (int i = 0; i < arr1.length; i++) {
				for (int j = 0; j < arr1[i].length; j++) {
					temp[i][j] = arr1[j][i];
				}
			}
			return temp;
		}
		return null;
	}

	public static boolean checkIdentity(int[][] arr1) {
		for (int i = 0; i < arr1.length; i++) {
			for (int j = 0; j < arr1[i].length; j++) {
				if ((i == j) && arr1[i][j] != 1) {
					return false;
				} else if ((i != j) && arr1[i][j] != 0) {
					return false;
				}
			}
		}
		return true;
	}

	public static int[][] rotateRow(int[][] arr1, int n) {
		//allocate memory for temp
				int[][] temp=new int[arr1.length][arr1[0].length];
				//copy arr into temp
				for(int i=0;i<arr1.length;i++) {
					for(int j=0;j<arr1[0].length;j++) {
						temp[i][j]=arr1[i][j];
					}
				}
				//store location of 1st row in temp1
				int[] temp1 = temp[0];
				//evry row will point to next row except last row
				for(int i=0;i<temp.length-1;i++) {
					temp[i]=temp[i+1];
				}
				//last row point to 0 th row
				temp[temp.length-1]=temp1;
				return temp;
	}

	public static int[][] rotateColumn(int[][] arr1, int n) {
		//allocate memory for temp
				int[][] temp=new int[arr1.length][arr1[0].length];
				//copy arr into temp
				for(int i=0;i<arr1.length;i++) {
				for(int j=0;j<arr1[0].length;j++) {
					temp[i][j]=arr1[i][j];
				}
				}
				//copy last column into temp1
				int[] temp1=new int[temp.length];
				for(int i=0;i<temp1.length;i++) {
					temp1[i]=temp[i][temp[0].length-1];
				}
				//shift all columns towards right by 1 column
				//starting from 2nd  last column
				for(int i=0;i<temp.length;i++) {
					for(int j=temp[0].length-2;j>=0;j--) {
						temp[i][j+1]=temp[i][j];
					}
				}
				//copy temp1 into 0th column
				for(int i=0;i<temp.length;i++) {
					temp[i][0]=temp1[i];
				}
				return temp;
	}

	public static int[] convertTo1DArray(int[][] arr1) {
	int [] temp = new int[arr1.length*arr1[0].length];
	int count=0;
	for(int i=0;i<arr1.length;i++) {
		for(int j=0;j<arr1[i].length;j++) {
			temp[count]=arr1[i][j];
			count++;
		}
	}
		return temp;
	}

	public static int findMax(int[][] arr1) {
		int max = arr1[0][0];
		for(int i=0;i<arr1.length;i++) {
			for(int j=0;j<arr1[i].length;j++) {
				if(max<arr1[i][j]) {
					max = arr1[i][j];
				}
			}
		}
		return max;
	}

	public static int[] findMaxRowWise(int[][] arr1) {
		int [] temp = new int[arr1.length];
		for(int i=0;i<arr1.length;i++) {
			temp[i]=arr1[i][0];
			for(int j=0;j<arr1[0].length;j++) {
				if(temp[i]<arr1[i][j]) {
					temp[i]=arr1[i][j];
				}
			}
		}
		return temp;
	}

	public static int[] findMaxColWise(int[][] arr1) {
		//find max Column
		int max_length = arr1[0].length;
		for(int i=0;i<arr1.length;i++) {
			if(max_length<arr1[i].length) {
				max_length = arr1[i].length;
			}
		}
		int [] temp = new int[max_length];
		for(int i=0;i<arr1.length;i++) {
			for(int j=0;j<arr1[i].length;j++) {
				if(temp[j]<arr1[i][j]) {
					temp[j]=arr1[i][j];
				}
			}
		}
		return temp;
	}

}
