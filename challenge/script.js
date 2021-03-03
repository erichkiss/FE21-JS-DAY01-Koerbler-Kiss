var vienna = [["Vienna", "\n" ,  ,  , ], [ "\t","is", "\n", , ], [ "\t", "\t ","a", "\n" , ], [ "\t", "\t", "\t","nice", "\n" ], [ "\t", "\t", "\t", "\t","city"]];

document.write(vienna);

// console.log(vienna);

console.log(vienna[0][0] + vienna[0][1] + vienna[1][0] + vienna[1][1] + "\n" + vienna[2][0] + vienna[2][1] + vienna[2][2]);
// console.log(vienna[1][1]);
// console.log(vienna[2][2]);
// console.log(vienna[3][3]);
// console.log(vienna[4][4]);

// document.write("<br>");
// document.write(vienna[0][1] + vienna[0][2]);

var text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up.";

var text_array = new Array();
text_array = text.split("$");

document.write("<br> <br>" + text_array.join(" "));

