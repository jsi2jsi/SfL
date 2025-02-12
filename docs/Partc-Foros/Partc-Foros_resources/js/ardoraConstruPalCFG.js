//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien!. Estudiar los recursos nos permite mejor comprensión."; messageTime=""; messageError="¡Oh!. Vaya. A estudiar los recursos se ha dicho. "; messageErrorG="¡Oh!. Vaya. A estudiar los recursos se ha dicho. "; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["REVTQVJST0xMQU1PUw==","QVBPUlRFUw==","Q09SUk9CT1JBUg==","UFJPUMOTU0lUTw==","Q0VOVFJBUlNF","TkVUSVFVRVRB","RVNUVURJQVI=","REnDgUxPR08=","UkVTUEVUQVI=","UkVQRVRJUg=="];var cp_ima=["","","","","","","","","",""];var cp_mp3=["","","","","","","","","",""];var cp_ogg=["","","","","","","","","",""];var cp_que=["RW4gZm9yb3MgKHZvbHVjaW9uYW1vcyBpbXBsZW1lbnRhbmRvKSB5IGZvcnRhbGVjZW1vcyBhcHJlbmRpemFqZXM=","TWVkaWFudGUgYV9fX19zICg3KSBjb25zdHJ1aW1vcyBjb25vY2ltaWVudG9z","UGFyYSBwYXJ0aWNpcGFyIGNfX2JfX3IgKDEwKSBxdWUgZXMgZWwgZm9ybyBpbmRpY2Fkbw==","SWRlbnRpZmljYXIgZWwgcF9fX3NfXyAoOSkgZGVsIGZvcm8u","RW4gZm9yb3MgY19fX19lICg5KSBlbiBlbCB0ZW1hIMO6bmljYW1lbnRl","QXBsaWNhciBsYXMgcmVnbGFzIGRlIE5fX19fYSAoOSkuIFNhbHVkYXIsIG5vbWJyZSBjb3JyZWN0bywgY29ycmVjdGEgb3J0b2dyYWbDrWEsIGFwb3J0YW5kbyBkZXRhbGxlcywgY29uIHR1cyBkYXRvcyBxdWUgdGUgaWRlbnRpZmlxdWVuLCBldGMu","RV9fX19yICg4KSBlbCB0ZW1hIGRlbCBmb3JvLCBlbGxvIG5vcyBmb3J0YWxlY2UgcGFyYSBwYXJ0aWNpcGFy","RWwgZF/DoV9fXyAoNykgbWVkaWFudGUgZGF0b3MsIGV4cGVyaWVuY2lhcyB5IGVsIHJlY3VlbnRvIGRlIGlkZWFzIGxvZ3JhZGFzIGRlbCBlc3R1ZGlvIGRlIGxvcyByZWN1cnNvcy4=","Ul9fXyAoOCkgbGFzIG9waW5pb25lcyBxdWUgc2UgcHJlc2VudGVuLiBRdcOpIHR1cyBjb21lbnRhcmlvcyBzZWFuIGNvbnN0cnVjdGl2b3M=","TGVlciBsb3MgbWVuc2FqZXMgcHJldmlvcyBwYXJhIG5vIHJfX19fciAoNykgaW5mb3JtYWNpw7NuLiBFc3RvIHRlIHBlcm1pdGUgcGFydGljaXBhY2lvbmVzIG3DoXMgZW5yaXF1ZWNlZG9yYXM="];var cp_num=[13,7,10,9,9,9,8,7,8,7];var cp_alt=["","","","","","","","","",""];
var wordsGame="UGFydGMtRm9yb3M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
