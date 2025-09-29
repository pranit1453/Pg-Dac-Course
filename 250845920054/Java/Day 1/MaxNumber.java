import java.util.Scanner;
class MaxNumber{
public static void main(String[] args){
Scanner sc = new Scanner(System.in);

System.out.println("Enter Three Numbers");
int num1 = sc.nextInt();
int num2 = sc.nextInt();
int num3 = sc.nextInt();

if((num1 == num2) || (num2 == num3) || (num1==num3)){
System.out.println("Numbers are Equal");
}else if(num1>num2){
System.out.println("Num1 is Greater : "+num1);
}else if(num2>num3){
System.out.println("Num2 is Greater : "+num2);
}else{
System.out.println("Num3 is Greater : "+num3);
}
sc.close();
}
}