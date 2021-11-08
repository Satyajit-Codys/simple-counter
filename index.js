varcount = document.getElementById("count");
clickbtn = document.getElementById("countbtn+")
decbtn = document.getElementById("countbtn-")
resetbtn = document.getElementById("rstBtn")
curr_count = 0
clickbtn.addEventListener("click", () =>{
    curr_count++;
    varcount.innerText = curr_count
})
decbtn.addEventListener("click", () =>{
    curr_count--;
    varcount.innerText = curr_count
})
resetbtn.addEventListener("click", () => {
    curr_count = 0
    varcount.innerText = curr_count
})