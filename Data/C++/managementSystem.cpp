#include<iostream>
#include<vector>
using namespace std;

class Person{
    protected:
    int id;
    string name;

    public:
    Person(int id, string name){
        this->id=id;
        this->name=name;
    }
    string getName(){
        return name;
    }
    virtual void displayDetails()=0;
    ~Person(){

    }
};

class Faculty:public Person{
    string courseName;
    public:
    Faculty(int id,string name,string courseName):Person(id,name){
        this->courseName=courseName;
    }
    string getCourseName(){
        return courseName;
    }
    void displayDetails(){
        cout<<"\n---------Faculty Details----------\n";
        cout<<"Faculty Id: "<<id<<endl;
        cout<<"Faculty Name: "<<name<<endl;
        cout<<"Faculty Course Name: "<<courseName<<endl;
    }
    ~Faculty(){

    }
};
class Student:public Person{
    string courseName;
    int courseId;
    int marks;
    public:
    Student(int id,string name,string courseName,int courseId,int marks):Person(id,name){
        this->courseName=courseName;
        this->courseId=courseId;
        this->marks=marks;
    }
    string getCourseName(){
        return courseName;
    }
    int getCourseId(){
        return courseId;
    }
    int getMarks(){
        return marks;
    }

    void displayDetails(){
        cout<<"\n------Student Details---------\n";
        cout<<"Student Id: "<<id<<endl;
        cout<<"Student Name: "<<name<<endl;
        cout<<"Student Course Name: "<<courseName<<endl;
        cout<<"Student Course Id: "<<courseId<<endl;
        cout<<"Student Marks: "<<marks<<endl;
        cout<<"Result: "<<(marks>=16?"Pass":"Fail")<<endl;
    }
    ~Student(){

    }

};

int main(){

    vector<Faculty*>faculty;
    vector<Student*>student;
    cout<<"Enter Faculty Details"<<endl;
    int id;
    string name,course;
    cout<<"Enter id For Faculty: ";
    cin>>id;
    cout<<"Enter Name of Faculty: ";
    cin>>name;
    cout<<"Enter Course taught by Faculty: ";
    cin>>course;
    
   
    faculty.push_back(new Faculty(id,name,course));

    student.push_back(new Student(201,"Aman","c++",501,85));

    for(auto f:faculty){
        f->displayDetails();
    }
    for(auto s:student){
        s->displayDetails();
    }

    for(auto s:student){
        for(auto f:faculty){
           if(s->getCourseName()==f->getCourseName()){
            cout<<"Student "<<s->getName();
            cout<<"("<<s->getCourseName()<<")"<<"where taught by faculty "<<f->getName();
           }
        }
    }
    for(auto f: faculty){
        delete f;
    }
    for(auto s:student){
        delete s;
    }

    return 0;
}