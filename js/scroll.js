let onCenter = function() {
    //选定当前按钮 并且让他居中
    let centerSpan = document.getElementById('center');
    if (centerSpan) {
        // let letf = centerSpan.offsetLeft;
        let navDiv  = document.getElementById("scroll-nav");
        navDiv.scrollTo(navDiv.clientWidth/2 - 15 - centerSpan.clientWidth/2,0);
    }
}