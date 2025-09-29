#include <iostream>
#include <string.h>
using namespace std;

int main()
{
    //rev
    char str1[100] = "hello";
    //   int i=0;
    //   int j=strlen(str1)-1;
    //   while(i<j){
    //     char temp = str1[i];
    //     str1[i]=str1[j];
    //     str1[j]=temp;
    //     i++;
    //     j--;
    //   }
    //   cout<<str1;
    char str2[100] = "world";
    //concat
    // int i=0,j=0;
    // while(str1[i]!='\0'){
    //     i++;
    // }
    // while(str2[j]!='\0'){
    //     str1[i]=str2[j];
    //     i++;
    //     j++;
    // }
    // cout<<str1;
    //copy
    // int i = 0;
    // while (str2[i] != '\0')
    // {
    //     str1[i] = str2[i];
    //     i++;
    // }
    // str1[i] = '\0';
    // cout<<str1;

//     int i=0;
//     while(str1[i]!='\0'&&str2[i]!='\0'){
//         if(str1[i]!=str2[i]){
//             return (str1[i]>str2[i])?1:-1;
//         }
//         i++;
//     }
// }
int i=0;int j=0;
 while(i<j)
 {
    char temp=str1[i];
    str1[i]=str1[j];
    str1[j]=temp;
    i++;
    j--;
}
cout<<str1;
while(str1[i] != '\0')
{
    i++;
}
while(str2[j] != '\0')
{
    str1[i]=str2[j];
    i++;
    j++;
}

}
