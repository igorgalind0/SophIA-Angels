const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalDesc = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");
const modalLink = document.getElementById("modal-link");

const members = document.querySelectorAll(".time-list li");

members.forEach(member => {
    member.addEventListener("click", () => {
        const img = member.querySelector("img").src;
        const name = member.querySelector("h1").innerText;
        const desc = member.querySelector("p").innerText;
        const linkElement = member.querySelector("a");
        const link = linkElement ? linkElement.href : "";

        modalImg.src = img;
        modalName.textContent = name;
        modalDesc.textContent = desc;

        if (link) {
            modalLink.href = link;
            modalLink.textContent = "Ver LinkedIn";
            modalLink.style.display = "inline-block";
        } else {
            modalLink.href = "";
            modalLink.textContent = "";
            modalLink.style.display = "none";
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
};
