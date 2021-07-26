// mine sweeper game main js code

var container = document.getElementById("container");
var blocks = document.querySelectorAll(".block");
// var img = document.createElement("img");
// img.classList.add("img");
// img.src = 'bomb.png';
class game_play {
    constructor() {
        this.blocks = blocks;
        this.container = container;
        this.blocks1 = document.getElementsByClassName('block');
        this.random = [];
        // this.img = img;
        
        
    }


    generatearray() {
        for (var i = 0; i <= 360; i++) {
            //   var value = Math.ceil(Math.random() * 100);

            // Creating element div
            var array_ele = document.createElement("div");

            // Adding class 'block' to div
            array_ele.classList.add("block");
            array_ele.id = i;

            // Creating label element for displaying
            // size of particular block
            // var array_ele_label =
            // document.createElement("label");
            // array_ele_label.classList.add("block"+i);
            //   array_ele_label.innerText = value;

            // Appending created elements to index.html
            // array_ele.appendChild(array_ele_label);
            this.container.appendChild(array_ele);


        }
        // this.afterclick();
    }


    afterclick() {
        this.generaterandom();
        // var blocks1 = document.getElementsByClassName('block');
        var uncoverd_counter = 0;
        var coverd_counter = 360;
        var random = this.random;
        Array.prototype.forEach.call(this.blocks1, function (block) {
            block.addEventListener('click', function () {

                if (random.includes(parseInt(block.id)) ) {
                    block.innerHTML = '';
                    var img = document.createElement("img");
                    img.classList.add("img");
                    img.src = 'bomb.png';
                    block.appendChild(img);
                    uncoverd_counter += 1;
                    coverd_counter -= 1;
                    // console.log(coverd_counter, uncoverd_counter);
                    document.getElementById("input1").value = "number of uncoverd boxes " + uncoverd_counter;
                    document.getElementById("input").value = "number of coverd boxes " + coverd_counter;

                }
                else if(random.includes(parseInt(block.id) - 1) ||  random.includes(parseInt(block.id ) + 1) || random.includes(parseInt(block.id) - 18) ||  random.includes(parseInt(block.id ) + 18) || random.includes(parseInt(block.id) - 19) ||  random.includes(parseInt(block.id ) + 19) || random.includes(parseInt(block.id) - 17) ||  random.includes(parseInt(block.id ) + 17) ) {
                    var count = 0;
                    var list = [1,-1,20,-20,19,-19,18,-18];
                    for (let i = 0; i < 8; i++){
                        if ( random.includes(parseInt(block.id) + list[i])){
                            count +=1;
                            console.log(block.id, parseInt(block.id) + list[i]);
                        }

                    }
                    block.innerHTML = count;
                    uncoverd_counter += 1;
                    coverd_counter -= 1;
                    // console.log(coverd_counter, uncoverd_counter);
                    document.getElementById("input1").value = "number of uncoverd boxes " + uncoverd_counter;
                    document.getElementById("input").value = "number of coverd boxes " + coverd_counter;
                    count = 0;
                }
                else {
                    block.style.backgroundColor = "blue";
                    uncoverd_counter += 1;
                    coverd_counter -= 1;
                    // console.log(coverd_counter, uncoverd_counter);
                    document.getElementById("input1").value = "number of uncoverd boxes " + uncoverd_counter;
                    document.getElementById("input").value = "number of coverd boxes " + coverd_counter;


                }


            });
        });
        // console.log(this.blocks1);
    }



   

    // need a function to assing the bombs to blocks
    generaterandom() {

        while (this.random.length < 100) {
            var value = Math.ceil(Math.random() * 1000);
            if (this.random.includes(value)){
                value = Math.ceil(Math.random() * 1000)
            }
            else if (value > 0 && value < 360) {
                this.random.push(value);
                // var blocks2 = document.getElementById(value);
                //     console.log(value, blocks2);

                //     blocks2.innerHTML = "bomb";
                //     blocks2.style.color = 'transparent';

            }

        }

        // console.log(this.random.length, this.random);
    }

    // this finction is to assign the values for the blocks next to the bombs

    assignhints(){


    }



    // need funcction to change the dificulty level of the game by increasing the number of the bombs
    // gameDificulty{

    // }


    // pathFindingAlgho{

    // }




}


let gameplay = new game_play();
gameplay.generatearray();
gameplay.afterclick();


