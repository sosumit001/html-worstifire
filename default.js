class MakeWorst {
    constructor(component)
    {
        this.component = component;
        this.canvas = this.createCanvas();
        this.radius = Math.floor(this.canvas.height/10);
        this.ctx = this.canvas.getContext("2d");

        this.coordinates = {
            posX : 50*Math.random() + this.radius,
            posY : 30* Math.random() + this.radius,
        };
        this.velocity = {
            x: Math.random() + 0.95,
            y: Math.random() - 0.75
        };
        this.animate = () => {
            this.updateCanvasAttribute(this.canvas);
            requestAnimationFrame(this.animate);
            this.update();
        }

    }
    updateCanvasAttribute(){

        var cWidth = window.getComputedStyle(this.canvas,null).getPropertyValue('width');
        var cHeight = window.getComputedStyle(this.canvas,null).getPropertyValue('height');
        

        this.canvas.setAttribute("width",`${cWidth}`)
        this.canvas.setAttribute("height",`${cHeight}`)
    
    }

    createCanvas(){
           
           this.component.style.position = "relative";
        
            var cWidth = window.getComputedStyle(this.component,null).getPropertyValue('width');
            var cHeight = window.getComputedStyle(this.component,null).getPropertyValue('height');
           
            var canvas = document.createElement('canvas');

            canvas.style.position = "absolute";
            canvas.style.top = "0%";
            canvas.style.left = "0%";

            var attributes = {
                height:cHeight,
                width:cWidth
            }
        
            Object.keys(attributes).forEach((attribute)=>{
                canvas.setAttribute(`${attribute}`,attributes[attribute]);
            })
        
            this.component.append(canvas)
            
            return canvas;
      
    }


    draw(){

        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.arc(this.coordinates.posX,this.coordinates.posY,this.radius,0,2*Math.PI,true);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
       
         this.draw();
         this.coordinates.posX += this.velocity.x;
         this.coordinates.posY += this.velocity.y;
         if(this.coordinates.posX <= this.radius || this.coordinates.posX >= this.canvas.width - this.radius)
         {
             this.velocity.x = - this.velocity.x;
         }
         if(this.coordinates.posY <= this.radius || this.coordinates.posY >= this.canvas.height - this.radius)
         {
             this.velocity.y = - this.velocity.y;
         }
             
    }


   
    

}



export default MakeWorst;