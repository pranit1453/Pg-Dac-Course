#include <iostream>
#include <string>
#include <stdexcept>

using namespace std;

const int MAX_ITEM = 100;

class Item {
public:
    int itemID;
    string itemName;
    int price;
    int stockQuantity;

    Item() {
        itemID = 0;
        itemName = "";
        price = 0;
        stockQuantity = 0;
    }

    Item(int id, string name, int p, int q) {
        if (p < 0 || q < 0) {
            throw invalid_argument("Price or quantity cannot be negative.");
        }
        itemID = id;
        itemName = name;
        price = p;
        stockQuantity = q;
    }

    void display() {
        cout << itemID << " " << itemName << " " << price << " " << stockQuantity << endl;
    }
};

class Bill {
    int billID;
    string customerName;
    Item purchasedItems[MAX_ITEM];
    int quantity[MAX_ITEM];
    int itemCount;

public:
    Bill() {
        billID = 0;
        customerName = "";
        itemCount = 0;
    }

    Bill(int id, string name) {
        billID = id;
        customerName = name;
        itemCount = 0;
    }

    // Overload + operator to add an item to the bill
    Bill& operator+(Item& item) {
        if (itemCount >= MAX_ITEM) {
            throw runtime_error("Cannot add more items.");
        }

        int qty;
        cout << "Enter Quantity for item: " << item.itemName << ": ";
        cin >> qty;

        if (qty <= 0) {
            throw runtime_error("Error: Quantity must be greater than 0.");
        }

        if (qty > item.stockQuantity) {
            throw runtime_error("Invalid Quantity. Not enough stock.");
        }

        purchasedItems[itemCount] = item;
        quantity[itemCount] = qty;
        item.stockQuantity -= qty;
        itemCount++;

        return *this;
    }

    // Display basic bill info
    void displayBill() {
        cout << "Bill ID: " << billID << ", Customer: " << customerName << endl;
        cout << "Items:\n";
        for (int i = 0; i < itemCount; i++) {
            purchasedItems[i].display();
            cout << "Quantity: " << quantity[i] << endl;
        }
    }

    // Declare friend function
    friend ostream& operator<<(ostream& out, Bill& bill);
};

// Define friend function outside the class
ostream& operator<<(ostream& out, Bill& bill) {
    if (bill.itemCount == 0) {
        throw runtime_error("Cannot generate empty bill.");
    }

    out << "Bill ID: " << bill.billID << "\n";
    out << "Customer: " << bill.customerName << "\n";
    out << "Items:\n";

    int total = 0;
    for (int i = 0; i < bill.itemCount; i++) {
        int subTotal = bill.purchasedItems[i].price * bill.quantity[i];
        out << "- " << bill.purchasedItems[i].itemName
            << " x " << bill.quantity[i]
            << " = " << subTotal << "\n";
        total += subTotal;
    }

    out << "Total Amount: " << total << "\n";
    return out;
}

int main() {
    try {
        Item i1(101, "Pen", 10, 50);
        Item i2(102, "Notebook", 30, 20);

        Bill b1(1, "Prathamesh");

        b1 = b1 + i1;
        b1 = b1 + i2;

        // You can choose one of these:
        // b1.displayBill();      // basic display
        cout << b1;               // uses overloaded << operator
    }
    catch (const exception& e) {
        cerr << "Error: " << e.what() << endl;
    }

    return 0;
}
