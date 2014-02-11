     var pDefaultConfig={
    	 offset:100,
    	 pColor:"#0088cc" /*进度条的颜色*/
     }
     
     var bProgressFlag;
     
     function fnCalculateTime(count){ 	 
    		 
    	 var total=parseInt(count/(1000/pDefaultConfig.offset));  	 
         var hour=parseInt(total/3600);
    	 var minute=parseInt((total-hour*3600)/60);
    	 var second=parseInt(total-hour*3600-minute*60);
    	 
    	 var timeCost=new String("所耗时间:\t");
    	 if(hour>0){
    		 timeCost+=hour+" 小时 ";
    	 }
    	 if(minute>0){
    		 timeCost+=minute+" 分 ";
    	 }
    	 timeCost+=second+" 秒 ";
    	 
    	 $("#b_progress_time_cost").html(timeCost);
    	 $("#b_progress_self div").css({"width":count%100+"%","background-color":pDefaultConfig.pColor})
    	 
    	 bProgressFlag=setTimeout("fnCalculateTime("+(count+1)+")",pDefaultConfig.offset);	  		 
    	
  
     }
     
    function fnShowProgressBar(loadingMsg){
    	
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
        
        $("#b_progress_modal").css({"margin-top":function(){
    		return ($(window).height()/2-$(this).height()*3)+"px";
    	}});
        
    	fnCalculateTime(0);
        $("#b_progress_loading_message").html(loadingMsg);
    }
    
    function fnHideProgressBar(){
    	 clearTimeout(bProgressFlag);
    	 $("#b_progress_modal").modal("hide");
    	 $("#b_progress_modal").remove();
    }