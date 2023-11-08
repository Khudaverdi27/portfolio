const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("sideMenu");
const btnMore = document.querySelector('.btn-more')
const workList = document.querySelector('.newList')
const msg = document.getElementById('msg');

//form location https://docs.google.com/spreadsheets/d/1THlQDQTbgcI5Ut5RHEXtI7pNkvdua76BN6C6uaF9TAo/edit#gid=0 
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

function openMenu() {
    sideMenu.style.right = '0'
}
function closeMenu() {
    sideMenu.style.right = '-200px'
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzubCsK4x_HIxCgU0OxPuK20R8ToQXQQ0yZhuYeDAmLoTMFPltSz7yPKOKQShGbK9ww/exec';
const form = document.forms['submit-to-google-sheet'];


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
        if (response.ok) {
            msg.textContent = "Message sent successfully!!!";
            setTimeout(() => {
                msg.textContent = "";
                form.reset();
            }, 3000);
        } else {
            console.error('Error! Status:', response.status);
        }
    } catch (error) {
        console.error('Error!', error.message);
    }
});

btnMore.addEventListener('click', () => {
    const element = document.createElement('div');
    element.classList = 'work-list'
    element.innerHTML += `         
    <div class="work">
        <img src="images/work-4.png" alt="work1">
        <div class="layer">
            <h3>To do App</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="https://to-do-project-ten.vercel.app/" target="_blank"><i
                    class="fa-solid fa-link"></i></a>
        </div>
    </div>
    <div class="work">
        <img src="images/work-5.png" alt="work1">
        <div class="layer">
            <h3>CRUD App</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="https://crud-app-dusky-iota.vercel.app/" target="_blank"><i class="fa-solid fa-link"></i></a>
        </div>
    </div>
    <div class="work">
        <img src="images/work-6.png" alt="work1">
        <div class="layer">
            <h3>Tip Calculator</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="https://tip-calculator-seven-nu.vercel.app/" target="_blank"><i class="fa-solid fa-link"></i></a>
        </div>
   `
    workList.appendChild(element)
    btnMore.style.display = "none"
})