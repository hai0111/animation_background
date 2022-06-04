const banner = document.getElementsByClassName("banner")[0]
const blocks = document.getElementsByClassName("blocks")

for (let i = 0; i < 200; i++) {
    const delay = Math.random() * 6
    banner.innerHTML +=
        `<div class="blocks" 
        style="
        --x: ${i % 20}; 
        --y: ${Math.floor(i / 20)}; 
        --z: ${Math.ceil(delay)}; 
        --duration: ${delay.toFixed(2) + 's'}">
        </div>`
}

const handleInterval = () => {
    banner.classList.remove("active")
    setTimeout(() => { banner.classList.add("active") }, 10000)
}

handleInterval()

setInterval(handleInterval, 20000)