
function aclick(i){
	a[i].click();
}
a=$("a[title='赞']");

// alert(a.length)
cnt = a.length;
if (cnt >= 17) cnt = 17;
for (var i = 0; i < cnt; i++) {
	setTimeout("aclick(" + i + ")", 5000*i);
}
alert(cnt + "赞！");