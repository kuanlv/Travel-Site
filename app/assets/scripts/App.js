import '../styles/styles.css'; 
import MobileMenu from './modules/MobileMenu'; 
import RevealOnScroll from './modules/RealOnScroll';
import StickyHeader from './modules/StickyHeader';


new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import('./modules/Modal').then((x) => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("He he"));
        } else {
            modal.openTheModal();
        }
    })
})



if (module.hot) {
    module.hot.accept();
}






