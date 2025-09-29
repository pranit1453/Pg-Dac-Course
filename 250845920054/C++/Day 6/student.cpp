#include <iostream>
#include <string.h>
using namespace std;

class student
{
    int roll_no;
    string birth_date;
    int marks;

public:
    void accept()
    {
        cout << "Enter Roll no: ";
        cin >> roll_no;
        cout << "Enter Date of Birth: ";
        cin >> birth_date;
        cout << "Enter Marks: ";
        cin >> marks;
    }

    int getRollNo()
    {
        return roll_no;
    }
    int getMarks()
    {
        return marks;
    }
    string getDate()
    {
        return birth_date;
    }

    void display()
    {
        cout << "Roll no: " << roll_no << endl;
        cout << "Date of Birth: " << birth_date << endl;
        cout << "Marks: " << marks << endl;
    }
};

int main()
{

    int n;
    cout << "Enter Size(n): ";
    cin >> n;

    student *stud_detail = new student[n];
    for (int i = 0; i < n; i++)
    {
        cout << "\nEnter details for student " << i + 1 << ":\n";
        (stud_detail + i)->accept();
    }

    int choice;
    cout << "Enter Choice: ";
    cin >> choice;

    switch (choice)
    {
    case 1:
        cout << "\n--- Student Details ---" << endl;
        for (int i = 0; i < n; i++)
        {
            (stud_detail + i)->display();
        }
        break;
    case 2:
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (stud_detail[j].getRollNo() > stud_detail[j + 1].getRollNo())
                {
                    student temp = stud_detail[j];
                    stud_detail[j] = stud_detail[j + 1];
                    stud_detail[j + 1] = temp;
                }
            }
        }
        break;
    case 3:
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (stud_detail[j].getMarks() > stud_detail[j + 1].getMarks())
                {
                    student temp = stud_detail[j];
                    stud_detail[j] = stud_detail[j + 1];
                    stud_detail[j + 1] = temp;
                }
            }
        }
        break;
    case 4:
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                // This comparison works only if the format is YYYY-MM-DD
                if (stud_detail[j].getDate() > stud_detail[j + 1].getDate())
                {
                    student temp = stud_detail[j];
                    stud_detail[j] = stud_detail[j + 1];
                    stud_detail[j + 1] = temp;
                }
            }
        }
        break;

    default:
        cout << "Enter Valid Data!!!!!" << endl;
        break;
    }

    cout << "\n--- Student Details ---" << endl;
    for (int i = 0; i < n; i++)
    {
        (stud_detail + i)->display();
    }
    delete[] stud_detail;
}