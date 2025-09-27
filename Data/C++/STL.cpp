#include <iostream>
#include <vector>
using namespace std;

struct Student
{

    int rollNo;
    string name;
};
class test
{

    vector<Student> stud;

public:
    void accept(int n)
    {
        // for(auto &i:stud){
        //     cout<<"Enter Roll No: ";
        //     cin>>i.rollNo;
        //     cout<<"Enter Name: ";
        //     cin>>i.name;
        //     stud.push_back(i);
        // }
        for (int i = 0; i < n; i++)
        {
            Student s;
            cout << "Enter Roll No: ";
            cin >> s.rollNo;
            cout << "Enter Name: ";
            cin >> s.name;
            stud.push_back(s);
        }
    }
    void display()
    {
        cout << "Display Student Details" << endl;
        for (auto &i : stud)
        {
            cout << "Roll no is: " << i.rollNo << endl;
            cout << "Name is: " << i.name << endl;
        }
    }
};

int main()
{
    test t1;
    int n;
    cout << "Enter n: ";
    cin >> n;
    t1.accept(n);
    t1.display();
}