javascript:(()=>{
    var cci = document.getElementsByClassName('custom-control-input');
    if(cci.length < 1) return;
    for (let item of cci) {
        setTimeout(() => {
            item.click();
            item.scrollIntoView({
                behavior: 'auto',
                block: 'center',
            });
        }, 0);
    }
    setTimeout(() => window.scroll({top: 0, behavior: 'smooth'}), 0);
})();
