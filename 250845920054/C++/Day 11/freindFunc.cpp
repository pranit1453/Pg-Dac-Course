#include <iostream>  
using namespace std;  
class A
{
	int a;
    protected:
    int b;
	public:
		int geta();
		friend void xyz(A&);
};
int A::geta()
{
	cout<<"enter the value of a\n";
	cin>>this->a;
    cout<<"enter the value of b\n";
	cin>>this->b;
}
void xyz(A& a1obj)
{
	cout<<"friend function is accessing private class data: "<<a1obj.a<<endl;
    cout<<"friend function is accessing protected class data: "<<a1obj.b<<endl;
	
}
int main()
{
	A aobj;
	aobj.geta();
	xyz(aobj);
}
