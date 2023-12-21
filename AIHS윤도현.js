function getResultTrue1(){ // 첫번째 페이지에서 맞는 버튼을 눌렀을 때
    let buttonTrue1 = document.getElementById("buttonTrue1");
              buttonTrue1.addEventListener("click", function(){
                var resultValue =0;
                resultValue++;
                window.location.href = `윤도현2.html?resultValue=${resultValue}`;
              });
}
function getResultFalse1(){ // 첫번째 페이지에서 틀린 버튼을 눌렀을 때
    let buttonFalse1 = document.getElementById("buttonFalse1");
              buttonFalse1.addEventListener("click", function(){
                var resultValue =0;
                window.location.href = `윤도현2.html?resultValue=${resultValue}`;
              });
}
function getResultTrue2(){ // 두번째 페이지에서 맞는 버튼을 눌렀을 때
    let buttonTrue2 = document.getElementById("buttonTrue2");
              buttonTrue2.addEventListener("click", function(){   
                let queryString = window.location.search;
                let urlParams = new URLSearchParams(queryString); 
                let resultValue = urlParams.get('resultValue');          
                resultValue++;
                window.location.href = `윤도현3.html?resultValue=${resultValue}`;
              });
}
function getResultFalse2(){ // 두번째 페이지에서 틀린 버튼을 눌렀을 때
    let buttonFalse2 = document.getElementById("buttonFalse2");
              buttonFalse2.addEventListener("click", function(){     
                let queryString = window.location.search;
                let urlParams = new URLSearchParams(queryString);
                let resultValue = urlParams.get('resultValue');          
                window.location.href = `윤도현3.html?resultValue=${resultValue}`;
              });
}
function getResultTrue3(){ // 세번째 페이지에서 맞는 버튼을 눌렀을 때
    let buttonTrue3 = document.getElementById("buttonTrue3");
              buttonTrue3.addEventListener("click", function(){
                let queryString = window.location.search;
                let urlParams = new URLSearchParams(queryString);
                let resultValue = urlParams.get('resultValue');
                resultValue++;
                window.location.href = `윤도현결과.html?resultValue=${resultValue}`;
              });
}
function getResultFalse3(){  // 세번째 페이지에서 틀린 버튼을 눌렀을 때
    let buttonFalse3 = document.getElementById("buttonFalse3");
              buttonFalse3.addEventListener("click", function(){   
              let queryString = window.location.search;
              let urlParams = new URLSearchParams(queryString);     
              let resultValue = urlParams.get('resultValue');       
                window.location.href = `윤도현결과.html?resultValue=${resultValue}`;
              });
}

function getResult() { // 제대로 동작하나 확인용 코드
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let resultValue = urlParams.get('resultValue');
    console.log(resultValue);
}

function returnResultValue(){ // 묶어보려했으나 실패 
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    return urlParams;
}
function startFunction(){
  let startButton = document.getElementById("startButton");
  startButton.addEventListener("click", function(){
    window.location.href = "윤도현1.html";
  })
}