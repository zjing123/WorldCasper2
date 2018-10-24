/*返回 TOP 功能*/
$(document).ready(function () {
    $.goup({
        trigger: 100,
        containerColor: '#e67e22',
        bottomOffset: 20,       //距底部偏移量
        locationOffset: 30,     //距右部偏移量
        title: '返回顶部',
        titleAsText: false,       //是否显示title,
        zIndex: 2000
    });
});

