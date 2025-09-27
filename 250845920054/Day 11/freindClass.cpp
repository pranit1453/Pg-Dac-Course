
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
};
class F{
    public:
    void display(Demo &t){
        cout << "The value of Private Variable = "<< t.private_variable << endl;
        cout << "The value of Protected Variable = "<< t.protected_variable;
    }
};
int main()
{
    Demo d1;
    F fri;
    fri.display(d1);
    return 0;
}