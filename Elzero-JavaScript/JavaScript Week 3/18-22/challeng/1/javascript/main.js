let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 100
console.log(++a + -b + +c++ - -a++ + +a); // 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100
/*
Examples:
[++a] 
- Value: 11
- Explain: pre-increment  is used to increment the value of a variable before using it
[+]
- Explain: Addition Operator
[-]
- Explain: subtraction Operator
[*]
- Explain: multiplication Operator
[+b]
- Value: 20
- Explain: للتعامل مع الرقم داخل "" كرقم من اجل العمليات الحسابيه 
[b++] 
- Value: 20
- Explain: post-increment  is used to increment the value of a variable after using it
[-b]
- Value: -20
- Explain: تعمل نفس عمل [+b] مع فرق فقط في الاشاره هنا تكون سالبه
[--c] 
- Value: 79
- Explain: post-decrement  is used to decrement the value of a variable before using it
[c--] 
- Value: 80
- Explain: post-decrement  is used to decrement the value of a variable after using it
[+true] 
- Value: 1
- Explain: it is a boolean operator , لكن مع الارقام في العمليات الحسابيه يتم استخاده علي انه رقم واحد

*/