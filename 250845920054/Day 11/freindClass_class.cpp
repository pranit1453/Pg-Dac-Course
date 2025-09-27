#include <iostream>
using namespace std;
class B; //------->declare
class A
{
    int a;

public:
    int getA()
    {
        cout << "Enter value of A: ";
        cin >> a;
    }
    friend void big(A &, B &);
};
class B
{
    int b;

public:
    int getB()
    {
        cout << "Enter value of B: ";
        cin >> b;
    }
    friend void big(A &, B &);
};
void big(A &a_new, B &b_new)
    {
        cout << "friend function is accessing private class data: " << a_new.a << endl;
        cout << "friend function is accessing protected class data: " << b_new.b << endl;

        if(a_new.a>b_new.b){
            cout<<a_new.a<<" is greater"<<endl;
        }else if(a_new.a<b_new.b){
            cout<<b_new.b<<" is greater"<<endl;
        }else if(a_new.a==b_new.b){
            cout<<a_new.a<<" & "<<b_new.b<<" both are equal"<<endl;
        }else{
            cout<<"invalid!!!!!!!!!!!!!!!!!!!!!!!!";
        }
    }

int main()
{
    A a1;
    a1.getA();
    B b1;
    b1.getB();
    big(a1,b1);
}