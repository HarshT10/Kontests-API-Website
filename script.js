const dropdowns = document.querySelectorAll(".dropdown")

dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select")
    const caret = dropdown.querySelector(".caret")
    const menu = dropdown.querySelector(".dropdown-menu")

    select.addEventListener("click", () => {
        caret.classList.toggle("caret-rotate")
        menu.classList.toggle("menu-open")
    })
})

const hamburger = document.querySelector(".bar")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-open")
})



let response = fetch("https://kontests.net/api/v1/all");
let cardContainer = document.getElementById("card-container")
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests);
    let ihtml = "";
    let image = "";
    let title = "";
    for (item in contests) {
        console.log(contests[item]);

        if (contests[item].site == "HackerRank") {
            image = "https://nicolasliuprojects.files.wordpress.com/2017/10/hackerrank_logo.png"
        } else if (contests[item].site == "HackerEarth") {
            image = "https://questionpapershub.com/free-job-alert/wp-content/uploads/2021/03/HackerEarth-Logo-1.jpg"
        } else if (contests[item].site == "CodeForces") {
            image = "https://res.cloudinary.com/practicaldev/image/fetch/s--N2_RJe5R--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg"
        }
        else if (contests[item].site == "CodeChef") {
            image = "https://www.justalternativeto.com/wp-content/uploads/2021/07/CodeChef-735x400.jpg"
        }
        else if (contests[item].site == "LeetCode") {
            image = "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9ENjdwZWNlaWJlSVFJRGRNaWJiYW9kN3ZFaG4xRTN2UFNBMEE4N3ROamNLT0MyRm54WVFoeVJpYm5GeVJ0RWRPNXFzZ1VXMXZReDlZaWFQeHBTdFZwWEM4ZVEvNjQw?x-oss-process=image/format,png"
        }
        else if (contests[item].site == "AtCoder") {
            image = "https://th.bing.com/th/id/OIP.6wIIYDHImS7L8spOSn22owAAAA?pid=ImgDet&rs=1"
        }
        else if (contests[item].site == "Kick Start") {
            image = "https://th.bing.com/th/id/R.ac5c9a0b19b9d097c3773012af41762f?rik=haRjvpYMcaQIcA&riu=http%3a%2f%2fwww.logoed.co.uk%2fwp-content%2fuploads%2f2014%2f04%2f22.jpg&ehk=hJFp5SP4sK%2b4YQHaawxYkSF1tud6hXng987i9Ii05rQ%3d&risl=&pid=ImgRaw&r=0"
        }
        else {
            image = "https://th.bing.com/th/id/OIP.4ht5Ir66opgXTUjRl8fn7QHaD3?pid=ImgDet&rs=1"
        }

        let a = 20
        if (contests[item].name.length >= a) {
            title = `${contests[item].name.slice(0, a)}...`
        } else {
            title = contests[item].name
        }

        ihtml += `
                    <div class="card rounded-b-lg shadow-lg shadow-slate-900">
                        <img src=${image} class="w-full h-auto sm:h-[190px] lg:h-[170px]"
                        alt="Site Logo">
                        <div class="py-5 px-4 bg-[#FC9918] rounded-b-lg">
                            <h5 class="contest-title text-xl md:text-xl font-bold mb-1">${title}</h5 >
                            <p class="contest-site text-sm md:text-lg lg:text-base font-semibold"> Contest Organizer: ${contests[item].site}</p>
                            <p class="contest-start text-white text-xs md:text-sm font-bold my-3"> Starts at ${contests[item].start_time}</p>
                            <p class="contest-end text-white text-xs md:text-sm font-bold mb-2"> Ends at ${contests[item].end_time}</p>
                            <p class="contest-status text-sm font-semibold mt-3"> Status: ${contests[item].status}</p>
                            <div class="mt-2 py-1" >
                                <a href="${contests[item].url}" target="_blank" class="contest-url bg-[#0DCAF0] hover:bg-[#4ca2f1] transition ease-in text-white font-semibold text-sm py-2 px-3 rounded-lg hover:shadow-sm hover:shadow-slate-900">Visit Contest</a>
                            </div>
                        </div >
                    </div >
            `
    }

    cardContainer.innerHTML = ihtml;

})