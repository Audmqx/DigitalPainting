

$(document).ready(function(){ 
						   

// $('.play').hover(function(){
// 	$('.barre').fadeIn()
// })

$( ".play" ).hover(
  function() {
    $('.barre').fadeIn()
  }, function() {
     $('.barre').fadeOut()
  }
);


	
$( "div.main" ).children().fadeOut();
	
$( "div.main" ).fadeIn();

$('.play').click(function(){
		$( "div.main" ).children().fadeOut();
		$(".fixed").fadeOut();
		$( "div.main" ).fadeIn();
		
		$(".play").css('opacity','0,3');

	$( ".bg-e1" ).fadeIn( function(){
		$( ".bg-e2" ).fadeIn(function(){
			$( ".bg-e3" ).fadeIn(function(){
				$( ".bg-e4" ).fadeIn(function(){
					$( ".bg-e5" ).fadeIn(function(){
						$( ".bg-e6" ).fadeIn(function(){
							$( ".bg-e7" ).fadeIn(function(){
								$( ".bg-e8" ).fadeIn(function(){
									$( ".bg-e9" ).fadeIn(function(){
										$( ".bg-10" ).fadeIn(function(){
											$( ".bg-11" ).fadeIn(function(){
												$( ".bg-12" ).fadeIn(function(){
													$( ".bg-13" ).fadeIn(function(){
														$( ".bg-14" ).fadeIn(function(){
															$( ".bg-15" ).fadeIn(function(){
																$( ".bg-16" ).fadeIn(function(){
																	$( ".bg-17" ).fadeIn(function(){
																		$( ".bg-18" ).fadeIn(function(){
																			$( ".bg-19" ).fadeIn(function(){
																				$( ".bg-20" ).fadeIn(function(){
																					$( ".bg-21" ).fadeIn(function(){
																						$( ".bg-22" ).fadeIn(function(){
																							$( ".bg-23" ).fadeIn(function(){
																								$( ".bg-24" ).fadeIn(function(){
																									$( ".bg-25" ).fadeIn(function(){
																										$( ".bg-26" ).fadeIn(function(){
																											$( ".bg-27" ).fadeIn(function(){
																												$( ".bg-28" ).fadeIn(function(){
																													$( ".bg-29" ).fadeIn(function(){
																														$( ".bg-e-5" ).fadeIn(function(){
																															$( ".bg-e-4" ).fadeIn(function(){
																																$( ".bg-e-3" ).fadeIn(function(){
																																	$( ".bg-e-2" ).fadeIn(function(){
																																		$( ".bg-e0" ).fadeIn(function(){
													
																																			$(".menu").removeClass('hide');
																																		});
																																	});
																																});
																															});
																														});
																													});
																												});
																											});
																										});
																									});
																								});
																							});
																						});
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});



	})


		


});

