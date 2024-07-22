import AOS from "aos"
import 'aos/dist/aos.css';

const initAOS=()=>{
    AOS.init({
        duration: 800, // duration of animation
        offset: 200,    // offset (in px) from the original trigger point
        delay: 100,     // delay in ms before the animation starts
        easing: 'ease-in-out', // easing function
        once: true,
    })
}

export default initAOS;