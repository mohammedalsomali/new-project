// mine sweeper game main js code
// var container = document.getElementById("container");
var container = document.getElementById("container");
var blocks = document.querySelectorAll(".block");
class game_play {
    constructor() {
        this.blocks = blocks;
        this.container = container;
        this.counter = 0;
        this.uncounter = 360;
    }


    generatearray() {
        for (var i = 0; i <= 360; i++) {
            // Return a value from 1 to 100 (both inclusive)
            //   var value = Math.ceil(Math.random() * 100);

            // Creating element div
            var array_ele = document.createElement("div");

            // Adding class 'block' to div
            array_ele.classList.add("block");

            // Adding style to div
            // array_ele.style.height = `${25}px`;
            // array_ele.style.width = `translate(${25}px)`;

            // Creating label element for displaying
            // size of particular block
            var array_ele_label =
            document.createElement("label");
            array_ele_label.classList.add("block_id" + i);
            //   array_ele_label.innerText = value;

            // Appending created elements to index.html
            array_ele.appendChild(array_ele_label);
            this.container.appendChild(array_ele);


        }
    }


    aftertheclick() {

        Array.prototype.forEach.call(this.blocks, function (block) {
            block.addEventListener('click', function () {
                console.log('data-wow value is: ');
                if (block.innerHTML != "1") {
                    block.innerHTML = "1";
                    this.counter += 1;
                    this.uncounter -= 1
                    updateTextInput();

                }


            });
        });
    }


    updateTextInput() {
        document.getElementById("input1").value = "number of uncoverd boxes " + this.counter;
        document.getElementById("input").value = "number of coverd boxes " + this.uncounter;
        console.log(this.counter, this.uncounter);

    }




}

window.onload = function () {
    // var blocks = document.querySelectorAll(".block");
  
}

let gameplay = new game_play();
gameplay.generatearray();
gameplay.aftertheclick();
gameplay.updateTextInput();

// function generatearray() {
//   for (var i = 0; i <= 360; i++) {
//     // Return a value from 1 to 100 (both inclusive)
//     //   var value = Math.ceil(Math.random() * 100);

//     // Creating element div
//     var array_ele = document.createElement("div");

//     // Adding class 'block' to div
//     array_ele.classList.add("block_" + i);

//     // Adding style to div
//     //   array_ele.style.height = `${}px`;
//     //   array_ele.style.transform = `translate(${i * 30}px)`;

//     // Creating label element for displaying
//     // size of particular block
//     var array_ele_label =
//       document.createElement("label");
//     array_ele_label.classList.add("block_id" + i);
//     //   array_ele_label.innerText = value;

//     // Appending created elements to index.html
//     array_ele.appendChild(array_ele_label);
//     container.appendChild(array_ele);


//   }
// }

// generatearray();

// var blocks = document.getElementsByClassName('block')
// var uncoverd_counter = 0;
// var coverd_counter = 360;
// Array.prototype.forEach.call(blocks, function(element) {
//   element.addEventListener('click', function() {
//     // console.log('data-wow value is: ' + element.dataset.wow);
//     if (element.innerHTML != "1") {
//       element.innerHTML = "1";
//       uncoverd_counter += 1;
//       coverd_counter -= 1
//       updateTextInput(uncoverd_counter, coverd_counter);

//     }
    

//   });
// });

// function updateTextInput(a, b) {
//   document.getElementById("input1").value = "number of uncoverd boxes " + a;
//   document.getElementById("input").value = "number of coverd boxes " + b; 
//   console.log(a, b);

// }