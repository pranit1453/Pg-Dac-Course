#include<iostream>
using namespace std;

class test{
    int num;
    int first,last;
    public:
        void accept(){
            cout<<"Enter number: "<<endl;
            cin>>num;
            
        }
        bool isPrime = true;
        void check(){
            for(int i=2;i<num;i++){
                if(num%i==0){
                    isPrime=false;
                    break;
                }
            }

           


            if(isPrime){
                cout<<"It is prime number"<<endl;
            }else{
                cout<<"not prime";
            }
        }

        void accept_Range(){
            cout<<"Enter range: "<<endl;
            cin>>first;
            cin>>last;
        }

        void check_inRange(){
            for(int x= first ;x<=last;x++){
                int count=0;
                for(int i = 1;i<=x;i++){
                    if(x%i==0){
                        count++;
                    }
                    
                }
                if(count == 2){
                    cout<<x<<"\t";
                }
                
            }
        }

};

int main(){
    test obj;
    obj.accept();
    obj.check();

}