class Diamond{
    constructor(){
        this.image = loadImage("diamond-removebg-preview.png");
    }


    display(){
        image(this.image, 650, 500, 50, 50);
    }
    }