

window.onload = function () {


    let closePopUp = document.querySelectorAll(".closePopUp");

    closePopUp.forEach(element => {
        element.addEventListener("click", popUpImgClose);
    });


    let openPupUp = document.querySelectorAll(".imgWebsiteContainer");

    openPupUp.forEach(element => {
        console.log(element)
        element.addEventListener("click", popUpImg);
    });


// Pop-up melding previews
    function popUpImg() {


        console.log(this.nextElementSibling);
        this.nextElementSibling.classList.add("popUpActive");
        const overlay = document.querySelectorAll(".overlayProjects");

        // popUp.forEach(element => {
        //     element.style.display = "block";
        // });
        overlay.forEach(element => {
            element.style.display = "block";
        });
        // img.forEach(element => {
        //     element.style.display = "block";
        // });


    }

    function popUpImgClose() {


        this.closest(".imgWebsiteContainerPopUp").classList.remove("popUpActive");

        const overlay = document.querySelectorAll(".overlayProjects");


        overlay.forEach(element => {
            element.style.display = "none";
        });


    }

}