class Stack{
    constructor(){
        this.nomimg = [];
        this.lienimg = [];
        this.tags = [];
        this.top = null;
        this.size = 0;
    }

    // Push Method
    Push(){

        // Get singer From Input
        var pushinputnomimg = document.getElementById("push-input-nom-img");


        // Get Data From Input
        var pushInput = document.getElementById("push-input");


        // Get title From Input
        var pushtags = document.getElementById("push-tags");



        //-------------------------------------//
        // Get nom image
        var nomimg = document.getElementById("nom-img");


        // Get link image
        var lienimg = document.getElementById("lien-img");


        //Get tags image
        var tagsimg = document.getElementById("tags-img");



        // Get Result
        var result = document.getElementById("result");



        // Top Button
        var topButton = document.getElementById("top-button");

        // Pop Button
        var popButton = document.getElementById("pop-button");

        if (pushInput.value.length > 0){

            this.top++;
            this.size++;
            this.nomimg[this.top] = pushinputnomimg.value;
            this.lienimg[this.top] = pushInput.value;
            this.tags[this.top] = pushtags.value;



            //*************************


            nomimg.innerHTML ='<span  style="color: #57606f;" >NOM DE LIMAGE:<span style="color: white;" >'+this.nomimg[this.top]+'</span></span>';
            lienimg.innerHTML ='<span  style="color: #57606f;" >LIEN DE LIMAGE:<span style="color: white;" >'+this.lienimg[this.top]+'</span></span>';
            tagsimg.innerHTML ='<span  style="color: #57606f;" >TAGS ASSOCIES:<span style="color: white;" >'+this.tags[this.top]+'</span></span>';
            result.innerHTML = '<img src="'+this.lienimg[this.top]+'">';


            //------------------------//

     
            popButton.disabled = false;

        }

        // If stack contains two elements enable bottom button
        if (this.size >= 2){
            bottomButton.disabled = false;
        }
    }

    // Pop Method
    Pop(){


        //-------------------------------------//


        // Get singer
        var nomimg = document.getElementById("nom-img");




        // Get title
        var lienimg = document.getElementById("lien-img");



        var tagsimg = document.getElementById("tags-img");



        // Get Result
        var result = document.getElementById("result");


        //-------------------------------------//


        // Pop Button
        var popButton = document.getElementById("pop-button");

        if (this.size == 1){
            popButton.disabled = true;
            nomimg.innerHTML = "";
            lienimg.innerHTML = "";
            tagsimg.innerHTML = "";
            // result.innerHTML = "gallery is empty";
            result.innerHTML = `<img src="null.jpg" />`;
        }else{
            // delete this.stack[this.size];


            this.nomimg.splice(this.top);
            this.lienimg.splice(this.top);
            this.tags.splice(this.top);
            this.top--;
            this.size--;


            // ******************************


            nomimg.innerHTML ='<span  style="color: #57606f;" >NOM DE LIMAGE:<span style="color: white;" >'+this.nomimg[this.top]+'</span></span>';
            lienimg.innerHTML ='<span  style="color: #57606f;" >LIEN DE LIMAGE:<span style="color: white;" >'+this.lienimg[this.top]+'</span></span>';
            tagsimg.innerHTML ='<span  style="color: #57606f;" >TAGS ASSOCIES:<span style="color: white;" >'+this.tags[this.top]+'</span></span>';
            result.innerHTML = '<img src="'+this.lienimg[this.top]+'">';

            //-----------------------//


            bottomButton.disabled = false;
            console.log("Size (else pop) : " + this.size);
        }

        console.log("Top (Pop) : " + this.top);
        console.log("Size (Pop) : " + this.size);

        for (var i = 0; i < this.lienimg.length; i++){
            console.log("Stack: " + this.lienimg[i]);
        }

        // If stack contains one element disable bottom button
        if (this.size == 1){
            bottomButton.disabled = true;
        }
    }

    // Top Method
    getPeak(){

        // Get singer
        var nomimg = document.getElementById("nom-img");




        // Get title
        var lienimg = document.getElementById("lien-img");



        var tagsimg = document.getElementById("tags-img");



        // Get Result
        var result = document.getElementById("result");


        //-----------------------------//

        // pop button
        var topButton = document.getElementById("top-button");

        console.log("Top (getPeak) : " + this.top);
        console.log("Size (getPeak) : " + this.size);
        console.log("Length (getPeak) : " + Number(this.lienimg.length - 1));

        // check if we are not arrive to top one 
        if (this.size == Number(this.lienimg.length-1)){
            topButton.disabled = true;
            // this.top++;
            this.size++;

            nomimg.innerHTML ='<span  style="color: #57606f;" >NOM DE LIMAGE:<span style="color: white;" >'+this.nomimg[this.size]+'</span></span>';
            lienimg.innerHTML ='<span  style="color: #57606f;" >LIEN DE LIMAGE:<span style="color: white;" >'+this.lienimg[this.size]+'</span></span>';
            tagsimg.innerHTML ='<span  style="color: #57606f;" >TAGS ASSOCIES:<span style="color: white;" >'+this.tags[this.size]+'</span></span>';
            result.innerHTML = '<img src="'+this.lienimg[this.size]+'">';

            //-------------------------//

            bottomButton.disabled = false;
        }else{
            this.size++;

            nomimg.innerHTML ='<span  style="color: #57606f;" >NOM DE LIMAGE:<span style="color: white;" >'+this.nomimg[this.size]+'</span></span>';
            lienimg.innerHTML ='<span  style="color: #57606f;" >LIEN DE LIMAGE:<span style="color: white;" >'+this.lienimg[this.size]+'</span></span>';
            tagsimg.innerHTML ='<span  style="color: #57606f;" >TAGS ASSOCIES:<span style="color: white;" >'+this.tags[this.size]+'</span></span>';
            result.innerHTML = '<img src="'+this.lienimg[this.size]+'">';

            //---------------------------------//
            bottomButton.disabled = false;     
        }

        if(this.size == Number(this.lienimg.length-1)){
            topButton.disabled = true;
        }
    }

    // Low Mothod
    getLow(){


        // Get singer
        var nomimg = document.getElementById("nom-img");




        // Get title
        var lienimg = document.getElementById("lien-img");



        var tagsimg = document.getElementById("tags-img");



        // Get Result
        var result = document.getElementById("result");


        //-----------------------------//

        // top button
        var topButton = document.getElementById("top-button");

        // bottom button
        var bottomButton = document.getElementById("bottom-button");

        // check if we are in firt value at bottom
        if(this.size == 0){

            nomimg.innerHTML ='<span  style="color: #57606f;" >NOM DE LIMAGE:<span style="color: white;" >'+this.nomimg[this.size]+'</span></span>';
            lienimg.innerHTML ='<span  style="color: #57606f;" >LIEN DE LIMAGE:<span style="color: white;" >'+this.lienimg[this.size]+'</span></span>';
            tagsimg.innerHTML ='<span  style="color: #57606f;" >TAGS ASSOCIES:<span style="color: white;" >'+this.tags[this.size]+'</span></span>';
            result.innerHTML = '<img src="'+this.lienimg[this.size]+'">';


            //--------------------------------------//
        }else{            
            this.size--;

            nomimg.innerHTML ='<span  style="color: #57606f;" >NOM DE LIMAGE:<span style="color: white;" >'+this.nomimg[this.size]+'</span></span>';
            lienimg.innerHTML ='<span  style="color: #57606f;" >LIEN DE LIMAGE:<span style="color: white;" >'+this.lienimg[this.size]+'</span></span>';
            tagsimg.innerHTML ='<span  style="color: #57606f;" >TAGS ASSOCIES:<span style="color: white;" >'+this.tags[this.size]+'</span></span>';
            result.innerHTML = '<img src="'+this.lienimg[this.size]+'">';
        }

        if(this.size == 1){
            bottomButton.disabled = true;
        }

        console.log("Size (getLow) : " + this.size);
        console.log("Top (getLow) : " + this.top);

        // Enable top button when clicks on bottom button
        topButton.disabled = false;
        // bottomButton.disabled = false;
    }
}

var st = new Stack();

// Disable top and bottom buttons and pop button
var topButton = document.getElementById("top-button");
var bottomButton = document.getElementById("bottom-button");
var popButton = document.getElementById("pop-button");

topButton.disabled = true;
bottomButton.disabled = true;
popButton.disabled = true;

// Push Function
function Push(){
    st.Push();
}

// Pop Function
function Pop(){
    st.Pop();
}

// Peak function
function Peak(){
    st.getPeak();
}

// Low Function
function Low(){
    st.getLow();
}

function test(){
    alert("ok");
}

function test(){
    alert("cc");
}