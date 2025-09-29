import java.util.Scanner;
class InputData{
public static void main(String[] args){
Scanner sc= new Scanner(System.in);
System.out.print("Enter Integer: ");
int i = sc.nextInt();
System.out.println("Integer is: "+i);
System.out.print("Enter Float: ");
float f = sc.nextFloat();
System.out.println("Float is: "+f);
System.out.print("Enter Decimal: ");
double d = sc.nextDouble();
System.out.println("Decimal is: "+d);
System.out.print("Enter String Without Spaces: ");
String str1 = sc.next();
System.out.println("String Without Spaces is: "+str1);
sc.nextLine();  // if something is present in buffer to clear it from buffer we have to use this extra nextLine()
System.out.print("Enter String Spaces: ");
String str2 = sc.nextLine();
System.out.println("String With Spaces is: "+str2);
sc.close();
}
}
