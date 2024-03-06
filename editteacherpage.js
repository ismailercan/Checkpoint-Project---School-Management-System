
const  removeButton = () => {
    document.querySelectorAll(".removebttn").forEach(bttn =>{
        bttn.addEventListener("click", ()=>{
            const card = bttn.closest(".card");
            card.remove();
        })
    })
};

export default removeButton;