function showDialogError(msg) {
  const e = document.getElementById("dialogError");
  e.textContent = msg;
  e.style.display = "inline-block";
}

window.onload = ()=>{


    const toggleDialogs = document.querySelectorAll(".toggleDialog");
    const dialog = document.querySelector("dialog");
    const okBtn = document.getElementById("okBtn");
    const inviteInput = document.getElementById("inviteCode");


    dialog.close(); // ensure it starts closed

    toggleDialogs.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            dialog.showModal();
        });
    });

    okBtn.addEventListener("click", () => {
        showDialogError("Invalid invite code");
    });

    cancelBtn.addEventListener("click", () => {
        inviteInput.value = "";
        dialogError.style.display = "none";
        dialog.close();
        });
    

}