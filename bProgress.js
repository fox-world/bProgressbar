     
	 var pDefaultSettings={
    	 offset:100,
    	 pColor:'#0088cc', /*color of the progress bar*/
     }
     
     var bProgressFlag;
     
     function fnCalculateTime(count,settings){ 	 
    
		 var total=parseInt(count/(1000/pDefaultSettings.offset));  	 
         var hour=parseInt(total/3600);
    	 var minute=parseInt((total-hour*3600)/60);
    	 var second=parseInt(total-hour*3600-minute*60);
    	 
    	 var timeCost=new String(bProgressText.bProgressTimeCost+"\t");
    	 if(hour>0){
    		 timeCost+=hour+(hour>1?bProgressText.bHours:bProgressText.bHour);
    	 }
    	 if(minute>0){
    		 timeCost+=minute+(minute>1?bProgressText.bMinutes:bProgressText.bMinute);
    	 }
    	 timeCost+=second+(second>1?bProgressText.bSeconds:bProgressText.bSecond);
    	 
    	 $("#b_progress_time_cost").html(timeCost);
    	 $("#b_progress_self div").css({"width":count%100+"%","background-color":pDefaultSettings.pColor})
    	 bProgressFlag=setTimeout("fnCalculateTime("+(count+1)+")",pDefaultSettings.offset);	
  
     }
     
    function fnShowProgressBar(pSettings){

		pDefaultSettings=$.extend(true,{},pDefaultSettings,pSettings);
		if(!pDefaultSettings.hasOwnProperty('processingMessage')){
			pDefaultSettings.processingMessage=bProgressSettings.processingMessage;
		}
		

    	var progressHtml=new String();
    	progressHtml+='<div id="b_progress_modal" class="modal hide" tabindex="-1" role="dialog" aria-hidden="true">';
    	progressHtml+='  <div class="modal-body">';
        progressHtml+='    <div id="b_progress_loading_message"></div>';
    	progressHtml+='    <div id="b_progress_self" class="b_progress">';
    	progressHtml+='      <div class="b_progress_bar"></div>';
    	progressHtml+='    </div>';
    	progressHtml+='    <div id="b_progress_time_cost"></div>';
    	progressHtml+='  </div>';
    	progressHtml+='</div>';
    	
    	$("body").append(progressHtml);
    	
        $("#b_progress_modal").modal({
            backdrop:'static',
        	keyboard:false,
            show:true
        });
        
		//set the position of the progress bar modal
        $("#b_progress_modal").css({"margin-top":function(){
    		return (document.documentElement.clientHeight/2-$(this).height()*3)+"px";
    	}});

		//set the backdrop color of the progress bar modal
		if(pDefaultSettings.hasOwnProperty('processingMessage')){
		  $(".modal-backdrop").css({"background-color":pDefaultSettings.bColor});
		}
        
    	fnCalculateTime(0);
        $("#b_progress_loading_message").html(pDefaultSettings.processingMessage);
    }
    
    function fnCloseProgressBar(){
    	 clearTimeout(bProgressFlag);
    	 $("#b_progress_modal").modal("hide");
    	 $("#b_progress_modal").remove();
    }