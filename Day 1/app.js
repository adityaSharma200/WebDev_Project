let sc1 = document.getElementsByTagName("h2")[0];
let sc2 = document.getElementsByTagName("h2")[1];
let btn = document.getElementsByClassName("point-2")[0];
let btn1 = document.getElementsByClassName("point-2")[1];

let btp3 = document.getElementsByClassName("point-3")[0];
let btp4 = document.getElementsByClassName("point-3")[1];

console.log(btp3);
let count1 = 0 ;
let count2 = 0 ;
btn.addEventListener("click", (e) =>
{
    count1 += 2;
    sc1.innerHTML = count1 ;
});
btn1.addEventListener("click", (e) =>
    {
        count2 += 2;
        sc2.innerHTML = count2 ;
    });

    btp3.addEventListener("click", (e) =>
        {
            count1 += 3;
            sc1.innerHTML = count1 ;
        });

        btp4.addEventListener("click", (e) =>
            {
                count2 += 3;
                sc2.innerHTML = count2 ;
            });



let sub1 =document.getElementById("submit1");
let sub2 =document.getElementById("submit2");
let score1 = 0
sub1.addEventListener("click",e => {
    score1 = count1;
    count1 = 0;
    sc1.innerHTML = count1 ;
});

let score2 = 0
sub2.addEventListener("click",e => {
    score2 = count2;
    count2 = 0;
    sc2.innerHTML = count2 ;
});

let end = document.getElementById("End");
let res = document.getElementById("result");
// console.log(res);
end.addEventListener("click",() =>{


        if(score1 > score2 )
        {
           let x = score1 - score2 ;
            res.innerHTML = `Team - A won match with ${Math.abs(x)} Run.`;
        }
        else if(score1 < score2)
        {
            let y = score1 - score2 ;
            res.innerHTML =`Team - B won match with ${Math.abs(y)} Run.`;
        }
        else
        {
            res.innerHTML =`Match Are Tied`;
        }
       
      
     
         
});
    