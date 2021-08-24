var picture=document.getElementById("Perfil");
var home=document.getElementById("Home");
var divObj=document.getElementById("games");
var nav=document.getElementById("navbar");
var con=[];
console.log(con);
var i=0;
var max=false;
setInterval(function(){
    Color();
  }, 250);
function Color()
{
    var color=[
        'DB4035','FF9933','FAD000','AFB83B','7ECC49','299438','6ACCBC','158FAD',
        '14AAF5','96C3EB','4073FF','884DFF','AF38EB','EB96EB','E05194','B8255F'];
    
    if(i<=color.length)
    {
        i++;
        if(i>=color.length)
        {
            i=0;
        }
    }
    for(var x=0;x<imgs.length;x++)
    {
        var elements=document.getElementById("container"+x);
        con[x]=elements;
        con[x].style.filter="drop-shadow(0px 0px 15px #"+color[i]+")";
        con[x].style.border="solid #"+color[i]+" 4px";
    }
    nav.style.filter="drop-shadow(0px 0px 8px #"+color[i]+")";
    home.style.filter="drop-shadow(0px 0px 15px #"+color[i]+")";
    picture.style.border="solid #"+color[i]+" 4px";
    picture.style.filter="drop-shadow(0px 0px 15px #"+color[i]+")";
}
