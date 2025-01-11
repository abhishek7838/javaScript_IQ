// let num=3
// function square()
// {
//   document.write(num*num+"<br>")
// }
// square()

// function generic_function(n1,n2)
// {
//     document.write(n1,n2)
// }
// generic_function(6,'abhs'+"<br><br>")

function vowelorNot(ch)
{
    if(ch== 'a' || ch<='e' || ch== 'i' || ch=='o' || ch=='u' || ch=='I' || ch =='A' || ch=='E' || ch=='O' || ch=='U')
    {
      document.write("its vowel<br>")
    }
    else
    {
       document.write("its not a vowel <br>")
    }
}
let value='k'
vowelorNot(value)
  

function valueOf(total,used)
{
   return total-used
}
let total=33
let used= 10
 let res=valueOf(total,used)
 document.write(res)

