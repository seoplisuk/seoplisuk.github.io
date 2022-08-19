
document.addEventListener('DOMContentLoaded', () => { 

	const p1 = document.querySelector('.plisuk__popup') 
	const p2 = document.querySelector('.plisuk__popup__back')
    const p3 = document.querySelector('.plisuk__popup__main')
    const p5 = document.querySelector('.plisuk__popup__close')
    const p4 = document.querySelector('body')
	

	p1.addEventListener('click', () => { 
		p2.classList.toggle('opened__back')
        p3.classList.toggle('opened__main')
        p4.classList.toggle('body__opened')
       
		

	})



})



	




