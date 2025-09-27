#include<iostream>
using namespace std;

class A{

    int id;
    public:
        A(){
            id=0;
            cout<<"In Default Constructor in A--------"<<endl;
        }
        A(int id){
            id=id;
            cout<<"Para Constructor in A---------"<<endl;
        }
       
        int getId(){
            return id;
        }
        void setId(int id){
            id=id;
        }
};
class B:public A{
    int data;
    public:
    B(){
        data=0;
        cout<<"Default Constructor of B---------"<<endl;
    }
    B(int data,int id):A(id){
        data=data;
        cout<<"in para of B-----------"<<endl;
    }
};

int main(){

}