var output = [];
var cout = 1;

function fizzbuzz (){

    if(cout % 3 === 0 && cout % 5 === 0){
        output.push("fizzbuzz");

    } else if(cout % 3 === 0 ) {
        output.push("fizz");
    }else if(cout % 5 === 0 ) {
        output.push("buzz");
    } else{
        output.push(cout);
    }


    cout++;

    console.log(output);

}