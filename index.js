/* let broj1 = prompt("Unesi prvi broj ");
let broj2 = prompt("Unesi drugi broj ");
if(broj1 > broj2)
{
    alert(broj1 + " je veći od " +broj2);
}
else if(broj1 < broj2)
{
    alert(broj2 + " je manji od " + broj1);
}
else
{
    alert("Brojevi su jednaki");
} */

    let masa = prompt("Unesi masu u kg: ");
    let visina = prompt("Unesi visinu u m");
    let BMI = Math.round (masa/(visina*visina));
alert("Vaš BMI iznosi indeks: " + BMI);