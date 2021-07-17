// mine sweeper game main js code

var container = document.getElementById("container");
var blocks = document.querySelectorAll(".block");
class game_play {
    constructor() {
        this.blocks = blocks;
        this.container = container;
        
        
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
            array_ele_label.classList.add("block");
            //   array_ele_label.innerText = value;

            // Appending created elements to index.html
            array_ele.appendChild(array_ele_label);
            this.container.appendChild(array_ele);


        }
        this.afterclick();
    }


    afterclick() {
        var blocks1 = document.getElementsByClassName('block');
        var uncoverd_counter = 0;
        var coverd_counter = 360;
        Array.prototype.forEach.call(blocks1, function (element) {
            element.addEventListener('click', function () {
                if (element.innerHTML != "1") {
                    element.innerHTML = "1";
                    uncoverd_counter = uncoverd_counter + 1;
                    coverd_counter = coverd_counter - 1;
                    console.log(coverd_counter, uncoverd_counter);
                    document.getElementById("input1").value = "number of uncoverd boxes " + uncoverd_counter;
                    document.getElementById("input").value = "number of coverd boxes " + coverd_counter;

                }


            });
        });
    }


    // need a function to assing the bombs to blocks
    // assignblocks(){

    // }

    // need funcction to change the dificulty level of the game by increasing the number of the bombs
    // gameDificulty{

    // }


    // pathFindingAlgho{

    // }




}


let gameplay = new game_play();
gameplay.generatearray();


