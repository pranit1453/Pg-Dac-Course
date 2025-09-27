#include <iostream>
using namespace std;
#include <fstream>
int main()
{

    ofstream my_file("pranit.txt");
    if (!my_file)
    {
        cout << "Error opening pranit.txt" << endl;
    }
    my_file << "Prathamesh Deepak Dhore" << endl;
    my_file << "Pranit Kishor Bhangale" << endl;
    my_file << "2508459255" << endl;
    my_file << "2508459254" << endl;
    my_file << "IET-CDAC, Pune" << endl;
    my_file.close();
    return 0;
}