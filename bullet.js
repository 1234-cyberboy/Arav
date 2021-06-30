class Bullet{
    constructor(dir, vel){
this.vel = vel;
this.dir = dir;
        
        
    }

    display(){
      console.log(4)  

    if(this.dir === 0){
        


            rect(this.vel, 615, 5, 5); 
    
            this.vel = this.vel + 5
    
        
            
    
           }else if(this.dir === 1){
           
            rect(this.vel, 615, 5, 5); 
    
            this.vel = this.vel-5
    
           }
    


    }

}

