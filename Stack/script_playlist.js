class Stack{
    constructor(){
        // this.stack = [];
        // this.singer = [];
        // this.title = [];

        // **********************
        this.artiste = [];
        this.album = [];
        this.genremsc = [];
        this.lienmsc = []; // this.stack = [];

        this.top = null;
        this.size = 0;
    }

    // Push Method
    Push(){

        // Get singer From Input
        var pushinputsinger = document.getElementById("push-input-singer");


        // Get title From Input
        var pushinputtitle = document.getElementById("push-input-title");





        // ****************************

        var genre;
        var r1 = document.getElementById('radio1').checked;
        var r2 = document.getElementById('radio2').checked;
        var r3 = document.getElementById('radio3').checked;
        var r4 = document.getElementById('radio4').checked;
        if (r1 ==true) {
            genre= "Rap";
            // alert(genre);
        }
        else if (r2 ==true) {
            genre= "Pop";
            // alert(genre);
        }
        else if (r3 ==true) {
            genre= "Classique";
            // alert(genre);
        }
        else if (r4 ==true) {
            genre= "Chaabi";
            // alert(genre);
        }
        else{
            genre= "nulle";
            // alert(genre);
        }




        // ****************************



        // Get Data From Input
        var pushInput = document.getElementById("push-input");

        //-------------------------------------//

        
















        // Get title From Input
        // var pushinputtitle = document.getElementById("push-input-title");

        //-------------------------------------//



        // Get singer
        var artiste = document.getElementById("singer");




        // Get title
        var album = document.getElementById("title");



        var genremsc = document.getElementById("genre");



        // Get Result
        var result = document.getElementById("result");





        //-------------------------------------//

        
        

        //-------------------------------------//





        // Top Button
        var topButton = document.getElementById("top-button");

        // Pop Button
        var popButton = document.getElementById("pop-button");

        if (pushInput.value.length > 0){

            this.top++;
            this.size++;





        //*************************
        
        this.artiste[this.top] = pushinputsinger.value;
        this.album[this.top] = pushinputtitle.value;
        this.genremsc[this.top] = genre;
        this.lienmsc[this.top] = pushInput.value;



            // this.stack[this.top] = pushInput.value;

            // this.singer[this.top] = pushinputsinger.value;

            // this.title[this.top] = pushinputtitle.value;

            // Set result
            // result.innerHTML = this.stack[this.top];
            // result.innerHTML = '<img src="'+this.stack[this.top]+'" >';



            artiste.innerHTML = this.artiste[this.top];
            album.innerHTML = this.album[this.top];
            genremsc.innerHTML = this.genremsc[this.top];
            result.innerHTML = '<audio controls><source src="'+this.lienmsc[this.top]+'" type="audio/mpeg"></audio>';


            //------------------------//

            // singer.innerHTML = this.singer[this.top];


            // title.innerHTML = this.title[this.top];


            //-----------------------//



            // topButton.disabled = true;
            popButton.disabled = false;

            // console.log("Top (Push) : " + this.top);
            // console.log("Size (Push) : " + this.size);

        }

        // If stack contains two elements enable bottom button
        if (this.size >= 2){
            bottomButton.disabled = false;
        }
    }

    // Pop Method
    Pop(){




        // // Get singer From Input
        // var pushinputsinger = document.getElementById("push-input-singer");


        // // Get title From Input
        // var pushinputtitle = document.getElementById("push-input-title");





        // // ****************************

        // var genre;
        // var r1 = document.getElementById('radio1').checked;
        // var r2 = document.getElementById('radio2').checked;
        // var r3 = document.getElementById('radio3').checked;
        // var r4 = document.getElementById('radio4').checked;
        // if (r1 ==true) {
        //     genre= "Rap";
        //     // alert(genre);
        // }
        // else if (r2 ==true) {
        //     genre= "Pop";
        //     // alert(genre);
        // }
        // else if (r3 ==true) {
        //     genre= "Classique";
        //     // alert(genre);
        // }
        // else if (r4 ==true) {
        //     genre= "Chaabi";
        //     // alert(genre);
        // }
        // else{
        //     genre= "nulle";
        //     // alert(genre);
        // }




        // // ****************************



        // // Get Data From Input
        // var pushInput = document.getElementById("push-input");

        // //-------------------------------------//

        
















        // Get title From Input
        // var pushinputtitle = document.getElementById("push-input-title");

        //-------------------------------------//



        // Get singer
        var artiste = document.getElementById("singer");




        // Get title
        var album = document.getElementById("title");



        var genremsc = document.getElementById("genre");



        // Get Result
        var result = document.getElementById("result");































        // //***********************************************************
        // // Get Data From Input
        // var pushInput = document.getElementById("push-input");



        // //-------------------------------------//

        // // Get singer From Input
        // var pushinputsinger = document.getElementById("push-input-singer");

        // // Get title From Input
        // var pushinputtitle = document.getElementById("push-input-title");

        // //-------------------------------------//




        // //***********************************************************
        // Get Result
        // var result = document.getElementById("result");


        //-------------------------------------//

        // Get singer
        // var singer = document.getElementById("singer");

        // Get title
        // var title = document.getElementById("title");

        //-------------------------------------//


        // Pop Button
        var popButton = document.getElementById("pop-button");

        if (this.size == 1){
            popButton.disabled = true;
            artiste.innerHTML = "ma";
            album.innerHTML = "b9a";
            genremsc.innerHTML = "walo";
            result.innerHTML = "Playlist is empty";
        }else{
            // delete this.stack[this.size];



            this.artiste.splice(this.top);
            this.album.splice(this.top);
            this.genremsc.splice(this.top);
            this.lienmsc.splice(this.top);
            this.top--;
            this.size--;


            artiste.innerHTML = this.artiste[this.top];
            album.innerHTML = this.album[this.top];
            genremsc.innerHTML = this.genremsc[this.top];
            result.innerHTML = '<audio controls><source src="'+this.lienmsc[this.top]+'" type="audio/mpeg"></audio>';







            // this.stack.splice(this.top);
            // this.singer.splice(this.top);
            // this.title.splice(this.top);
            // this.top--;
            // this.size--;
            // result.innerHTML = this.stack[this.top];
            // result.innerHTML = '<img src="'+this.stack[this.top]+'" >';
            // result.innerHTML = '<audio controls><source src="'+this.stack[this.top]+'" type="audio/mpeg"></audio>';

            // //------------------------//

            // singer.innerHTML = this.singer[this.top];


            // title.innerHTML = this.title[this.top];

            //-----------------------//


            bottomButton.disabled = false;
            console.log("Size (else pop) : " + this.size);
        }

        console.log("Top (Pop) : " + this.top);
        console.log("Size (Pop) : " + this.size);

        for (var i = 0; i < this.lienmsc.length; i++){
            console.log("Stack: " + this.lienmsc[i]);
        }

        // If stack contains one element disable bottom button
        if (this.size == 1){
            bottomButton.disabled = true;
        }
    }

    // Top Method
    getPeak(){

        // Get singer
        var artiste = document.getElementById("singer");




        // Get title
        var album = document.getElementById("title");



        var genremsc = document.getElementById("genre");



        // Get Result
        var result = document.getElementById("result");


        //****************************



        // // Get Result
        // var result = document.getElementById("result");



        // //-----------------------------//

        // var singer = document.getElementById("singer");

        // var title = document.getElementById("title");

        //-----------------------------//

        // pop button
        var topButton = document.getElementById("top-button");

        console.log("Top (getPeak) : " + this.top);
        console.log("Size (getPeak) : " + this.size);
        console.log("Length (getPeak) : " + Number(this.lienmsc.length - 1));

        // check if we are not arrive to top one 
        if (this.size == Number(this.lienmsc.length-1)){
            topButton.disabled = true;
            // this.top++;
            this.size++;
            // result.innerHTML = this.stack[this.size];
            // result.innerHTML = '<img src="'+this.stack[this.size]+'" >';


            artiste.innerHTML = this.artiste[this.size];
            album.innerHTML = this.album[this.size];
            genremsc.innerHTML = this.genremsc[this.size];
            result.innerHTML = '<audio controls><source src="'+this.lienmsc[this.size]+'" type="audio/mpeg"></audio>';






            // result.innerHTML = '<audio controls><source src="'+this.stack[this.size]+'" type="audio/mpeg"></audio>';

            // //----------------------//

            // singer.innerHTML = this.singer[this.size];


            // title.innerHTML = this.title[this.size];

            //-------------------------//

            bottomButton.disabled = false;
        }else{
            this.size++;
            // result.innerHTML = this.stack[this.size];
            // result.innerHTML = '<img src="'+this.stack[this.size]+'" >';


            artiste.innerHTML = this.artiste[this.size];
            album.innerHTML = this.album[this.size];
            genremsc.innerHTML = this.genremsc[this.size];
            result.innerHTML = '<audio controls><source src="'+this.lienmsc[this.size]+'" type="audio/mpeg"></audio>';



            // result.innerHTML = '<audio controls><source src="'+this.stack[this.size]+'" type="audio/mpeg"></audio>';

            // //-------------------------------//

            // singer.innerHTML = this.singer[this.size];


            // title.innerHTML = this.title[this.size];

            //---------------------------------//
            bottomButton.disabled = false;     
        }

        if(this.size == Number(this.lienmsc.length-1)){
            topButton.disabled = true;
        }
    }

    // Low Mothod
    getLow(){


        // Get singer
        var artiste = document.getElementById("singer");




        // Get title
        var album = document.getElementById("title");



        var genremsc = document.getElementById("genre");



        // Get Result
        var result = document.getElementById("result");

        //***********************************
        // // Get Result
        // var result = document.getElementById("result");

        // //-----------------------------//

        // var singer = document.getElementById("singer");

        // var title = document.getElementById("title");

        //-----------------------------//

        // top button
        var topButton = document.getElementById("top-button");

        // bottom button
        var bottomButton = document.getElementById("bottom-button");

        // check if we are in firt value at bottom
        if(this.size == 0){
            // topButton.disabled = true;
            
            // result.innerHTML = this.stack[this.size];
            // result.innerHTML = '<img src="'+this.stack[this.size]+'" >';



            artiste.innerHTML = this.artiste[this.size];
            album.innerHTML = this.album[this.size];
            genremsc.innerHTML = this.genremsc[this.size];
            result.innerHTML = '<audio controls><source src="'+this.lienmsc[this.size]+'" type="audio/mpeg"></audio>';


            // result.innerHTML = '<audio controls><source src="'+this.stack[this.size]+'" type="audio/mpeg"></audio>';

            // //------------------------------------//

            // singer.innerHTML = this.singer[this.size];


            // title.innerHTML = this.title[this.size];

            //--------------------------------------//
        }else{            
            this.size--;
            // result.innerHTML = this.stack[this.size];
            // result.innerHTML = '<img src="'+this.stack[this.size]+'" >';   


            artiste.innerHTML = this.artiste[this.size];
            album.innerHTML = this.album[this.size];
            genremsc.innerHTML = this.genremsc[this.size];
            result.innerHTML = '<audio controls><source src="'+this.lienmsc[this.size]+'" type="audio/mpeg"></audio>';



            // result.innerHTML = '<audio controls><source src="'+this.stack[this.size]+'" type="audio/mpeg"></audio>';

            // //---------------------------------------//

            // singer.innerHTML = this.singer[this.size];


            // title.innerHTML = this.title[this.size];

            //---------------------------------------//

            // topButton.disabled = false;
            // bottomButton.disabled = true;
        }

        // If we get to last one at the bottom
        // if(this.top == 1 || this.size == 1){
        //     bottomButton.disabled = false;
        // }

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