//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=20; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFF0F0"; colorButton="#CF5F81"; colorText="#000000"; colorSele="#FFDCB9";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien! Ten presente atender a las recomendacones para elaborar tus trabajos."; messageTime=""; messageError="Se presenta el reto de abordar lo expuesto en el Manual de citas y referencias."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]]; var imaSel=0; texSel=0;
var original="Citas-Referencias_Trabaj_Acad_resources/media/original.jpg";
var board=[["Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UxXzE=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UyXzE=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UzXzE=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2U0XzE=.jpg"],["Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UxXzI=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UyXzI=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UzXzI=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2U0XzI=.jpg"],["Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UxXzM=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UyXzM=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UzXzM=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2U0XzM=.jpg"],["Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UxXzQ=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UyXzQ=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UzXzQ=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2U0XzQ=.jpg"],["Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UxXzU=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UyXzU=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2UzXzU=.jpg","Citas-Referencias_Trabaj_Acad_resources/media/cGllY2U0XzU=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Q2l0YXMtUmVmZXJlbmNpYXNfVHJhYmFqX0FjYWQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
