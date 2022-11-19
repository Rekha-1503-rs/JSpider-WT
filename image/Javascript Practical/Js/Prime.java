import java.util.Scanner;
class Prime{
static boolean is Prime(int x)
{
for(int i=1; i<=x/2; i++)
{
if(x%i==0)
return false;
}
return true;
}
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);
System.out.println("enter the number:");

int n=sc.nextInt();

System.out.println(n+"is a Prime number");
}
}
