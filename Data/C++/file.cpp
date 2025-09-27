#include<iostream>
#include<fstream>
using namespace std;

// class test{
//     ofstream myfile;
//     public:

//     test():myfile("example.txt"){
//         cout<<"File opened in constructor\n";
//     }


//     ~test(){
//         myfile.close();
//         cout<<"File Closed in destructor\n";
//     }
// };
int main(){
    fstream myfile("new.txt",ios::app);  //create--open(for writing)
    if(!myfile){
        cout<<"File Could not created"<<endl;
        return 1;
    }
    myfile<<"Hello\n";
    myfile<<"World\n";
    myfile<<"newFile\n";

    string line;
    while(getline(myfile,line)){
        cout<<line<<endl;
    }
}