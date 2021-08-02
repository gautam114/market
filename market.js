

    
    var sr=1;
function count(){
    document.getElementById('span').innerHTML=sr;
    
    sr++;
};


function sell(){
    document.getElementById('Register').style.display="block";
    
    document.getElementById('dd.n').innerHTML=document.getElementById('mn').value;
    document.getElementById('dd.p').innerHTML=document.getElementById('mp').value;
document.getElementById('dd.city').innerHTML=document.getElementById('mcity').value;
let available=document.getElementById('mcheck');
if(available.checked){
    document.getElementById('dd.ava').innerHTML="avaliable";
}else{
    document.getElementById('dd.ava').innerHTML=" not avaliable";

}

}
function submit(){
    document.getElementById('submit').innerHTML="submit succesfull";
}


function login(){

    document.getElementById('profile').innerHTML=document.getElementById('ln').value;

}
/*
<script type="text/javascript">


let sr=1;

function minus1(){
    if(sr>=1){
    sr--;
    document.getElementById('page1').value=sr;
    document.getElementById('page1').style.color="black";
    let rate=document.getElementById('rate1').innerHTML;
    document.getElementById("rate1").innerHTML=(parseInt(rate)-3000);
    //document.write(rate);
     }
}
function plus1(){

if(sr>=5){
    document.getElementById('page1').style.color="red";
}
else{
    sr++;
    
    document.getElementById('page1').value=sr;
    let rate=document.getElementById('rate1').innerHTML;
    document.getElementById("rate1").innerHTML=(parseInt(rate)+3000);
}
}
sr2=1;
function minus2(){
    if(sr2>=1){
        sr2--;
        document.getElementById('page2').value=sr2;
        document.getElementById('page2').style.color="black";
      let rate=  document.querySelector('#rate2').innerHTML;
      document.querySelector('#rate2').innerHTML=(parseInt(rate)-2000);
    }
}
    function plus2(){
        if(sr2>=5){
            document.querySelector('#page2').style.color="red";
        }
        else{
            sr2++;
            document.querySelector("#page2").value=sr2;
            let rate=document.querySelector('#rate2').innerHTML;
            document.querySelector('#rate2').innerHTML=(parseInt(rate)+2000);
        }
    }

</script>




*/ 