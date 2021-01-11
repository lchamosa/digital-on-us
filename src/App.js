import './App.css';

function App() {
  function clickTop(){
    var img = document.getElementById("imgLogo");   
    var topNumbers = img.style.top.replace('px', '');
    var top = parseInt(topNumbers, 10);
    if (isNaN(top)){
      img.style.top = '-10px';    
    }
    else{
      var div = document.getElementById("divCenter").clientWidth;
      var minLeft = ((div - img.clientWidth) / 2) * -1;
      if(top >minLeft){
        img.style.top = `${top - 10}px`
      }
    }   
  }
  function clickDown(){
    var img = document.getElementById("imgLogo");   
    var topNumbers = img.style.top.replace('px', '');
    var top = parseInt(topNumbers, 10);
    if (isNaN(top)){
      img.style.top = '10px';    
    }
    else{
      var div = document.getElementById("divCenter").clientWidth;
      var maxLeft = (div - img.clientWidth) / 2;
      if(top < maxLeft){
        img.style.top = `${top + 10}px`
      }
    }
  }
  function clickLeft(){
    var img = document.getElementById("imgLogo");   
    var leftNumbers = img.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    if (isNaN(left)){
      img.style.left = '-10px';    
    }
    else{
      var div = document.getElementById("divCenter").clientWidth;
      var minLeft = ((div - img.clientWidth) / 2) * -1;
      if(left >minLeft){
        img.style.left = `${left - 10}px`;
      }
    }   
  }
  function clickRigth(){
    var img = document.getElementById("imgLogo");   
    var leftNumbers = img.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    if (isNaN(left)){
      img.style.left = '10px';    
    }
    else{
      var div = document.getElementById("divCenter").clientWidth;
      var maxLeft = (div - img.clientWidth) / 2;
      if(left < maxLeft){       
        img.style.left = `${left + 10}px`;
      }
    }
  }
  return (
    <div className="div-container">
      <div className="div-corner"></div>
      <div className="div-horizontal-button" onClick={clickTop}></div>
      <div className="div-corner"></div>
      <div className="div-vertical-button" onClick={clickLeft}></div>
      <div id="divCenter" className="div-center">
        <img id="imgLogo" class="image" src="./logo.png" alt="Digital on US" />
      </div>
      <div className="div-vertical-button" onClick={clickRigth}></div>
      <div className="div-corner"></div>
      <div className="div-horizontal-button" onClick={clickDown}></div>
      <div className="div-corner"></div>
    </div>
  );
}
export default App;
