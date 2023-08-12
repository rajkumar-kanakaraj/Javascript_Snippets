// Reverse a string

console.log("Reverse a string");

var str = "Automation";
var len = str.length;
var rev = "";
for (var i = len-1; i>=0; i--)
{
    rev = rev+str.charAt(i);
}
console.log("Reversed string of "+str+"--->"+rev);

// Remove the special character from a string

console.log("Remove the special character from a string");
var splstr = "£@%$!123ABvcdf$£2";
s = splstr.replace(/[^a-zA-Z0-9]/g, "");
console.log(s);

// Reverse of a integer

var num = 12345;    //54321

