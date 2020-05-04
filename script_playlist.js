class Stack {
  constructor() {
    this.artiste = [];
    this.album = [];
    this.genremsc = [];
    this.lienmsc = [];
    this.top = null;
    this.size = 0;
  }

  // Push Method
  Push() {
    // Get singer From Input
    var pushinputsinger = document.getElementById("push-input-singer");

    // Get title From Input
    var pushinputtitle = document.getElementById("push-input-title");

    // ****************************

    var genre;
    var r1 = document.getElementById("radio1").checked;
    var r2 = document.getElementById("radio2").checked;
    var r3 = document.getElementById("radio3").checked;
    var r4 = document.getElementById("radio4").checked;

    var section_1_content_1 = document.getElementById('section_1_content_1');
    
    var im;
    if (r1) {
      genre = "Rap";
      im = "rap.jpg";
      section_1_content_1.innerHTML = `<img src=${im} />`;

    } else if (r2 == true) {
      genre = "Pop";
      im = "pop.png";
      section_1_content_1.innerHTML = `<img src=${im} />`;
    } else if (r3 == true) {
      genre = "Classique";
      im = "classique.jpg";
      section_1_content_1.innerHTML = `<img src=${im} />`;
    } else if (r4 == true) {
      genre = "Chaabi";
      im = "b.jpg";
      section_1_content_1.innerHTML = `<img src=${im} />`;
    } else {
      genre = "null";
      im = "null.jpg";
    }

    // Get Data From Input
    var pushInput = document.getElementById("push-input");

    // Get singer
    var artiste = document.getElementById("singer");

    // Get title
    var album = document.getElementById("title");

    var genremsc = document.getElementById("genre");

    // Get Result
    var result = document.getElementById("result");

    var teble_playlist = document.getElementById("teble_playlist");

    //-------------------------------------//

    // Top Button
    var topButton = document.getElementById("top-button");

    // Pop Button
    var popButton = document.getElementById("pop-button");

    var dequeueButton = document.getElementById("rmv_f");

    if (pushInput.value.length > 0) {
      this.size++;
      this.top = this.size;
      
      //*************************

      this.artiste[this.top] = pushinputsinger.value;
      this.album[this.top] = pushinputtitle.value;
      this.genremsc[this.top] = genre;
      this.lienmsc[this.top] = pushInput.value;

      artiste.innerHTML = this.artiste[this.top];
      album.innerHTML = this.album[this.top];
      genremsc.innerHTML = this.genremsc[this.top];
      result.innerHTML =
        '<audio controls><source src="' +
        this.lienmsc[this.top] +
        '" type="audio/mpeg"></audio>';

      teble_playlist.innerHTML =
        "<tr><th>Artiste</th><th>Abum</th><th>Genre</th></tr><tr><td>" +
        this.artiste[this.top] +
        "</td><td>" +
        this.album[this.top] +
        "</td><td>" +
        this.genremsc[this.top] +
        "</td></tr>";
        section_1_content_1.innerHTML = `<img src=${im} />`;

      //*************************
      popButton.disabled = false;

      dequeueButton.disabled = false;
      console.log('---------------');
      console.log('top:'+this.top);
      console.log('size:'+this.size);
    }

    // If stack contains two elements enable bottom button
    if (this.size >= 2) {
      bottomButton.disabled = false;
    }
  }

  // Pop Method
  Pop() {
    // Get singer
    var artiste = document.getElementById("singer");

    // Get title
    var album = document.getElementById("title");

    var genremsc = document.getElementById("genre");

    var teble_playlist = document.getElementById("teble_playlist");

    // Get Result
    var result = document.getElementById("result");

    //-------------------------------------//

    // Pop Button
    var popButton = document.getElementById("pop-button");

    var dequeueButton = document.getElementById("rmv_f");

    var bottomButton = document.getElementById("bottom-button");

    var topButton = document.getElementById("top-button");

    var section_1_content_1 = document.getElementById('section_1_content_1');

    if (this.size == 1) {
      //-------------------------------------//
      popButton.disabled = true;
      dequeueButton.disabled = true;
      bottomButton.disabled = true;
      topButton.disabled = true;
      //-------------------------------------//
      artiste.innerHTML = "Vide";
      album.innerHTML = "Vide";
      genremsc.innerHTML = "Vide";
      result.innerHTML = "Playlist Vide";
      section_1_content_1.innerHTML = `<img src="null.jpg" />`;
      //-------------------------------------//
      this.artiste.splice(this.top);
      this.album.splice(this.top);
      this.genremsc.splice(this.top);
      this.lienmsc.splice(this.top);
      this.size--;
      this.top = this.size;
      
      //-------------------------------------//
      
    } else {
      // delete this.stack[this.size];

      this.artiste.splice(this.size);
      this.album.splice(this.size);
      this.genremsc.splice(this.size);
      this.lienmsc.splice(this.size);
      this.size--;
      this.top = this.size;
      

      artiste.innerHTML = this.artiste[this.size];
      album.innerHTML = this.album[this.size];
      genremsc.innerHTML = this.genremsc[this.size];
      result.innerHTML =
        '<audio controls><source src="' +
        this.lienmsc[this.size] +
        '" type="audio/mpeg"></audio>';
      teble_playlist.innerHTML =
        "<tr><th>Artiste</th><th>Abum</th><th>Genre</th></tr><tr><td>" +
        this.artiste[this.size] +
        "</td><td>" +
        this.album[this.size] +
        "</td><td>" +
        this.genremsc[this.size] +
        "</td></tr>";

        // **********************************

        var im;
        if (this.genremsc[this.size] == "Rap") {
          // genre = "Rap";
          im = "rap.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;

        } else if (this.genremsc[this.size] == "Pop") {
          // genre = "Pop";
          im = "pop.png";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.size] == "Classique") {
          // genre = "Classique";
          im = "classique.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.size] == "Chaabi") {
          // genre = "Chaabi";
          im = "b.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else {
          // genre = "null";
          im = "null.jpg";
        }

        section_1_content_1.innerHTML = `<img src=${im} />`;

      bottomButton.disabled = false;
      topButton.disabled = true;
      //-------------------------------------//
      console.log('---------------');
      console.log('top:'+this.top);
      console.log('size:'+this.size);
    } 
  }
  dequeue(){

    var artiste = document.getElementById("singer");

    // Get title
    var album = document.getElementById("title");

    var genremsc = document.getElementById("genre");

    var teble_playlist = document.getElementById("teble_playlist");

    // Get Result
    var result = document.getElementById("result");

    //-------------------------------------//

    // Pop Button
    var popButton = document.getElementById("pop-button");

    var dequeueButton = document.getElementById("rmv_f");

    var section_1_content_1 = document.getElementById('section_1_content_1');

    if(this.size==1){
    
    //-------------------------------------//
    popButton.disabled = true;
    dequeueButton.disabled = true;
    bottomButton.disabled = true;
    topButton.disabled = true;
    //-------------------------------------//
    artiste.innerHTML = "Vide";
    album.innerHTML = "Vide";
    genremsc.innerHTML = "Vide";
    result.innerHTML = "Playlist Vide";
    section_1_content_1.innerHTML = `<img src="null.jpg" />`;
    teble_playlist.innerHTML =
        "<tr><th>Artiste</th><th>Abum</th><th>Genre</th></tr><tr><td>Vide</td><td>Vide</td><td>Vide</td></tr>";
    //-------------------------------------//
    this.artiste.shift();
    this.album.shift();
    this.genremsc.shift();
    this.lienmsc.shift();

    this.top--;
    this.size--;
    //-------------------------------------//
    console.log('---------------');
    console.log('top:'+this.top);
    console.log('size:'+this.size);
    }else{
      this.artiste.shift();
      this.album.shift();
      this.genremsc.shift();
      this.lienmsc.shift();

      this.top = 1;
      this.size--;

      artiste.innerHTML = this.artiste[this.top];
      album.innerHTML = this.album[this.top];
      genremsc.innerHTML = this.genremsc[this.top];

      result.innerHTML =
        '<audio controls><source src="' +
        this.lienmsc[this.top]+
        '" type="audio/mpeg"></audio>';
      teble_playlist.innerHTML =
        "<tr><th>Artiste</th><th>Abum</th><th>Genre</th></tr><tr><td>" +
        this.artiste[this.top] +
        "</td><td>" +
        this.album[this.top] +
        "</td><td>" +
        this.genremsc[this.top] +
        "</td></tr>";
        
        var im;
        if (this.genremsc[this.top] == "Rap") {
          // genre = "Rap";
          im = "rap.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;

        } else if (this.genremsc[this.top] == "Pop") {
          // genre = "Pop";
          im = "pop.png";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.top] == "Classique") {
          // genre = "Classique";
          im = "classique.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.top] == "Chaabi") {
          // genre = "Chaabi";
          im = "b.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else {
          // genre = "null";
          im = "null.jpg";
        }

        section_1_content_1.innerHTML = `<img src=${im} />`;

        //-------------------------------------//
        topButton.disabled = false;
        bottomButton.disabled = true;
        console.log('---------------');
        console.log('top:'+this.top);
        console.log('size:'+this.size);
    }
  }
  // Top Method
  getPeak() {
    // Get singer
    var artiste = document.getElementById("singer");

    // Get title
    var album = document.getElementById("title");

    var genremsc = document.getElementById("genre");

    // Get Result
    var result = document.getElementById("result");
    var teble_playlist = document.getElementById("teble_playlist");

    var section_1_content_1 = document.getElementById('section_1_content_1');

    //-----------------------------//

    // pop button
    var topButton = document.getElementById("top-button");

    // check if we are not arrive to top one
    if (this.top == Number(this.lienmsc.length - 1)) {
      topButton.disabled = true;
      //-----------------------------//
      artiste.innerHTML = this.artiste[this.size];
      album.innerHTML = this.album[this.size];
      genremsc.innerHTML = this.genremsc[this.size];
      result.innerHTML =
        '<audio controls><source src="' +
        this.lienmsc[this.size] +
        '" type="audio/mpeg"></audio>';
      teble_playlist.innerHTML =
        "<tr><th>Artiste</th><th>Abum</th><th>Genre</th></tr><tr><td>" +
        this.artiste[this.size] +
        "</td><td>" +
        this.album[this.size] +
        "</td><td>" +
        this.genremsc[this.size] +
        "</td></tr>";

        // *********************************************

        var im;
        if (this.genremsc[this.size] == "Rap") {
          // genre = "Rap";
          im = "rap.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;

        } else if (this.genremsc[this.size] == "Pop") {
          // genre = "Pop";
          im = "pop.png";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.size] == "Classique") {
          // genre = "Classique";
          im = "classique.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.size] == "Chaabi") {
          // genre = "Chaabi";
          im = "b.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else {
          // genre = "null";
          im = "null.jpg";
        }


        section_1_content_1.innerHTML = `<img src=${im} />`;

      //-------------------------//

      bottomButton.disabled = false;
      //-------------------------------------//
      console.log('---------------');
      console.log('top:'+this.top);
      console.log('size:'+this.size);
    } else {
      this.top++;

      artiste.innerHTML = this.artiste[this.top];
      album.innerHTML = this.album[this.top];
      genremsc.innerHTML = this.genremsc[this.top];
      result.innerHTML =
        '<audio controls><source src="' +
        this.lienmsc[this.top] +
        '" type="audio/mpeg"></audio>';
      teble_playlist.innerHTML =
        "<tr><th>Artiste</th><th>Abum</th><th>Genre</th></tr><tr><td>" +
        this.artiste[this.top] +
        "</td><td>" +
        this.album[this.top] +
        "</td><td>" +
        this.genremsc[this.top] +
        "</td></tr>";

        // *********************************************

        var im;
        if (this.genremsc[this.top] == "Rap") {
          // genre = "Rap";
          im = "rap.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;

        } else if (this.genremsc[this.top] == "Pop") {
          // genre = "Pop";
          im = "pop.png";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.top] == "Classique") {
          // genre = "Classique";
          im = "classique.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.top] == "Chaabi") {
          // genre = "Chaabi";
          im = "b.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else {
          // genre = "null";
          im = "null.jpg";
        }

        section_1_content_1.innerHTML = `<img src=${im} />`;
      
      //-------------------------------------//
      bottomButton.disabled = false;     
      //-------------------------------------//
      console.log('---------------');
      console.log('top:'+this.top);
      console.log('size:'+this.size);
    }

    if (this.top == Number(this.lienmsc.length - 1)) {
      topButton.disabled = true;
    }
  }

  // Low Mothod
  getLow() {
    // Get singer
    var artiste = document.getElementById("singer");

    var teble_playlist = document.getElementById("teble_playlist");

    // Get title
    var album = document.getElementById("title");

    var genremsc = document.getElementById("genre");
    var imageC = document.getElementById("imageC");

    // Get Result
    var result = document.getElementById("result");


    var section_1_content_1 = document.getElementById('section_1_content_1');
  
    //-----------------------------//

    // top button
    var topButton = document.getElementById("top-button");

    // bottom button
    var bottomButton = document.getElementById("bottom-button");

    // check if we are in firt value at bottom
    if (this.size == 0) {
      
      artiste.innerHTML = this.artiste[this.size];
      album.innerHTML = this.album[this.size];
      genremsc.innerHTML = this.genremsc[this.size];
      result.innerHTML =
        '<audio controls><source src="' +
        this.lienmsc[this.size] +
        '" type="audio/mpeg"></audio>';
      teble_playlist.innerHTML =
        "<tr><th>Artiste</th><th>Abum</th><th>Genre</th></tr><tr><td>" +
        this.artiste[this.size] +
        "</td><td>" +
        this.album[this.size] +
        "</td><td>" +
        this.genremsc[this.size] +
        "</td></tr>";

        // ***************************************

        var im;
        if (this.genremsc[this.size] == "Rap") {
          // genre = "Rap";
          im = "rap.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.size] == "Pop") {
          // genre = "Pop";
          im = "pop.png";
          section_1_content_1.innerHTML = `<img src=${im} />`;
          // alert(genre);
        } else if (this.genremsc[this.size] == "Classique") {
          // genre = "Classique";
          im = "classique.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else if (this.genremsc[this.size] == "Chaabi") {
          // genre = "Chaabi";
          im = "b.jpg";
          section_1_content_1.innerHTML = `<img src=${im} />`;
        } else {
          // genre = "null";
          im = "null.jpg";
        }

        section_1_content_1.innerHTML = `<img src=${im} />`;

        bottomButton.disabled = true;
        topButton.disabled = true;

      //-------------------------------------//
      console.log('---------------');
      console.log('top:'+this.top);
      console.log('size:'+this.size);
    } else {
        if (this.top == 1) {
          bottomButton.disabled = true;
        }
        else if (this.top > 1) {
          this.top--;

          artiste.innerHTML = this.artiste[this.top];
          album.innerHTML = this.album[this.top];
          genremsc.innerHTML = this.genremsc[this.top];
          result.innerHTML =
            '<audio controls><source src="' +
            this.lienmsc[this.top] +
            '" type="audio/mpeg"></audio>';
          teble_playlist.innerHTML =
            "<tr><th>Artiste</th><th>Abum</th><th>Genre</th></tr><tr><td>" +
            this.artiste[this.top] +
            "</td><td>" +
            this.album[this.top] +
            "</td><td>" +
            this.genremsc[this.top] +
            "</td></tr>";

            // *****************************************

            var im;
            if (this.genremsc[this.top] == "Rap") {
              // genre = "Rap";
              im = "rap.jpg";
              section_1_content_1.innerHTML = `<img src=${im} />`;

            } else if (this.genremsc[this.top] == "Pop") {
              // genre = "Pop";
              im = "pop.png";
              section_1_content_1.innerHTML = `<img src=${im} />`;
            } else if (this.genremsc[this.top] == "Classique") {
              // genre = "Classique";
              im = "classique.jpg";
              section_1_content_1.innerHTML = `<img src=${im} />`;
            } else if (this.genremsc[this.top] == "Chaabi") {
              // genre = "Chaabi";
              im = "b.jpg";
              section_1_content_1.innerHTML = `<img src=${im} />`;
            } else {
              // genre = "null";
              im = "null.jpg";
            }


            section_1_content_1.innerHTML = `<img src=${im} />`;
            //-------------------------------------//
            console.log('---------------');
            console.log('top:'+this.top);
            console.log('size:'+this.size);
        }
      
    }
    topButton.disabled = false;
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
function Push() {
  st.Push();
}

// Pop Function
function Pop() {
  st.Pop();
}

// Peak function
function Peak() {
  st.getPeak();
}

// Low Function
function Low() {
  st.getLow();
}

function deQueue() {
  st.dequeue();
}
