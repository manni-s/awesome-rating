/*
 * @Name : Awesome Rating - Jquery plugin to create rating system using Font Awesome 
 *
 * @Author: Manish Singh
 *
 * @Copyright (c) 2010 Manish 
 * 
 * @Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * @Project home:
 *   http://manni-s.github.io/awesome-rating 
 *
 * @Demo:
 *   http://demo.pixelsurgelabs.com/awesome-rating
*/


(function($){
  $.fn.awesomeRating = function(el){
  
  var defaults = {
      
      url : null,
      num : 5,
      size: '20px',
      disable : false,
      success : null,
      error : null,
      already:null
    };
   
 var opts = $.extend(defaults, el),       
          array=[];
          for (var i = 1; i <= opts.num; i++) {
            array.push('<i class="icon-star-empty rate" title="'+i+'" data-rate="'+i+'"></i>');
        }


 if(!opts.disable)
{
   $(this).on('mouseover', '.rate', function(){           
          var $rate=$(this).parent().find('.rate');           
          $rate.removeClass('icon-star').addClass('icon-star-empty').removeClass('red'); 
          $rate.filter(':lt(' + ($rate.index(this) + 1) + ')').removeClass('icon-star-empty').addClass('icon-star').addClass('active');          
        //alert($(this).attr('class'));
        });  


    $(this).on('mouseout',function(e){  
    e.stopPropagation();         
         var rating=parseInt($(this).attr('data-rating'),10),
             $rate=$(this).find('.rate');       
            
            fillStars($rate,rating);
            
      });

    $(this).on('click', '.rate', function(){  
         var $this=$(this),         
             id=$this.parent().attr('data-id'),
             rate=parseInt($this.attr('data-rate'),10);
             
          if(!$this.hasClass('voted'))
          {
         $.post(opts.url,{
              id : id,             
              rate : rate              
                 },
            function(callback) {

              if(callback.type=='success')
              {
               $this.parent().attr('data-rating',callback.rate);
               $this.parent().find('.rate').addClass('voted');
               fillStars($this.parent().find('.rate'),callback.rate);
               if(opts.success) opts.success(callback);

             }
             else if(callback.type=='error')
              {
                if(opts.error) opts.error();
              }
             else if(callback.type=='already')
              {
                if(opts.already) opts.already();
              }

            },"json");
          }
          else
            { if(opts.already) opts.already(); }

      });  

}
   return this.each(function(){     
          $(array.join('')).appendTo($(this));
          var rating=parseInt($(this).attr('data-rating'),10),
              $rate=$(this).find('.rate');
              $rate.css('font-size',opts.size);
          fillStars($rate,rating);

});
         

  
     function fillStars($rate,rating)
     {
      $rate.each(function(){           
             $rate.removeClass('icon-star').addClass('icon-star-empty').removeClass('active');                 
             $rate.filter(':lt(' +rating+ ')').removeClass('icon-star-empty').addClass('icon-star '); 
        }); 
     };     
  
  };
})(jQuery);