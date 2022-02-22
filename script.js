function clr(){

  document.getElementById("enter").value="   ";

}
function display(val)
{
    document.getElementById("enter").value+=val;
}


function  equate(){
   let  x=document.getElementById("enter").value;
     let y=eval(x);
     document.getElementById("enter").value=y;
}