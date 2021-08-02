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
        var cot = 0;
        var uncoverd_counter = 0;
        var coverd_counter = 360;
        var random = this.random;
        Array.prototype.forEach.call(this.blocks1, function (block) {
            block.addEventListener('click', function () {


                    if (random.includes(parseInt(block.id))) {
                        for (var i in random) {
                            let id = document.getElementById(random[i]);
                            // console.log(id);
                            id.innerHTML = '';
                            var img = document.createElement("img");
                            img.classList.add("img");
                            img.src = 'bomb.png';
                            id.appendChild(img);
                            uncoverd_counter += 1;
                            coverd_counter -= 1;
                            // console.log(coverd_counter, uncoverd_counter);
                            document.getElementById("input1").value = "number of uncoverd boxes " + uncoverd_counter;
                            document.getElementById("input").value = "number of coverd boxes " + coverd_counter;
                        }
                    }
                    else if (random.includes(parseInt(block.id) - 1) || random.includes(parseInt(block.id) + 1) || random.includes(parseInt(block.id) - 18) || random.includes(parseInt(block.id) + 18) || random.includes(parseInt(block.id) - 19) || random.includes(parseInt(block.id) + 19) || random.includes(parseInt(block.id) - 20) || random.includes(parseInt(block.id) + 20)) {
                        check(parseInt(block.id));
                        
                    }

                    else {
                        
                        // console.log(block);
                        block.style.backgroundColor = "blue";
                        if (cot < 1) {
                            let list = [1, -1, 20, -20, 19, -19, 18, -18];
                            for (let i = 0; i < 8; i++) {
                                // console.log(parseInt(block.id) + list[i] * 2, block.id);
                                let w = parseInt(block.id) + list[i] * 2;
                                if (random.includes(w)){
                                    console.log(parseInt(block.id) + list[i]);
                                    check(parseInt(block.id) + list[i]);
                                    console.log(parseInt(block.id) + list[i]);
                                }
                                else {
                                    // console.log(parseInt(block.id) + list[i]);
                                    let id = document.getElementById(parseInt(block.id) + list[i]);
                                    // console.log(id);
                                    id.style.backgroundColor = "blue";
                                }
                            }
                            cot = 1;
                            // uncoverd_counter += 1;
                            // coverd_counter -= 1;
                            // // console.log(coverd_counter, uncoverd_counter);
                            // document.getElementById("input1").value = "number of uncoverd boxes " + uncoverd_counter;
                            // document.getElementById("input").value = "number of coverd boxes " + coverd_counter;
                        }


                    }
                    function check(blockid) {
                        var count = 0;
                        console.log(blockid);
                        if (blockid % 19 == 0 || (blockid + 1) % 19 == 0) {
                            if (blockid % 19 == 0) {
                                var list = [1, 20, -18, -19, 19];
                                for (let i = 0; i < 5; i++) {
                                    if (random.includes(blockid + list[i])) {
                                        count += 1;
                                        // console.log(blockid, blockid + list[i]);
                                    }

                                }
                            }
                            else {
                                var list = [-1, -20, 18, -19, 19];
                                for (let i = 0; i < 5; i++) {
                                    if (random.includes(blockid + list[i])) {
                                        count += 1;
                                        // console.log(blockid, blockid + list[i]);
                                    }

                                }

                            }


                        }
                        else {
                            var list = [1, -1, 20, -20, 19, -19, 18, -18];
                            for (let i = 0; i < 8; i++) {
                                if (random.includes(blockid + list[i])) {
                                    count += 1;
                                    // console.log(block.id, parseInt(block.id) + list[i]);
                                }

                            }
                        }
                        var blo = document.getElementById(blockid);
                        if (count == 0) {
                            blo.style.backgroundColor = 'blue';
                        }
                        else {
                            blo.innerHTML = count;
                        }
                        uncoverd_counter += 1;
                        coverd_counter -= 1;
                        // console.log(coverd_counter, uncoverd_counter);
                        document.getElementById("input1").value = "number of uncoverd boxes " + uncoverd_counter;
                        document.getElementById("input").value = "number of coverd boxes " + coverd_counter;
                        count = 0;
                    }
                


            });
        });
        // console.log(this.blocks1);
    }



   

    // need a function to assing the bombs to blocks
    generaterandom(limit1 = 50) {
        while (this.random.length < limit1) {
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

        // console.log(this.random.length);
    }

    // this finction is to assign the values for the blocks next to the bombs

    // assignhints(){


    // }



    // need funcction to change the dificulty level of the game by increasing the number of the bombs
    // gameDificulty{

    // }


    // pathFindingAlgho{

    // }




}


let gameplay = new game_play();
gameplay.generatearray();
gameplay.afterclick();

function limit(){
    let limits = document.querySelectorAll(".button");
        var limit1 = 50;
        
        Array.prototype.forEach.call(limits, function (limit) {
            limit.addEventListener('click', function () {
                limit.style.backgroundColor = '#4666FF';
                limit1 = parseInt(limit.value);
                console.log(limit1);
                gameplay.generaterandom(limit1);
                });
            });

    return limit1

}

        
