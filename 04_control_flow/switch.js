// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
switch (month) {
    case "1":
        console.log("January");
        break;
    case "2":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "4":
        console.log("april");
        break; //if break will not be there it will execute all the code below it except default

    default:
        console.log("default case match")
        break;
}