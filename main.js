//background6에서부터 버튼 범위 다시 구하기 , 커서 이미지 




// 캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width=1500;
canvas.height=700;
document.body.appendChild(canvas);

let gamestate = "start"; //게임 상태를 시작으로                               

let startImage, start2Image, background1Image,background2Image,
background3Image,background4Image,background5Image,background6Image,
background7Image,background8Image,background9Image,background10Image,
end1Image,end2Image;




let buttons = {
    start: [
        {x:30, y:420, w:620, h:250, next:"start2"}
    ],
    start2: [
        {x:900, y:440, w:570, h:220, next:"background1"}
    ],
    background1:[
        {x:530, y:230, w:440, h:200, next:"background2"}
    ],
    background2: [
        {x:1300, y:270, w:100, h:100, next:"background3"}
    ],
    background3: [
        {x:180, y:300, w:200, h:80, next:"background4"}
    ],
    background4: [
        {x:200, y:200, w:300, h:300, next:"background5"}
    ],
    background5: [
        {x:100, y:230, w:1500, h:100, next:"background6"}                                          
    ],
    background6: [
        {x:550, y:120, w:60, h:70, next:"background7"}
    ],
    background7: [
        {x:190, y:290, w:190, h:80, next:"background8"}
    ],
    background8: [
        {x:700, y:634, w:700, h:60, next:"background9"}
    ],
    background9: [
        {x:240, y:478, w:375, h:90, next:"background10"}
    ],
    background10: [
        {x:610, y:635, w:890, h:65, next:"end1"}
    ],
    end1: [],


}; 



canvas.addEventListener("click",function(e){
    let x = e.offsetX;
    let y = e.offsetY;

    let currentButtons = buttons[gamestate];

    for(let i=0; i< currentButtons.length; i++){
        let b = currentButtons[i];
        
        if(x >= b.x && x <=b.x + b.w && y >=b.y  && y <= b.y + b.h ){
            gamestate = b.next;

            /*setTimeout(function() {
  document.getElementById("myImage").src = "new-image.jpg";
}, 5000); */


            if(gamestate==="end1"){
                setTimeout(function(){
                    gamestate="end2";
                },4000)
            }
        }

    }

});
//요소.addEventListener("이벤트", 실행할코드)

//행렬 좌표 정리 



function loadImage(){
    startImage = new Image();
    startImage.src = "start.jpg"

    start2Image = new Image();
    start2Image.src = "start2.jpg"

    background1Image = new Image();
    background1Image.src = "background1.jpg"

    background2Image = new Image();
    background2Image.src = "background2.jpg"

    background3Image = new Image();
    background3Image.src = "background3.jpg"

    background4Image = new Image();
    background4Image.src = "background4.jpg"

    background5Image = new Image();
    background5Image.src = "background5.jpg"

    background6Image = new Image();
    background6Image.src = "background6.jpg"

    background7Image = new Image();
    background7Image.src = "background7.jpg"

    background8Image = new Image();
    background8Image.src = "background8.jpg"

    background9Image = new Image();
    background9Image.src = "background9.jpg"

    background10Image = new Image();
    background10Image.src = "background10.jpg"

    end1Image = new Image();
    end1Image.src = "end1.jpg"

    end2Image = new Image();
    end2Image.src = "end2.jpg"

}
//ui에 이미지- (image, dx, dy, dWidth, dHeight)
function render(){
    if(gamestate == "start"){
        ctx.drawImage(startImage,0,0,canvas.width,canvas.height);
    }
  
    else if(gamestate === "start2"){
        ctx.drawImage(start2Image,0,0,canvas.width,canvas.height);
    }
    
    else if(gamestate === "background1"){
        ctx.drawImage(background1Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "background2"){
        ctx.drawImage(background2Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "background3"){
        ctx.drawImage(background3Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "background4"){
        ctx.drawImage(background4Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "background5"){
        ctx.drawImage(background5Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "background6"){
        ctx.drawImage(background6Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "background7"){
        ctx.drawImage(background7Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "background8"){
        ctx.drawImage(background8Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "background9"){
        ctx.drawImage(background9Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "background10"){
        ctx.drawImage(background10Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "end1"){
        ctx.drawImage(end1Image,0,0,canvas.width,canvas.height);
    }

     else if(gamestate === "end2"){
        ctx.drawImage(end2Image,0,0,canvas.width,canvas.height);
    }
} 


function main(){
    render();
    requestAnimationFrame(main);//계속 불러오기
}


//이미지 불러오기
loadImage()
main();

