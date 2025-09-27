#include <iostream>
using namespace std;

class complex
{
    int real, img;

public:
    complex(int r = 0, int i = 0)
    {
        real = r;
        img = i;
    }
    complex operator+(complex &obj)
    {
        return complex(this->real + obj.real,
                       this->img + obj.img);
    }
    complex operator-(complex &obj)
    {
        return complex(this->real - obj.real,
                       this->img - obj.img);
    }
    complex& operator++()
    {
        (this->real += 1,
                       this->img += 1);
                       return *this;
    }
    complex operator++(int)
    {
        complex temp = *this;
        this->real += 1;
        this->img += 1;
        return temp;
    }
    //insertion
    friend ostream &operator<<(ostream &out, complex &b)
    {

        if (b.img < 0)
        {
            out << b.real << b.img << "i";
        }
        else
        {
            out << b.real << "+" << b.img << "i";
        }
        return out;
    }
    //extraction
    friend istream& operator>>(istream &in, complex &b)
    {
        cout << "Enter Real Part: ";
        in >> b.real;
        cout << "Enter Imaginary Part: ";
        in >> b.img;
        return in;
    }

    void display()
    {
        if (img < 0)
        {
            cout << real << img << "i" << endl;
        }
        else
            cout << real << "+" << img << "i" << endl;
    }
};

int main()
{
    complex c1(3, 2);
    complex c2(1, 7);
    complex c3 = c1 + c2; // c1.operator+(c2)
    complex c4 = c1 - c2; // c1.operator-(c2)
    complex c5 = ++c1;    // c1.operator++();
    complex c6 = c1++;    // c1.operator++(int);
    complex c7;
    cin >> c7; // operator>>(cin,c7);
    cout<<c7; //operator<<(cout,c7);



    cout << "First complex number: ";
    c1.display();

    cout << "Second complex number: ";
    c2.display();
    cout << "sum is: ";
    c3.display();
    cout << "subtract is: ";
    c4.display();
    cout << "Pre-Incre is: ";
    c5.display();
    cout << "Post-Incre is: ";
    c6.display();
    cout << "<< operator using: ";
    c7.display();
}