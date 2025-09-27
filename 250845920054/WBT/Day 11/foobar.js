for (let i = 0; i <= 100; i++) {
    //Condition to check divisibilty of 3 and 5;i.e remainder is 0 after dividing by 3&5 both.
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FOOBAR");
    }
    //Condition to check divisibilty of 3 ;i.e remainder is 0 after dividing by 3.
    else if (i % 3 == 0) {
        console.log("FOO");
    }
    //Condition to check divisibilty of 5;i.e remainder is 0 after dividing by 5.
    else if (i % 5 == 0) {
        console.log("BAR");
    }
    //Print Numbers till i
    else {
        console.log(i);

    }
}