const TimeLine=gsap.timeline({
    defaults:{
        ease:"ease",
        duration:1
    }
})

const CartTimeLine=gsap.timeline({
    defaults:{
        ease:"ease",
        duration:1
    }
})

const StraTimeLine=gsap.timeline({
    defaults:{
        ease:"ease",
        duration:1
    }
})

const webAnimation=()=>{
    TimeLine.from('nav',{
        opacity:0,
    })
    TimeLine.from('.sneakers',{
        opacity:0,
        x:1000,
        duration:0.5
    })
    TimeLine.from('.hero .Nike-container',{
        opacity:0,
        x:-300,
        duration:0.4
    })
    TimeLine.from('.hero .info-and-price',{
        opacity:0,
        x:-300,
        duration:0.6
    })
    TimeLine.from('.hero .info-and-price .price-container .price',{
        opacity:0,
        scale:0,
        duration:0.3
    })
    TimeLine.from('.hero .info-and-price .price-container .Buy-btn',{
        opacity:0,
        scale:0,
        duration:0.3
    })
    cardAnimation()
}
const cardAnimation=()=>{
    var Cards=document.querySelectorAll('.card')
    Cards.forEach(card=>{
        const CardRate=card
    .closest('.card')
    .querySelectorAll('.rate-icon')
        TimeLine.from(card,{
            scale:0,
            duration:0.2,
            opacity:0
        })
        CardRate.forEach(star=>{
            TimeLine.from(star,{
                scale:2,
                duration:0.2,
                opacity:0
            })
        })
    })
    
}
setTimeout(()=>{
let  Loader=document.querySelector('.loader-container')
    Loader.style.display="none";
    webAnimation()
},2000)
