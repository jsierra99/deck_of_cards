const shuffleEl = document.querySelector(".shuffle");
const heartsEl = document.querySelectorAll(".hearts");
const spadesEl = document.querySelectorAll(".spades");
const diamondsEl = document.querySelectorAll(".diamonds");
const clubsEl = document.querySelectorAll(".clubs");
const hearts2El = document.querySelectorAll(".hearts2");
const spades2El = document.querySelectorAll(".spades2");
const diamonds2El = document.querySelectorAll(".diamonds2");
const clubs2El = document.querySelectorAll(".clubs2");
const value1El = document.querySelector(".value_1");
const value2El = document.querySelector(".value_2");

const playEl = document.querySelector(".play");//add more buttons for a bj game

const newDeck = getDeck();
shuffleDeck();

let arr2 = [];
let i = 0;
let x = 1;
let bjVal = getValues(i) + getValues(x);
let decide;

function toggleSuit()
{
    shuffleEl.addEventListener("click", function()
    {
        
        checkSuit1(i);
        checkSuit2(x);

        value1El.innerHTML = newDeck[i].Values;
        value2El.innerHTML = newDeck[x].Values;

        i += 2;
        x += 2;
        if(i > 50 || x > 51)
        {
            value1El.innerHTML = "Done!"
            value2El.innerHTML = "Done!"
            
            location.reload();
        }
        
    })
    playEl.addEventListener("click", function()
    {
        playGame(i, x);
    })
}
function playGame(first, second)
{
    window.alert(`Your total is ${bjVal}!`);
    decide = window.prompt("hit or stay?")
    if(decide === "hit")
    {
        bjVal += getValues(first);
        {
            if(bjVal > 21)
            {
                window.alert(`${bjVal}! you went over! you lose!`);
            }
            else if(bjVal === 21)
            {
                window.alert("Black Jack!! you win!")
            }
            else
            {
                bjVal += getValues(second);
            }
        }
    }
    else
    {
        if(bjVal === 21)
        {
            window.alert("Black Jack!! You Win!");
            location.reload();
        }
        else if(bjVal > 21)
        {
            window.alert(`${bjVal}! you went over! you lose!`);
            location.reload();
        }
        else
        {
            window.alert(`Your total is ${bjVal}!`);
            location.reload();
        }
    }
}
function getValues(val)
{
    if(newDeck[val].Values === "A")
    {
        let a = window.prompt("Enter either 1 or 11");
        return Number(a);
    }
    else if(newDeck[val].Values === "K")
    {
        return 10;
    }
    else if(newDeck[val].Values === "Q")
    {
        return 10;
    }
    else if(newDeck[val].Values === "J")
    {
        return 10;
    }
    else if(newDeck[val].Values === "10")
    {
        return 10;
    }
    else if(newDeck[val].Values === "9")
    {
        return 9;
    }
    else if(newDeck[val].Values === "8")
    {
        return 8;
    }
    else if(newDeck[val].Values === "7")
    {
        return 7;
    }
    else if(newDeck[val].Values === "6")
    {
        return 6;
    }
    else if(newDeck[val].Values === "5")
    {
        return 5;
    }
    else if(newDeck[val].Values === "4")
    {
        return 4;
    }
    else if(newDeck[val].Values === "3")
    {
        return 3;
    }
    else if(newDeck[val].Values === "2")
    {
        return 2;
    }
}
function shuffleDeck()
{
   for(let i = 0; i < 100; i++)
   {
       const rand = Math.floor(Math.random() * newDeck.length);
       const rand2 = Math.floor(Math.random() * newDeck.length);
       let tmp = newDeck[rand];

       newDeck[rand] = newDeck[rand2];
       newDeck[rand2] = tmp;
   }
}
function getDeck()
{
    const deck = [];
    const suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for(let s in suit)
    {
        for(let val in value)
        {
            const cards = 
            {
                Suits: suit[s],
                Values: value[val]
            };
            deck.push(cards);

        }
    }
    return deck;
}
function checkSuit1(x)
{
    if(newDeck[x].Suits === "Diamonds")
    {
        for(let s of diamondsEl)
        {
            s.style.display = "block";
        }
        for(let s of spadesEl)
        {
            s.style.display = "none";
        }
        for(let s of heartsEl)
        {
            s.style.display = "none";
        }
        for(let s of clubsEl)
        {
            s.style.display = "none";
        }
    }
    else if(newDeck[x].Suits === "Spades")
    {
        for(let s of spadesEl || spades2El)
        {
            s.style.display = "block";
        }
        for(let s of diamondsEl)
        {
            s.style.display = "none";
        }
        for(let s of heartsEl)
        {
            s.style.display = "none";
        }
        for(let s of clubsEl)
        {
            s.style.display = "none";
        }
    }
    else if(newDeck[x].Suits === "Clubs")
    {
        for(let s of clubsEl)
        {
            s.style.display = "block";
        }
        for(let s of diamondsEl)
        {
            s.style.display = "none";
        }
        for(let s of heartsEl)
        {
            s.style.display = "none";
        }
        for(let s of spadesEl)
        {
            s.style.display = "none";
        }

    }
    else if(newDeck[x].Suits === "Hearts")
    {
        for(let s of heartsEl)
        {
            s.style.display = "block";
        }
        for(let s of diamondsEl)
        {
            s.style.display = "none";
        }
        for(let s of clubsEl)
        {
            s.style.display = "none";
        }
        for(let s of spadesEl)
        {
            s.style.display = "none";
        }
    }
}
function checkSuit2(x)
{
    if(newDeck[x].Suits === "Diamonds")
    {
        for(let s of diamonds2El)
        {
        s.style.display = "block";
        }
        for(let s of spades2El)
        {
            s.style.display = "none";
        }
        for(let s of hearts2El)
        {
            s.style.display = "none";
        }
        for(let s of clubs2El)
        {
            s.style.display = "none";
        }
    }
    else if(newDeck[x].Suits === "Spades")
    {
        for(let s of spades2El)
        {
            s.style.display = "block";
        }
        for(let s of diamonds2El)
        {
            s.style.display = "none";
        }
        for(let s of hearts2El)
        {
            s.style.display = "none";
        }
        for(let s of clubs2El)
        {
            s.style.display = "none";
        }
    }
    else if(newDeck[x].Suits === "Clubs")
    {
        for(let s of clubs2El)
        {
            s.style.display = "block";
        }
        for(let s of diamonds2El)
        {
            s.style.display = "none";
        }
        for(let s of hearts2El)
        {
            s.style.display = "none";
        }
        for(let s of spades2El)
        {
            s.style.display = "none";
        }

    }
    else if(newDeck[x].Suits === "Hearts")
    {
        for(let s of hearts2El)
        {
            s.style.display = "block";
        }
        for(let s of diamonds2El)
        {
            s.style.display = "none";
        }
        for(let s of clubs2El)
        {
            s.style.display = "none";
        }
        for(let s of spades2El)
        {
            s.style.display = "none";
        }
    }
}
toggleSuit();