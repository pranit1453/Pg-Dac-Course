#include <iostream>
#include <climits>
using namespace std;
int main()
{
    int n;
    cout << "Enter n: ";
    cin >> n;
    int arr[n];
    cout << "Enter arr: ";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    cout << "Display arr: " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << "\t";
    }
    cout << endl;
    int max = arr[0];
    for (int i = 0; i < n; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    cout << "Print max: " << max << endl;
    int secondMax = INT_MIN; //-1
    for (int i = 0; i < n; i++)
    {
        if (arr[i] > secondMax && arr[i] != max)
        {
            secondMax = arr[i];
        }
    }
    cout << "Print secondMax: " << secondMax << endl;

    int thirdMax = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] > thirdMax && arr[i] != max && arr[i] != secondMax)
        {
            thirdMax = arr[i];
        }
    }
    cout << "Print thirdMax: " << thirdMax << endl;

    int fourthMax = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] > fourthMax && arr[i] != max && arr[i] != secondMax && arr[i] != thirdMax)
        {
            fourthMax = arr[i];
        }
    }
    cout << "Print FourthMax: " << fourthMax << endl;
}