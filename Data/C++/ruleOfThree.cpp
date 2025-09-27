
/*
1. Destructor: free memory
2. Copy Constructor: define how to copy objects (deep copy should be created) Note: shaloow copy can cause crash
3. Copy Assignment Operator: define how to assign one object to another
*/

#include<iostream>
using namespace std;

/*
a.data --> points to some memory(address 100 storing 10)
when b=a, compiler makes a shallow copy so b.data also points to address 100
destructor of a deletes memory at 100
destructor of b tries to deletes memory at 100 again --> crash
*/

class test1{
    int *data;
    public:
    test1(int val){
        data = new int(val);
         cout<<"data in test1 is: "<<*data<<endl;
        cout<<"data in test1 is: "<<data<<endl;
    }
    ~test1(){
        delete data; // free memory
    }
};
class test2{
    int *data;
    public:
    test2(int val){
        data = new int(val);
        cout<<"Data in test2 is: "<<*data<<endl;
        cout<<"Data in test2 is: "<<data<<endl;
    }
    //Copy constructor(deep copy)
    test2(test2 &new_name){
        data=new int(*new_name.data);
    }

    //Assignment operator
    test2& operator=(test2& new_test2){
        if(this!=&new_test2){
            delete data;
            data=new int(*new_test2.data);
            cout<<"Data in test2(assignment) is: "<<*data<<endl;
             cout<<"Data in test2(assignment) is: "<<data<<endl;
        }
        return *this;
    }
    ~test2(){
        delete data;
    }
};

int main(){
    // test1 obj1(10);
    // test1 obj2 = obj1;  //shallow copy is get created---> b.data points to same memory as a.data
    test2 obj3(20);
    test2 obj4(30);
    obj4=obj3;
    /*                          object         pointer     memory value             res
        before:                  a.data         100         10                  a owns memory at 100
        copy constructor run:    b.data         new 200     *new_name.data = 10    deep copy done
                                                            copied here
        
        after:                   a.data         100         10                  separate memory
                                 b.data         200         10                   both are now safe
    */
}