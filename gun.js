class Gun{
    constructor(){
        this.image = loadImage("gun-removebg-preview.png");   
    }

    display(){
        image(this.image, 690, 600, 60, 30);
    }
    }