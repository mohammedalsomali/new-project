// this where ill will be implementing the game play code
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
            array_ele.classList.add("block_" + i);

            // Adding style to div
            //   array_ele.style.height = `${}px`;
            //   array_ele.style.transform = `translate(${i * 30}px)`;

            // Creating label element for displaying
            // size of particular block
            var array_ele_label =
                document.createElement("label");
            array_ele_label.classList.add("block_id" + i);
            //   array_ele_label.innerText = value;

            // Appending created elements to index.html
            array_ele.appendChild(array_ele_label);
            container.appendChild(array_ele);


        }
    }


}