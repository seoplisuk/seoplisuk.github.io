var textDefault = 'Show all information';
var textOther = 'Hide information';

$('.show__hide').text(textDefault);
$(".hidden__info").hide();
$(".show__hide").click(function () {
	
	
	$(this).parent().toggleClass('candidate__opened');

    textDefault = textOther;
    textOther = $(this).text();
    $(this).text(textDefault);
   
});


document.addEventListener('DOMContentLoaded', () => {
	const check2 = document.querySelector('.check2')
    
    
	check2.addEventListener('click', () => {
		this.check2.classList.toggle('check__active')
		
	})
	

	

	
})












