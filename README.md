Awesome Rating
==============

Awesome Rating - Jquery plugin to create rating system using Font Awesome 
**( Needs Font awesome to work )**

Demo : **<a href="http://demo.pixelsurgelabs.com/awesome-rating">http://demo.pixelsurgelabs.com/awesome-rating</a>**

Initialize
===========

  
            $('.rating').awesomeRating({
                    num:5,
                    url:'rate.php',
                    size: '25px',
                    disable : false,
                    success:function(){ alert("Rating successfull"); },
                    already:function(){ alert("Already rated"); },
                    error: function(){ alert("Error! Try again"); }
            });

Settings
========

**num**     : number of stars

**url**     : file path that controls database query

**size**    : size of the stars

**disable** : disables rate action

**success** : callback when rate success

**already** : callback when user already voted

**error**   : callback when error
