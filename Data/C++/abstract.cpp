#include<iostream>
using namespace std;

//abstratcion achieve using abstract class(class with atleast one pure virtual function)
class employee{
    protected:
    string name;
    int id;
    public:
    employee(string n,int i){
        name=n;
        id=i;
    }
    virtual void displayDetails()=0;
};
class fullTimeEmployee:public employee{
    int salary;
    public:
    fullTimeEmployee(string n,int i,int s):employee(n,i){
        salary=s;
    }
    void displayDetails(){
        cout<<"Full Time Employee---> Name: "<<name
            <<", ID: "<<id
            <<", Salary: "<<salary<<endl;
    }
};
class partTimeEmployee:public employee{
    int hourlyRate;
    public:
    partTimeEmployee(string n,int i,int r):employee(n,i){
        hourlyRate=r;
    }
    void displayDetails(){
        cout<<"Part Time Employee---> Name: "<<name
            <<", ID: "<<id
            <<", HourlyRate: "<<hourlyRate;
    }
};
int main(){

    //abstract class object is not allowed but pointer is allowed
    employee *e1=new fullTimeEmployee("Raj",101,50000);
    employee *e2 = new partTimeEmployee("Rakesh",102,500);

    e1->displayDetails();
    e2->displayDetails();

    delete e1;
    delete e2;
}