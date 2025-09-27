#include <iostream>
using namespace std;

class parent
{

    int data;

public:

    parent(int data=0){
        data=data;
    }
    int getData()
    {
        return data;
    }
    void setData(int d)
    {
        data = d;
    }

    void display()
    {
        cout << "Data is: " << data << endl;
    }
};
class Child : public parent
{
    int id;
    protected:
        int protectedData;

public:
    int getId()
    {
        return id;
    }
    void setId(int id)
    {
        id = id;
    }
    
    void display()
    {
        parent::display();
    }
};
class child_child:protected Child{
    public:
     int getPro(){
        return protectedData;
     }
};

int main()
{
    Child c;
   // c.setData(25);
   // cout<<c.getData();
    // c.accept();
    // c.display();
   // c.setId(22);
    //cout<<c.getId();
    // child_child ch;
    // cout<<ch.getPro();
    
}