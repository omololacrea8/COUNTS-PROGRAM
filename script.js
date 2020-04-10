let i = 0;
/* first button for red */
function myFunction() {

        let numb = --i;
        document.getElementById("number").innerHTML = numb;

        //block of code to be executed for condition 1
        if (numb > 0) {
            document.getElementById("number").style.color = "green";
           }
           else if (numb < 0){
               document.getElementById("number").style.color = "red";
           }
           else {
               document.getElementById("number").style.color = "pink";
           }

    };
    
/*second button for green*/
    function myFunction2(){
        let numb = ++i;
        document.getElementById("number").innerHTML = numb;

        //block of code to be executed for condition 1
        if (numb > 0) {
            document.getElementById("number").style.color = "green";
           }
           else if (numb < 0){
               document.getElementById("number").style.color = "red";
           }
           else {
               document.getElementById("number").style.color = "pink";
           }

    };
   