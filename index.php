<!DOCTYPE html>
<html lang="en-US">
<head>
<title>Awesome Rating - Jquery plugin to create rating system using Font Awesome</title>


<link href="assets/css/font-awesome.css" rel="stylesheet" media="screen">
<link href="assets/css/style.css" rel="stylesheet" media="screen">

<script type="text/javascript" src="assets/js/jquery.js"></script>

<script type="text/javascript" src="assets/js/awesome.rating.js"></script>
<script type="text/javascript">
$(document).ready(function()
{
$('.rating').awesomeRating({
	num:5,
	url:'rate.php',
	size: '25px',
	disable : false,
	success:function(){ alert("Rating successfull"); },
	already:function(){ alert("Already rated"); },
	error: function(){ alert("Error! Try again"); }
});

});

</script>

</head>





<div id="wrapper">

        <div class="item">
            <div class="title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</div>
                <span class="rating" data-id="1" data-rating="0">
                
                </span>                

        </div>

         <div class="item">
            <div class="title">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi</div>
                <span class="rating" data-id="2" data-rating="0">
                
                </span>
                

        </div>



</body>
</html>
