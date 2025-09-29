
#include <iostream>
using namespace std;
class Demo
{
private:
    int private_variable;

protected:
    int protected_variable;

public:
    Demo()
    {
        private_variable = 10;
        protected_variable = 99;
    }
 
    friend class F;
    friend class G;
};
class F{
    private:
    int private_variable1;

protected:
    int protected_variable2;
    public:
    F()
    {
        private_variable1 = 20;
        protected_variable2 = 200;
    }

    public:
    void display(Demo &t){
        cout<<"In class F"<<endl;
        cout << "The value of Private Variable = "<< t.private_variable << endl;
        cout << "The value of Protected Variable = "<< t.protected_variable;
    }
    friend class G;
};
class G{
     public:
    void display(F &obj,Demo &obj1){
        cout<<"In class G"<<endl;;
        cout << "The value of Private Variable = "<< obj1.private_variable << endl;
        cout << "The value of Protected Variable = "<<obj1.protected_variable;
        cout << "The value of Private Variable = "<< obj.private_variable1 << endl;
        cout << "The value of Protected Variable = "<< obj.protected_variable2;
    }
    friend class Demo;
};
int main()
{
    Demo d1;
    F fri;
    fri.display(d1);
    G friend1;
    friend1.display(fri,d1);

    return 0;
}