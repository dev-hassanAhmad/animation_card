
var One={
            "name":"Jupitor",
            "header":"Leverage",
            "description":"The third key element in striking the perfect recipe for personal balance is Leverage. Justlike the planet Jupiter, which is known for expansion, growth, luck, and consequentialproductivity, it’s essential to leverage the tools and productivity hacks to work smarter and get time back. So, I invite you to ponder, where are you spending time needlessly? Arethere tasks that seem to drag on that could be delegated? Or is there perhaps a resource or tool you could explore to simplify a particularly draining task?"
}
var Two={
            "name":"Mars",
            "header":"Engage in YOU:",
            "description":"The seventh key element in finding and maintaining your optimum balance is Engagement in YOU. Just as Mars is the ruling planet of decisive action, it is time for you to take a fiery step in self-acceptance and love. It’s time to start putting yourself first...guilt free. Let me say that again, it’s time to put YOU first. NO guilt. So, ask yourself. Where are you putting others first? What would truly putting you — your needs, your dreams, your wants — first look like? What boundaries need to be placed to do so? How can you remind yourself to do this when you forget?"
        }
        var Three={
            "name":"venus",
            "header":"community",
            "description":" The first key element in achieving a healthy sustainable state of balance is Community You might be the sole person running your business, but life (and work) are not meant to be done in isolation. Just as Venus, planet of love, beauty, and connection, is a symbol of the importance of finding your tribe, every mentor you admire is a symbol of the great work that happens when you find the right support and accountability. No success hasever happened in a vacuum. So whether it’s the soulful or strategic components of your life and work that need tending, don’t be afraid to actively seek mentorship and accountability. The right people around you truly make all the difference and give you the momentum you need to achieve that perfect balance recipe. So, who in your life (or that you’ve encountered in books or online) makes you feel seen, heard, encouraged? Who gives you positive energy or keeps you accountable to your goals? How can you intentionally seek out and surround yourself with more of this type of support?"
        }
        var Four={
            "name":"venus",
            "header":"community",
            "description":" The first key element in achieving a healthy sustainable state of balance is Community You might be the sole person running your business, but life (and work) are not meant to be done in isolation. Just as Venus, planet of love, beauty, and connection, is a symbol of the importance of finding your tribe, every mentor you admire is a symbol of the great work that happens when you find the right support and accountability. No success hasever happened in a vacuum. So whether it’s the soulful or strategic components of your life and work that need tending, don’t be afraid to actively seek mentorship and accountability. The right people around you truly make all the difference and give you the momentum you need to achieve that perfect balance recipe. So, who in your life (or that you’ve encountered in books or online) makes you feel seen, heard, encouraged? Who gives you positive energy or keeps you accountable to your goals? How can you intentionally seek out and surround yourself with more of this type of support?"
        }
        var Five={
            "name":"venus",
            "header":"community",
            "description":" The first key element in achieving a healthy sustainable state of balance is Community You might be the sole person running your business, but life (and work) are not meant to be done in isolation. Just as Venus, planet of love, beauty, and connection, is a symbol of the importance of finding your tribe, every mentor you admire is a symbol of the great work that happens when you find the right support and accountability. No success hasever happened in a vacuum. So whether it’s the soulful or strategic components of your life and work that need tending, don’t be afraid to actively seek mentorship and accountability. The right people around you truly make all the difference and give you the momentum you need to achieve that perfect balance recipe. So, who in your life (or that you’ve encountered in books or online) makes you feel seen, heard, encouraged? Who gives you positive energy or keeps you accountable to your goals? How can you intentionally seek out and surround yourself with more of this type of support?"
        }
        var Six={
            "name":"venus",
            "header":"community",
            "description":" The first key element in achieving a healthy sustainable state of balance is Community You might be the sole person running your business, but life (and work) are not meant to be done in isolation. Just as Venus, planet of love, beauty, and connection, is a symbol of the importance of finding your tribe, every mentor you admire is a symbol of the great work that happens when you find the right support and accountability. No success hasever happened in a vacuum. So whether it’s the soulful or strategic components of your life and work that need tending, don’t be afraid to actively seek mentorship and accountability. The right people around you truly make all the difference and give you the momentum you need to achieve that perfect balance recipe. So, who in your life (or that you’ve encountered in books or online) makes you feel seen, heard, encouraged? Who gives you positive energy or keeps you accountable to your goals? How can you intentionally seek out and surround yourself with more of this type of support?"
        }
        var Seven={
            "name":"venus",
            "header":"community",
            "description":" The first key element in achieving a healthy sustainable state of balance is Community You might be the sole person running your business, but life (and work) are not meant to be done in isolation. Just as Venus, planet of love, beauty, and connection, is a symbol of the importance of finding your tribe, every mentor you admire is a symbol of the great work that happens when you find the right support and accountability. No success hasever happened in a vacuum. So whether it’s the soulful or strategic components of your life and work that need tending, don’t be afraid to actively seek mentorship and accountability. The right people around you truly make all the difference and give you the momentum you need to achieve that perfect balance recipe. So, who in your life (or that you’ve encountered in books or online) makes you feel seen, heard, encouraged? Who gives you positive energy or keeps you accountable to your goals? How can you intentionally seek out and surround yourself with more of this type of support?"
        }
var spreaded=false;
var shuffled=false;
var num_shuffled=0
function shuffle() {
if(num_shuffled%2==0){
if(spreaded==false){
    const cardList=[".card-1",".card-2",".card-3",".card-4",".card-5",".card-6",]
    if(document.querySelector(".card-1"))

    var shuffleArray=[]
    shuffleArray.length=0;
    while(shuffleArray.length < 3){

    var n = Math.floor(Math.random() * 6);
    if(shuffleArray.indexOf(n) === -1) shuffleArray.push(n);
                
    }
            
    document.querySelector(cardList[shuffleArray[0]]).classList.add("shuffle")
    document.querySelector(cardList[shuffleArray[1]]).classList.add("shuffle2")
    document.querySelector(cardList[shuffleArray[2]]).classList.add("shuffle3")
    shuffled=true;
    }
    else{

    }
    }
    else{
    if(spreaded==false){
    const cardList=[".card-1",".card-2",".card-3",".card-4",".card-5",".card-6",]
        if(document.querySelector(".card-1"))

        var shuffleArray=[]
        shuffleArray.length=0;
        while(shuffleArray.length < 3){

            var n = Math.floor(Math.random() * 6);
            if(shuffleArray.indexOf(n) === -1) shuffleArray.push(n);
                
        }
            
            
        document.querySelector(cardList[shuffleArray[0]]).classList.add("shuffle_1")

        document.querySelector(cardList[shuffleArray[1]]).classList.add("shuffle_2")

        document.querySelector(cardList[shuffleArray[2]]).classList.add("shuffle_3")
        shuffled=true;
        }
        else{

        }

    }

            

    }

document.querySelector(".deck-cards").addEventListener("click", spread);

    function spread() {
        if(shuffled==true){
            console.log(document.querySelector(".shuffle"))
            console.log(document.querySelector(".shuffle2"))
            console.log(document.querySelector(".shuffle3"))
            document.querySelector(".shuffle").classList.add("resetPosition")
            document.querySelector(".shuffle2").classList.add("resetPosition")
            document.querySelector(".shuffle3").classList.add("resetPosition")


            document.querySelector(".shuffle").classList.remove("shuffle")
            document.querySelector(".shuffle2").classList.remove("shuffle2")
            document.querySelector(".shuffle3").classList.remove("shuffle3")
            console.log(document.querySelector(".shuffle"))
            console.log(document.querySelector(".shuffle2"))
            console.log(document.querySelector(".shuffle3"))

            shuffled=false;
        }
        else{

        }

        const buttonColor=document.querySelector(".shuffleButton");
        buttonColor.style.backgroundColor = "grey";
        console.log(shuffled)
        spreaded=true;
        var card_One = document.querySelector('.card-1');
        var card_Two = document.querySelector('.card-2');
        var card_Three = document.querySelector('.card-3');
        var card_Four = document.querySelector('.card-4');
        var card_Five = document.querySelector('.card-5');
        var card_Six = document.querySelector('.card-6');
        var card_Seven= document.querySelector('.card-7');


        card_One.classList.add("spread");
        card_Two.classList.add("spread")
        card_Three.classList.add("spread")
        card_Four.classList.add("spread")
        card_Five.classList.add("spread")
        card_Six.classList.add("spread")
        card_Seven.classList.add("spread")

        if(card_One.classList[3]=="reverse"){
        card_One.classList.remove("reverse");
        card_Two.classList.remove("reverse")
        card_Three.classList.remove("reverse")
        card_Four.classList.remove("reverse")
        card_Five.classList.remove("reverse")
        card_Six.classList.remove("reverse")
        card_Seven.classList.remove("reverse")

        
        
    }
        }






    function selected(info){
        if(spreaded==false){
            console.log("if function")

        }
        else{

            console.log(spreaded)
        card_info="."+info.classList[1]
        console.log(info.childNodes[5].childNodes[1].textContent)
        
        const blank=document.querySelector(".deck-card")
        const cards=document.querySelector(".cards")

        cards.remove()
        
        
        const divFront=document.createElement("div")
        divFront.classList.add("front")
        const frontImg=document.createElement("img")
        frontImg.src=document.querySelector(card_info).childNodes[3].childNodes[1].src;
        frontImg.width="300";
        frontImg.height="450";
        divFront.appendChild(frontImg)

        const divBack=document.createElement("div")
        divBack.classList.add("backImg")
        const backImg=document.createElement("img")
        backImg.src="assets/img/Mercury-Front.png";
        backImg.width="300px"
        backImg.height="450px"
        divBack.appendChild(backImg)

        const div=document.createElement("div")
        div.classList.add("cards")
        div.appendChild(divFront)
        div.appendChild(divBack)
        blank.appendChild(div)


            
        var h2=document.createElement("h2")
        var name = document.createTextNode(info.childNodes[5].childNodes[1].textContent)
        h2.appendChild(name)
        var h3=document.createElement("h3")
        var header = document.createTextNode(info.childNodes[5].childNodes[3].textContent)
        h3.appendChild(header)
        var p=document.createElement("p")
        var description=document.createTextNode(info.childNodes[5].childNodes[5].textContent)
        p.appendChild(description)
        var selected_description=document.querySelector(".selected-card-description")
        selected_description.remove()
        const selectedDescription=document.createElement("div")
        selectedDescription.classList.add("selected-card-description")

        selectedDescription.appendChild(h2)
        selectedDescription.appendChild(h3)
        selectedDescription.appendChild(p)
        const divDesc=document.querySelector(".selected-card-single")
        divDesc.appendChild(selectedDescription)


 
        


        

        
        }


        
       



        }



 
//RESET 



        function reset() {
        document.querySelector(".cards").remove()
        document.querySelector(".selected-card-description").remove()

        const selectedCardDescription=document.createElement("div")
        selectedCardDescription.classList.add("selected-card-description")
        const cardReset=document.createElement("div")
        cardReset.classList.add("cards")
        document.querySelector(".deck-card").appendChild(cardReset)
        document.querySelector(".deck-card").appendChild(selectedCardDescription)


        spreaded=false;
        shuffled=false;
        const buttonColor=document.querySelector(".shuffleButton");
        buttonColor.style.backgroundColor = "green";
        var card_One = document.querySelector('.card-1');
        var card_Two = document.querySelector('.card-2');
        var card_Three = document.querySelector('.card-3');
        var card_Four = document.querySelector('.card-4');
        var card_Five = document.querySelector('.card-5');
        var card_Six = document.querySelector('.card-6');
        var card_Seven= document.querySelector('.card-7');
        card_One.classList.add("reverse");
        card_Two.classList.add("reverse")
        card_Three.classList.add("reverse")
        card_Four.classList.add("reverse")
        card_Five.classList.add("reverse")
        card_Six.classList.add("reverse")
        card_Seven.classList.add("reverse")

        card_One.classList.remove("spread");
        card_Two.classList.remove("spread")
        card_Three.classList.remove("spread")
        card_Four.classList.remove("spread")
        card_Five.classList.remove("spread")
        card_Six.classList.remove("spread")
        card_Seven.classList.remove("spread")
        
        var shuffleLength=document.querySelectorAll(".shuffle");
        console.log(shuffleLength)
        if (shuffleLength.length>0){

            for (let i = 0; i<shuffleLength.length;i++){                
            
            document.querySelector(".shuffle").classList.remove("shuffle")
            document.querySelector(".shuffle2").classList.remove("shuffle2")
            document.querySelector(".shuffle3").classList.remove("shuffle3")
        console.log(shuffleLength)

            }

        }

        }

        
    
