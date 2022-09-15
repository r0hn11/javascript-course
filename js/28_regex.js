/*

    What is a regular expression
    - basically used for searching best matches using program
    - flags: g(global), i(case insensitive), m(multiline matching)
    - multiple flags can be added at the same time

*/

let regex = /demo/;
let regexg = /r/g;
let regexi = /r/i;
let regexgi = /r/gi;

console.log(regex);
console.log(regex.source);    //gives the expression

// Functions to match expressions
const s = 'This is a demo stRing for test/demo purpose.'
let res1 = regex.exec(s);
console.log(res1);     // returns an object
console.log(res1.index);     // returns index
console.log(res1.input);     // returns input
/*
    'g' flag gives global search functionality.
    Using regexg.exec(s) multiple times will return the result with next index, when there are no entries for 's' then it will return null
*/

let res2;
while(true){
    res2 = regexgi.exec(s);
    if(res2===null){
        break;
    }
    console.log(res2);
}

/*
    'i' flag gives case insensitive ability to search
*/

let res3 = regexi.exec(s);   // will search for r and R
let res4 = regexg.exec(s);   // will search for r only
console.log(res3.index, res4.index);


/*
    exec(). returns an aobject with index, input etc. for search result. Works with flags
    test(). returns true or false for existance
    match(). returns array of results or null
    search(). returns index of firstfind. else returns -1
    replace(). replace the string. wroks with flag. If no flag i sgiven then only first found result is affected
*/
let s2 = 'Another Demo sentence';
let reg2 = /er d/i;
let reg3 = /e/gi;

let res5 = reg2.test(s2);
let res6 = s2.match(reg3)
let res7 = s2.search(reg3)
let res8 = s2.replace(/ /g, '_')

console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);



/* METACHARACTERS */
// ^ = expression starts with...
// $ = ...expression ends with
// . = holds any one character
// * = holds 0 or multiple characters
// a? = optional character (e.g. a)
// \ = for escape sequence

console.clear()
let str = 'Lorem ipsum dolor ips graen mhiut asxop dolr green ducimus a*strix'

let reg4 = /dolor/;
reg4 = /^lor/i;
reg4 = /us$/i;
reg4 = /gr.en/g;
reg5 = /gr*en/;
reg6 = /gra?ens? /;
reg7 = /d.l*r/;
reg8 = /a\*str/;

console.log(reg8.exec(str), reg8.source);

/* CHARACTER SETS */
// we can create different character sets by combining following options
console.clear()
let str2 = 'Lxrem ipsum dolor sit amet Con2secT5etur adipisicing elit. Sequi, eum!'
let reg10 = /l[a-z]rem/i;   // if string has letters a to z
reg10 = /l[apmo]rem/i;  // if string has letters given in brackets. e.g. a,p,m,o
reg10 = /l[^zxce]rem/i;  // if string has letters other than letters given in brackets. e.g. a,p,m,o
reg10 = /[a-d]onsec[xdjat]/;  // multiple character sets
reg10 = /[a-dA-D]on[a-zA-z0-9]sec[A-Z][0-3]/;  // case sensitivity, numbers

if(reg10.test(str2)) console.log(1);
else console.log(0);


/* QUANTIFIERS */
// for the quantity of a specific character. quantifiers ={}. goruping = ()
console.clear()
let str3 = 'Hello, this a loooong string movmovs4s2s9tick with a no \'w\' in it.';
let reg11 = /lo{2}ng/;  // check if 'o' is present 2 times
reg11 = /lo{0,5}ng/;    // check if 'o' is present 0 to 5 time(s)
reg11 = /(mov){2}(s[0-9]){3}/;     // Grouping and quantifier

if(reg11.test(str3)) console.log(1);
else console.log(0);


/* SHORTHAND CHARACTER CLASSES*/
/*
    \w = word character, _ or alphanumeric. Does not work with special characters like &,%,$
    \w+ = one or more than one characters
    \W = non word characters
    \W+ = one or more than one non word characters
    \d = digit
    \d+ = one or more than one digits
    \D = non digit character
    \D+ = one or more than one non digit characters
    \s = whitespace
    \s+ = one or more than one whitespace characters
    \S = non whitespace character
    \S+ = one or more than one non whitespaces characters
*/
console.clear()
let str4 = 'Verse 24190 dkt90: Are there any beautiful minds in         wa2this cruel&%@* world?, IRWIN?';

let reg12 = /\wwin/i;   // for one character before 'win'.
reg12 = /\w+win/i;  // for one or more than one characters before 'win'.
reg12 = /\Wwo/;     // for one non word character before 'wo'. e.g. space,@,&,$
reg12 = /\W+wo/;     // for one or more than one non word character before 'wo'.

reg12 = /\d90/;     // for one digit before '90'.
reg12 = /\d+90/;     // for one or more than one digits before '90'.
reg12 = /\D90/;     // for one non-digit before '90'.
reg12 = /\D+90/;     // for one or more than one non-digits before '90'.

reg12 = /\sthis cruel/;    // for one whitespace characters like space, tabs etc. returns with one space/tab in output
reg12 = /\s+this cruel/;    // for one or more than one whitespace characters. returns with one or more than one whitespaces 
reg12 = /\Sthis cruel/;    // for a non whitespace characters.
reg12 = /\S+this cruel/;    // for one or more than one non whitespace characters.

reg12 = /any\b/;    // word boundry

if(reg12.test(str4)){console.log(1, reg12.exec(str4)[0]);}
else console.log(0);

/* ASSERTIONS - a statement of fact */
console.clear();
let str5 = 'Mortals will rule the world in eternity but will they really be mortal then.'

let reg13 = /r(?=u)/;   // for 'u' after 'r'
reg13 = /r(?!u)/;   // for not 'u' after 'r'

if(reg13.test(str5)){console.log(1, reg13.exec(str5).index);}
else console.log(0);