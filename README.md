bProgressBar
====
#Introduction
pProgressbar is a javascript plugin used to show processing bar,it will dynamically 
show how the time consumption before the processing action finish.

The plugin is basic on jQuery and Bootstrap2.0,it works fine on Chrome、Firefox and IE9+,
the plugin also support Chinese and English international simply

#Requirments
* jQuery-1.8.3
* Bootstrap-2.0

#Installation & International
##Installation
* import the plugin file:

    
        
        <script type="text/javascript" src="../jquery-1.8.3.min.js"></script>
        
        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css"/>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
        
        <link rel="stylesheet" type="text/css" href="../css/bProgress.css"/>
        <script type="text/javascript" src="../bProgress.js"></script>
        <script type="text/javascript" src="../locale/bProgressBar-zh_CN.js"></script>

* Start the progress bar:  
    Just call the `fnShowProgressBar()`in your javascript cold like this:
   
    
        <script type="text/javascript">
          function testPProgressBar(){
            var config={
                processingMessage:'Processing,please waiting...',
                pColor:'#AAAAAA'}
            };
           fnShowProgressBar(config);
        </script>

  
* Stop the progress bar:  
   To stop the progress bar ,you just need to invoke the `fnCloseProgressBar()`like this:

        <script type="text/javascript">
          function testStopPProgressBar(){
            fnCloseProgressBar();
         }
        </script>

##International
To change the language you just need to import the bProgressBar-en_US.js or bProgressBar-zh_CN.js
after bProgress.js.

For example, if you want to use it with `Chinese` ,it should use like this:

    <link rel="stylesheet" type="text/css" href="../css/bProgress.css"/>
    <script type="text/javascript" src="../bProgress.js"></script>
    <script type="text/javascript" src="../locale/bProgressBar-zh_CN.js"></script>  
   
   
   If you want to use it with `English`,it should use like this:

    <link rel="stylesheet" type="text/css" href="../css/bProgress.css"/>
    <script type="text/javascript" src="../bProgress.js"></script>
    <script type="text/javascript" src="../locale/bProgressBar-en_US.js"></script>