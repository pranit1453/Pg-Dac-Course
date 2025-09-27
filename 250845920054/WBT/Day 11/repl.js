function displayCurrentDate(times) {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1; 
    const yyyy = date.getFullYear();

    
    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;

    const formattedDate = `${dd}/${mm}/${yyyy}`;

    for (let i = 0; i < times; i++) {
        console.log(formattedDate);
    }
}
displayCurrentDate(5);
