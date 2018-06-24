/*var loc1=3, loc2=4, loc3=5;
var guess;
*/
var randomLoc=Math.floor(Math.random()*5);
var loc1=randomLoc;
var loc2=loc1+1;
var loc3=loc2+1;
var hits=0, guesses=0;
var isSunk=false;

while(isSunk==false)
{
	guess=prompt("Ready, Aim, Fire!(enter a no. 0-6): ");
	if(guess<=0||guess>6)
	{
		alert("Invalid cell no.! Please try again");
	}
	else
		{
			guesses+=1;
			if(guess==loc1||guess==loc2||guess==loc3)
			{
				hits+=1;
				alert("HIT!");
				if(hits==3)
				{
					isSunk=true;
					alert("You sank my battleship!");
				}
			}
			else
			{
				alert("MISS!");
			}
		}
}
var stats="You took " + guesses + " guesses to sink the battleship, " + "so ur shooting accuracy was " + (3/guesses);
alert(stats);





