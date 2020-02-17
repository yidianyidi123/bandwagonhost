function go_tan()
{
   // var url = "https://bwh88.net/aff.php?aff=19068&pid=3"; 
    //var cw = window.screen.width - 1;
    //var ch = window.screen.height - 1;
    //win = window.open(url, 'newwindow', 'height=1, width=1, top='+ch+', left='+cw+', toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no');
    //setTimeout("win.close()",5000); 

}





function go_set(){


document.body.onclick = function(){

if(getCookie("time")!=1){ 
go_tan();

setCookie("time",1);

}


}



}



go_set(); 




function setCookie(name,value)
{
    var Days = 1;
    var exp = new Date();
    //exp.setTime(exp.getTime() + Days*24*60*60*1000);
	exp.setTime(exp.getTime() + 72*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();

  
}



function getCookie(name)

{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return (arr[2]);
    else
        return 'null';
}


function delCookie(name){ 
var date=new Date(); 
date.setTime(date.getTime()-10000); 
document.cookie=name+"=;expire="+date.toGMTString(); 
}
