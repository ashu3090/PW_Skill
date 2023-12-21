let readMoreBtn = document.querySelector("#readmore")
console.log(readMoreBtn)
if(readMoreBtn){
    
    readMoreBtn.addEventListener("click", () => {
    
    if (readMoreBtn.innerHTML === "Read More") {
        readMoreBtn.innerHTML = "Read Less";
    } else {
        readMoreBtn.innerHTML = "Read More";
    }
});}
