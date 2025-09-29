class InputFromCmdLine{
	
	public static void printTable(int n){
		for(int i=1;i<=10;i++){
			System.out.println(n+" * "+i+" : "+(n*i));
	}
	}
	
public static void main(String[] args){
if(args.length<=0){
System.err.println("Error : pass atleast one argument!!");
}else{
System.out.println("Arguments pass are: "+args.length);
for(int i=0;i<args.length;i++){
System.out.println(i+" index is: " +Integer.parseInt(args[i]));
printTable(Integer.parseInt(args[i]));
}
}
}
}