const banner = document.getElementsByClassName("banner")[0]
const blocks = document.getElementsByClassName("blocks")

for (let i = 0; i < 200; i++) {
    banner.innerHTML += `<div class="blocks" style="--x: ${i % 20}; --y: ${Math.floor(i / 20)}"></div>`
    const delay = Math.random() * 6
    blocks[i].style.animationDelay = delay + 's'
    blocks[i].style.zIndex = Math.ceil(delay)
}