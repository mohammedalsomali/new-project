// mine sweeper game main js code

var container = document.getElementById("container");
var blocks = document.querySelectorAll(".block");
window.onload = function () {
    
    
    document.getElementById("btn").addEventListener("click", new1);
  
    
  }

class game_play {
    constructor() {
        this.blocks = blocks;
        this.container = container;
        this.blocks1 = [];
        this.random = [];
        
        
    }


    generatearray() {
        for (var i = 0; i <= 360; i++) {
            
            var array_ele = document.createElement("div");

            array_ele.classList.add("block");
            array_ele.id = i;

            
            this.container.appendChild(array_ele);
            


        }
        this.blocks1 = document.querySelectorAll('.block');
        // console.log(this.blocks1);
        this.afterclick();

        
    }


    afterclick() {
        console.log(this.random);
        var cot = 0;
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
                            // uncoverd_counter += 1;
                            // coverd_counter -= 1;
                            // // console.log(coverd_counter, uncoverd_counter);
                            // document.getElementById("input1").value = "number of uncoverd boxes " + uncoverd_counter;
                            // document.getElementById("input").value = "number of coverd boxes " + coverd_counter;
                        }
                    }
                    else if (random.includes(parseInt(block.id) - 1) || random.includes(parseInt(block.id) + 1) || random.includes(parseInt(block.id) - 18) || random.includes(parseInt(block.id) + 18) || random.includes(parseInt(block.id) - 19) || random.includes(parseInt(block.id) + 19) || random.includes(parseInt(block.id) - 20) || random.includes(parseInt(block.id) + 20)) {
                        check(parseInt(block.id));
                        
                    }

                    else {
                        
                        block.style.backgroundColor = "green";
                        if (cot < 1) {
                            let list = [1, -1, 20, -20, 19, -19, 18, -18];
                            for (let i = 0; i < 8; i++) {
                                for (let j = 0; j < 8; j++) {
                                    let w = parseInt(block.id) + (list[i] + list[j]);
                                    if (random.includes(w) || random.includes(w + 1) || random.includes(w - 1)) {
                                        console.log(parseInt(block.id));
                                        check(parseInt(block.id) + list[i]);
                                        console.log(parseInt(block.id) + list[i], list[i]);

                                    }
                                    else {
    
                                        let id = document.getElementById(parseInt(block.id) + list[i]);
                                        
                                        id.style.backgroundColor = "green";
                                    }
                                }
                            }
                            cot = 1;
                        }


                    }
                    function check(blockid) {
                        var count = 0;
                        if (blockid % 19 == 0 || (blockid + 1) % 19 == 0) {
                            if (blockid % 19 == 0) {
                                var list = [1, 20, -18, -19, 19];
                                for (let i = 0; i < 5; i++) {
                                    if (random.includes(blockid + list[i])) {
                                        count += 1;
                                        
                                    }

                                }
                            }
                            else {
                                var list = [-1, -20, 18, -19, 19];
                                for (let i = 0; i < 5; i++) {
                                    if (random.includes(blockid + list[i])) {
                                        count += 1;
                                    
                                    }

                                }

                            }


                        }
                        else {
                            var list = [1, -1, 20, -20, 19, -19, 18, -18];
                            for (let i = 0; i < 8; i++) {
                                if (random.includes(blockid + list[i])) {
                                    count += 1;
                                    
                                }

                            }
                        }
                        var blo = document.getElementById(blockid);
                        if (count == 0) {
                            blo.style.backgroundColor = 'green';
                        }
                        else {
                            blo.innerHTML = count;
                        }
                        
                    }
                


            });
        });
        
    }



   

    // need a function to assing the bombs to blocks
    generaterandom(limit1) {

        if ( limit1 ==  undefined ){
            limit1 = 50;
        }

        
        while (this.random.length < limit1) {
            var value = Math.ceil(Math.random() * 1000);

            if (this.random.includes(value)) {
                value = Math.ceil(Math.random() * 1000)
            }
            else if (value > 0 && value < 360) {
                this.random.push(value);


            }

        }
        // console.log(this.random.length);
        this.generatearray();
       

    }

    // this finction is to assign the values for the blocks next to the bombs

    // assignhints(){


    // }



    // need funcction to change the dificulty level of the game by increasing the number of the bombs
    // gameDificulty{

    // }


    clearAll() {
        
        
        this.container.textContent = '';
        this.random.length = 0;
        console.log(this.random);
        // console.log(this.blocks1);

    }



}


let gameplay = new game_play();
gameplay.generaterandom();



let limits = document.querySelectorAll(".button");
var limit1 = 50;

Array.prototype.forEach.call(limits, function (limit) {
    limit.addEventListener('click', function () {
        gameplay.clearAll();
        
        limits[0].style.backgroundColor = 'red';
        limits[1].style.backgroundColor = 'red';
        limits[2].style.backgroundColor = 'red';
        
        limit.style.backgroundColor = 'green';
        limit1 = parseInt(limit.value);
        
        gameplay.generaterandom(limit1);

    });
});





function new1(){
    gameplay.clearAll();
    gameplay.generaterandom();

}


        
