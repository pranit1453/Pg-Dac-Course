import java.util.*;

public class TestVehicle {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int choice = 0;
		do {
			System.out.println("1. add new student\n2. display all\n3. search by id");
			System.out.println("4. search by name\n5. update marks\n6.exit\nchoice:");
			choice = sc.nextInt();
			switch (choice) {
			case 1:
				boolean status = VehicleServices.addData();
				if (status) {
					System.out.println("Data Added Successfully");
				} else {
					System.out.println("Error : Something went wrong!!!");
				}

				break;
			case 2:
				VehicleServices.displayAll();
				break;
			default:
				System.out.println("Invalid Choice!!");
			}

		} while (choice != 2);
		sc.close();
	}
}
