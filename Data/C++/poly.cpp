#include<iostream>
using namespace std;

class Math{

    public:
    int add(int a=0,int b=0){
        return a+b;
    }
    int multiply(int a=0,int b=0){
        return a*b;
    }
    int add(int a=0,int b=0,int c=0){
        return a+b+c;
    }
};
class Math2:public Math{
    public:
        int multiply(int a=0,int b=0,int c=0){
            return a*b*c;
        }
};
int main(){

    Math2 m2;
    cout<<m2.multiply(2,2,2)<<endl;
    cout<<m2.add(5,5,5);

}