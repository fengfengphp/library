
export default {
    bind(el){
        el.addEventListener('click',event=>{
            el.style.position = 'relative'
            el.style.top = '4px'
            setTimeout(()=>{
                el.style.top = '0'
            },100)
        })
    }
}
