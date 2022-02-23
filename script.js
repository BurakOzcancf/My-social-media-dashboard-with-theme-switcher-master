function darkMode(){
    let checkbox=document.getElementById("modeCheck");
    let body=document.querySelector("body");
    let cards=document.querySelectorAll(".hero__cards")
    let numbers=document.querySelectorAll(".hero__numbers")
    let text=document.querySelectorAll(".text")
    let username=document.querySelectorAll(".hero__username")
    let header=document.querySelector("header")
    let card2=document.querySelectorAll(".features__card")
    let rate=document.querySelectorAll(".features__rate")
    let overviewtext=document.querySelectorAll(".features__text")
    if (checkbox.checked){
        body.style.background="hsl(230, 17%, 14%)";
        header.style.background="hsl(232, 19%, 15%)";
        header.style.color="white";
        for(i=0;i<cards.length;i++){
            cards[i].style.background="hsl(228, 28%, 20%)"    
        }
        for(i=0;i<numbers.length;i++){
            numbers[i].style.color="white"    
        }
        for(i=0;i<text.length;i++){
            text[i].style.color="hsl(228, 34%, 66%)"    
        }
        for(i=0;i<username.length;i++){
            username[i].style.color="hsl(228, 34%, 66%)"    
        }
        for(i=0;i<card2.length;i++){
            card2[i].style.background="hsl(228, 28%, 20%)"
        }
        for(i=0;i<rate.length;i++){
            rate[i].style.color="white"
        }
        for(i=0;i<overviewtext.length;i++){
            overviewtext[i].style.color="hsl(228, 12%, 44%)"
        }

    }
    else{
        body.style.background="white"
        header.style.color="hsl(230, 17%, 14%)"
        header.style.background="hsl(225, 100%, 98%)"
        for(i=0;i<cards.length;i++){
            cards[i].style.background="hsl(227, 47%, 96%)";
        }
        for(i=0;i<numbers.length;i++){
            numbers[i].style.color="hsl(230, 17%, 14%)"    
        }
        for(i=0;i<text.length;i++){
            text[i].style.color="hsl(228, 12%, 44%)"    
        }
        for(i=0;i<username.length;i++){
            username[i].style.color="hsl(228, 12%, 44%)"    
        }
        for(i=0;i<card2.length;i++){
            card2[i].style.background="hsl(227, 47%, 96%)"
            card2[i].style.color="hsl(230, 17%, 14%)"
        }
        for(i=0;i<rate.length;i++){
            rate[i].style.color="hsl(230, 17%, 14%)"
        }
        for(i=0;i<overviewtext.length;i++){
            overviewtext[i].style.color="hsl(228, 34%, 66%)"
        }
    }
}
