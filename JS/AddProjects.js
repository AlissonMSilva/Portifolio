//Array com o caminho de cada imagem dos meus projetos adicione um novo caminho para um novo projeto
var imgs=['./Img/BannerJogodaVelha.png','./Img/BannerNewPong.png','./Img/BannerSpaceShooter.png'];
var downloadImg='./Img/Download.png';
var emBreve='./Img/emBreve.png';
// nome da parte final da url de cada projeto, adicione um novo para ter o link estabelecido deve estar na mesma ordem do array de imgs
var links=['jogo-da-velha','',''];
function CreateDivs()
{
    for(var i=0;i<imgs.length;i++)
    {
        var div=document.createElement('div');
        div.className+="col-lg-4 col-md-6";
        div.id+=i.toString();
        document.getElementById("games").appendChild(div); 
    }
    CreateSubsDivs();
}
function CreateSubsDivs()
{
    for(var i=0;i<imgs.length;i++)
    {
        var elements=document.getElementById(i);
        var div=document.createElement('div');
        div.id+="container"+i.toString();
        elements.appendChild(div);
    }
    CreateImagens();
    CreateDownload();
}

function CreateImagens()
{
    for(var i=0;i<imgs.length;i++)
    {
        var newImg=new Image();
        var container=document.getElementById('container'+i.toString());
        var div=document.createElement('div');
        var div2=document.createElement('div');
        div2.className+="p-2";
        newImg.src=imgs[i];
        newImg.style.width="100%";
        container.appendChild(newImg);
        div.id+="download"+i.toString();
        container.style.filter="drop-shadow(0px 0px 10px white)";
        container.appendChild(div2);
        container.appendChild(div);
        container.style.border="white 5px solid";
        container.style.borderRadius="15px";
        container.style.width="320px";
        container.style.height="280px";
        container.style.backgroundColor="#6d758d";
        container.style.marginTop="20px";
        container.style.marginLeft="5%";
        
    }
}
function CreateDownload()
{
    for(var i=0;i<links.length;i++)
    {
        var newImg=new Image();
        var newLink=document.createElement('a');
        newImg.src=emBreve;
        if(links[i]!='')
        {
            newImg.src=downloadImg;
            newLink.setAttribute('href','https://morfeudev.itch.io/'+links[i]);
            newLink.setAttribute('target',"_blank");
        }
        newLink.appendChild(newImg);
        newLink.style.position="absolute";
        newLink.style.left="20%";
        newLink.style.bottom="5%";
        document.getElementById('download'+i.toString()).appendChild(newLink);
    }
}

function Effect()
{
    for(var i=0;i<imgs.length;i++)
    {
        var container=document.getElementById('container'+i.toString());
        container.style.filter="drop-shadow(0px 0px 15px white)";

    }
}
