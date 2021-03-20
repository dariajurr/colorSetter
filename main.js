
    const bgc = [239, 240, 255],  
        color = [130,0,255];
        

    function getSelector() {      
     return $('input[type="radio"]:checked').val();     
    }

    function setValue() {
      const i = getSelector() === 'color' ? color : bgc;      
      $("#red").slider("value", `${i[0]}`);
      $("#green").slider("value", `${i[1]}`);
      $("#blue").slider("value", `${i[2]}`);
    }    
     
    function setColor() {
      const i = getSelector() === 'color' ? color : bgc;
        i[0] = $("#red").slider("value");
        i[1] = $("#green").slider("value");
        i[2] = $("#blue").slider("value");          
      $('#colorField').css(`${getSelector()}`, `rgb(${i})`);      
    }

    $(function () {
      $("#red, #green, #blue").slider({        
        range: "min",
        max: 256,
        value: 127,        
        slide: setColor,        
      });
      setValue();      
      $('input[type="radio"]').click(getSelector, setValue);      
      $('#colorField').css({'color':`rgb(${color})`,'background-color': `rgb(${bgc})`});
      
    });


    
    
   