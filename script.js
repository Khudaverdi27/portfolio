const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

    for (const link of tablinks) {
        link.classList.remove("active-link");
    }
    for (const content of tabcontents) {
        content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")

    document.getElementById(tabname).classList.add("active-tab");

}
