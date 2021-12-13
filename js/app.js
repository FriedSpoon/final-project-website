

$('.statistic').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    },

  });  
  


});

$('.statistic1').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    },

  });  
  


});

$('header a').click(function(event){

  // prevent defalt click behavior
  // don't jump to content
  event.preventDefault();

  // identify position of target
  let target = $(this).attr('href');
  let top = $(target).offset().top;

  // animate scroll to target
  // set speed in ms
  $('html,body').animate({
    scrollTop: top
    },700);

});
