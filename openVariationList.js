javascript:(()=>{
    var targets = document.getElementsByClassName('rav-parent-asin-row rav-component-table-expander-row');
    if(targets.length < 1) return;
    for (let item of targets) {
        setTimeout(() =>{
            item.click();
            item.scrollIntoView({
                behavior: 'auto',
                block: 'center',
            });
        }, 0);
    }
})();
