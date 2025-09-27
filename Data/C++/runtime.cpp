#include<iostream>
using namespace std;

//using pure virtual function

class Employee{
    public:
        virtual void show()=0;
};

//using virtual Function
class Employee1{
    public:
    virtual void show(){
        cout<<"Employee1 details"<<endl;
    }
};

//using function
class Employee2{
    public:
     void show(){
        cout<<"Employee 2 Details"<<endl;
    }
};

class Manager:public Employee{
    public:
        void show(){
            cout<<"Manager Details"<<endl;
        }
};
class Manager1:public Employee1{
    public:
    void show(){
        cout<<"Manager1 details"<<endl;
    }
};
class Manager2:public Employee2{
    public:
   virtual void show(){
        cout<<"Manager 2 Details"<<endl;
    }
};

int main(){
    //Employee e; //abstract class can't have object
    Employee *e = new Manager(); //-------->But abstract class have a pointer
    e->show(); //derived class
    delete e;

    Employee1 e1;
    e1.show(); //---------->it give employee 1 data
    Employee1 *e1_1=new Manager1();
    e1_1->show();//----------->it give manager 1 data
    delete e1_1;
    
    Employee2 e2;
    e2.show();
    //Employee1 *e2 = new Employee2();  //no runtime polymorphism achieved as it can't create object on heap but in logic it does not contain a single virtual function or a pure virtual function. 
    Employee2 *e2_2=new Manager2();
    e2_2->show(); //------------object of employee2 created.(because base class has no virtual function it does early binding) (as int this virtual keyword is used but in derived class but it does early binding and creates a object of base class)
}