function addListener() {
    $("div a").click(function (event) {
        var btnID = this.id;
        var navSection = btnID + "Section";
        $("html, body").animate({
            scrollTop: $("#" + navSection).offset().top
        },1500);
        console.log("Click ", navSection);
    });
}

$('document').ready(function() {
    addListener();
    console.log("Page Loaded.");
    $(".signIn").click(function (e) {
        ModalMaker.CreateSignInModal("Sign in Now!");
        // console.log("Hello World");
    });
});