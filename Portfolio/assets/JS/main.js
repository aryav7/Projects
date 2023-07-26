// SKILLS
const tabs = document.querySelectorAll('[data-target]')
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab =>{
        tab.addEventListener("click",()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills_active')
            })
            target.classList.add('skills_active')

            tabs.forEach(tab => {
                tab.classList.remove('skills_active')
            })
            tab.classList.add('skills_active')
        })
    })

    const linkWork = document.querySelectorAll('.work_item')

    function activeWork(){
        linkWork.forEach(L => l.classList.remove('active-work'))
        this.classList.add('active-work')
    }
    linkWork.forEach(L => L.addEventListener("click",activeWork))

    document.addEventListener("click",(e) => {
        if(e.target.classList.contains("work_button")){
            togglePortfolioPopup();
            portfolioItemDetails(e.target.parentElement);
        }    
    })
    function togglePortfolioPopup(){
        document.querySelector(".portfolio_popup").classList.toggle("open");
    }
    document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup);

    function portfolioItemDetails(portfolioItem){
        document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
        document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
        document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
    }
    const inputs = document.querySelectorAll(".input");

    function focusFunc(){
        let parent = this.parentNode;
        parent.classList.add("focus");
    }
    function blurFunc(){
        let parent = this.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
    }
    inputs.forEach((input)=>{
        input.addEventListener("focus",focusFunc)
        input.addEventListener("blur",blurFunc)
    })

    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll",navHighlighter);

    function navHighlighter(){
       
        let y = window.scrollY;
        
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-50,
        sectionId = current.getAttribute("id");
        if(y> sectionTop && y <= sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active_link")
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active_link")
        }
    })
}
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav_toggle')
    navClose = document.getElementById('nav_close')
    navClose = document.getElementById('sidebar')

    if(navToggle){
        navToggle.addEventListener("click",() =>{
            navMenu.classList.add('show-sidebar')
        })
    }
    if(navClose){
        navClose.addEventListener("click",() =>{
            navMenu.classList.remove('show-sidebar')
        })
    }