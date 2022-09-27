const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
       
        
    });
})

const hiddenEl1 = document.querySelectorAll('.hidden-content1');
hiddenEl1.forEach((el)=>observer.observe(el))
const hiddenEl2 = document.querySelectorAll('.hidden-content2');
hiddenEl2.forEach((el)=>observer.observe(el))
const hiddenEl3 = document.querySelectorAll('.hidden-content3');
hiddenEl3.forEach((el)=>observer.observe(el))
const hiddenEl= document.querySelectorAll('.hidden-title');
hiddenEl.forEach((el)=>observer.observe(el))
