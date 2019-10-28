import '@/directives/waves/waves.css'

export default{
    bind(el,binding) {
        el.addEventListener('click', e => {
            let opts = {
                color: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
            };
            if(el){
                el.style.position = 'relative'
                el.style.overflow = 'hidden'
                let rect = el.getBoundingClientRect()
                let ripple = el.querySelector('.waves-ripple')
                if(!ripple){
                    ripple = document.createElement('span')
                    ripple.className = 'waves-ripple'
                    ripple.style.height = Math.max(rect.width, rect.height) + 'px'
                    ripple.style.width = Math.max(rect.width, rect.height) + 'px'
                    el.appendChild(ripple)
                }else{
                    ripple.className = 'waves-ripple'
                }
                ripple.style.top = (e.clientY - rect.top - ripple.offsetHeight / 2) + 'px'
                ripple.style.left = (e.clientX - rect.left - ripple.offsetWidth / 2) + 'px'
                ripple.style.backgroundColor = opts.color
                ripple.className = 'waves-ripple z-active'
            }
        }, false)
    }
}
