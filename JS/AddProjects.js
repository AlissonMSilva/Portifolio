//Array com o caminho de cada imagem dos meus projetos adicione um novo caminho para um novo projeto
var imgs=['./Img/BannerJogodaVelha.png',"./Img/BannerChamaORubens.png","./Img/BannerJoJoAdventure.png"];
var downloadImg='./Img/Jogar.png';
var github='./Img/Github.png';
var size="12%";
// nome da parte final da url de cada projeto, adicione um novo para ter o link estabelecido deve estar na mesma ordem do array de imgs
var links=['jogo-da-velha','chamaorubens','jotaroadventures'];
function CreateDivs()
{
    for(var i=0;i<imgs.length;i++)
    {
        var div=document.createElement('div');
        div.className+="col-lg-4 col-md-6";
        div.id+=i.toString();
        document.getElementById("games").appendChild(div); 
        div.classList.add('anime');
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
        var newImg=new Image(),imgEngine=new Image(),imgPlatform=new Image();

        var container=document.getElementById('container'+i.toString());
        var div=document.createElement('div');
        var div2=document.createElement('div');
        newImg.src=imgs[i];
        newImg.style.width="100%";
        newImg.style.padding="10px";
        imgEngine.src='./Img/iconGameMaker.png';
        imgEngine.style.width=size;
        imgEngine.style.marginLeft="10px";
        imgPlatform.src="./Img/HtmlLogo.png";
        imgPlatform.style.width=size;
        container.appendChild(newImg);
        container.appendChild(imgEngine);
        container.appendChild(imgPlatform);
        div.id+="download"+i.toString();
        container.appendChild(div2);
        container.appendChild(div);
        container.style.borderRadius="15px";
        container.style.width="320px";
        container.style.height="310px";
        container.style.backgroundColor="#6d758d";
        container.style.margin="auto";
        container.style.marginTop="20px";

        
    }
}
function CreateDownload()
{
    for(var i=0;i<links.length;i++)
    {
        var newImg=new Image();
        var newLink=document.createElement('a');
        newImg.src=downloadImg;
        newLink.setAttribute('href','https://morfeudev.itch.io/'+links[i]);
        newLink.setAttribute('target',"_blank");
        newLink.appendChild(newImg);
        newLink.style.marginLeft="20%";
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
