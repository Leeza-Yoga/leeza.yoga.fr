const list = ["img/image_01.jpg", "img/image_02.jpg", "img/image_03.jpg", "img/image_04.jpg", "img/image_05.jpg", "img/image_06.jpg", "img/image_07.jpg", "img/image_08.jpg" ];

function changeImage(list) {
  const option = document.querySelector(".pages");
  const image = document.querySelector("img");
  const len = list.length;
  for(let i = 0; i < len; i++){
      if (option.selectedIndex === i) {
          image.src = list[i]
      }
  }        
}
function displayFirst(list){
    let option = document.querySelector(".pages");
    let image = document.querySelector("img");  
    image.src = list[0];
    option.selectedIndex = 0;
}
function displayPreview(list){
    let option = document.querySelector(".pages");
    let image = document.querySelector("img");
    const len = list.length;     
    for(let i = (len ); i >= 0; i--){
        if (image.src === list[0]){
            break;
        }
        else if (image.src === list[i]){
            image.src = list[i - 1];
            option.selectedIndex = i - 1;
            break;
        }
    }           
} 
function displayNext(list){
    let option = document.querySelector(".pages");
    let image = document.querySelector("img");
    const len = list.length;     
    for(let i = 0; i < len; i++){
        if (image.src === list[len - 1]){
            break;
        }
        else if (image.src === list[i]){
            image.src = list[i + 1];
            option.selectedIndex = i + 1;
            break;
        }
    }           
} 
function displayLast(list){
    let option = document.querySelector(".pages");
    let image = document.querySelector("img");
    const len = list.length;     
    image.src = list[len - 1];
    option.selectedIndex = len - 1;
}

function clicGauche(list){
    let option = document.querySelector(".pages");
    let image = document.querySelector("img");
    const len = list.length;     
    for(let i = (len ); i >= 0; i--){
        if (image.src === list[0]){
            break;
        }
        else if (image.src === list[i]){
            image.src = list[i - 1];
            option.selectedIndex = i - 1;
            break;
        }
    }           
} 
function clicDroit(list){
    let option = document.querySelector(".pages");
    let image = document.querySelector("img");
    const len = list.length;
    for(let i = 0; i < len; i++){
        if (image.src === list[len - 1]){
            break;
        }
        else if (image.src === list[i]){
            image.src = list[i + 1];
            option.selectedIndex = i + 1;
            break;
        }
    }           
}

