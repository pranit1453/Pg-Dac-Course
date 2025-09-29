import java.util.Scanner;
class AddNNumbers{
public static void main(String[] args){
Scanner sc = new Scanner(System.in);
System.out.print("Enter Number: ");
int n=sc.nextInt();
int sum=0;
for(int i=1;i<=n;i++){
sum+=i;
}
System.out.println("Sum of first "+n+" numbers is: "+sum);
sc.close();
}
}