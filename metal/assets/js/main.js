"use strict";

class DynamicAdapt {
  constructor(type) {
    this.type = type;
    this.daClassname = "_dynamic_adapt_";
    this.objects = [];
    this.nodes = document.querySelectorAll("[data-da]");
  }

  init() {
    this.nodes.forEach((node) => {
      const dataArray = node.dataset.da.trim().split(",");
      const obj = {
        element: node,
        parent: node.parentNode,
        destination: document.querySelector(dataArray[0].trim()),
        breakpoint: dataArray[1] ? dataArray[1].trim() : "767",
        place: dataArray[2] ? dataArray[2].trim() : "last",
        index: this.indexInParent(node.parentNode, node),
      };
      this.objects.push(obj);
    });

    this.arraySort(this.objects);
    this.mediaQueries = [...new Set(this.objects.map(({ breakpoint }) => `(max-width: ${breakpoint}px),${breakpoint}`))];
    
    this.mediaQueries.forEach((media) => {
      const [mediaQuery, mediaBreakpoint] = media.split(",");
      const matchMedia = window.matchMedia(mediaQuery);
      const objectsFilter = this.objects.filter(({ breakpoint }) => breakpoint === mediaBreakpoint);
      
      matchMedia.addEventListener("change", () => this.mediaHandler(matchMedia, objectsFilter));
      this.mediaHandler(matchMedia, objectsFilter);
    });
  }

  mediaHandler(matchMedia, objects) {
    objects.forEach((obj) => {
      if (matchMedia.matches) {
        obj.index = this.indexInParent(obj.parent, obj.element);
        this.moveTo(obj.place, obj.element, obj.destination);
      } else if (obj.element.classList.contains(this.daClassname)) {
        this.moveBack(obj.parent, obj.element, obj.index);
      }
    });
  }

  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === "last" || place >= destination.children.length) {
      destination.append(element);
    } else if (place === "first") {
      destination.prepend(element);
    } else {
      destination.children[place].before(element);
    }
  }

  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);
    parent.children[index] ? parent.children[index].before(element) : parent.append(element);
  }

  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }

  arraySort(arr) {
    arr.sort((a, b) => {
      if (a.breakpoint !== b.breakpoint) {
        return this.type === "min" ? a.breakpoint - b.breakpoint : b.breakpoint - a.breakpoint;
      }
      if (a.place === b.place) return 0;
      if (a.place === "first" || b.place === "last") return -1;
      if (a.place === "last" || b.place === "first") return 1;
      return a.place - b.place;
    });
  }
}

const da = new DynamicAdapt("max");
da.init();



document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile__menu');
  const burgerButton = document.querySelector('.burger__button');
  const back = document.querySelector('.back');
  const menuItems = document.querySelectorAll('.menu-item');

  if (!burgerButton || !mobileMenu || !burger || !back) return;

  const toggleMenu = () => {
      mobileMenu.classList.toggle('mobile__menu__opened');
      burger.classList.toggle('burger__opened');
      body.classList.toggle('body__opened');
      back.classList.toggle('back__opened');
  };

  const closeMenu = () => {
      mobileMenu.classList.remove('mobile__menu__opened');
      burger.classList.remove('burger__opened');
      body.classList.remove('body__opened');
      back.classList.remove('back__opened');
  };

  burgerButton.addEventListener('click', toggleMenu);
  back.addEventListener('click', closeMenu);

  // Перебираємо всі .menu-item і додаємо слухач
  menuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
  });
});


document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.category__item');
    const button = document.querySelector('.category__button');
    let expanded = false;

    function getVisibleCount() {
        return window.innerWidth < 1024 ? 6 : 8;
    }

    function updateVisibleItems() {
        const visibleCount = getVisibleCount();
        items.forEach((item, index) => {
            if (expanded || index < visibleCount) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    // Показати відповідну кількість при завантаженні
    updateVisibleItems();

    // Клік по кнопці
    button.addEventListener('click', function () {
        expanded = !expanded;
        updateVisibleItems();
        button.textContent = expanded ? 'Приховати' : 'Показати ще';
    });

    // Якщо змінюється ширина вікна (адаптив)
    window.addEventListener('resize', function () {
        if (!expanded) {
            updateVisibleItems();
        }
    });
});

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});  


document.addEventListener('DOMContentLoaded', function () {
    new Cleave('#phone', {
      prefix: '+380',
      delimiters: [' ', ' ', '-', '-'],
      blocks: [4, 2, 3, 2, 2],
      numericOnly: true
    });
    new Cleave('#phone2', {
      prefix: '+380',
      delimiters: [' ', ' ', '-', '-'],
      blocks: [4, 2, 3, 2, 2],
      numericOnly: true
    });
    new Cleave('#phone3', {
      prefix: '+380',
      delimiters: [' ', ' ', '-', '-'],
      blocks: [4, 2, 3, 2, 2],
      numericOnly: true
    });
  });


  const swiper1 = new Swiper('.swiper__works', {
    loop: true,
    spaceBetween: 64,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
      navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      
      1024: {
        slidesPerView: 2,
      },
      },
    }); 

    const swiper2 = new Swiper('.swiper__reviews', {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
        navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        
        1024: {
          slidesPerView: 3,
        },
        },
      }); 

      const swiper3 = new Swiper('.subcategory__swiper', {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination3',
          clickable: true,
        },
          navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
        },
        breakpoints: {
          320: {
            slidesPerView: 3.2,
            spaceBetween: 6,
          },
          
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          },
        }); 


      jQuery('.question__hidden').hide();
      jQuery(".question__item").click(function() {
        jQuery(this).find('.question__hidden').slideToggle();
        jQuery(this).toggleClass('active2');
        
          
       
        });

        document.addEventListener('DOMContentLoaded', function () {
          const content = document.querySelector('.section8__content');
          const button = document.querySelector('.section8__button');
          const firstParagraph = content.querySelector('p');
      
          if (window.innerWidth <= 1023 && content && button && firstParagraph) {
            // Визначаємо висоту першого абзацу
            const paraHeight = firstParagraph.offsetHeight;
      
            // Встановлюємо цю висоту через CSS-перемінну
            content.style.setProperty('--collapsed-height', `${paraHeight}px`);
            content.classList.add('collapsed');
      
            button.addEventListener('click', function () {
              content.classList.toggle('collapsed');
              if (content.classList.contains('collapsed')) {
                button.textContent = 'Читати більше';
              } else {
                button.textContent = 'Згорнути';
              }
            });
          }
        });


        jQuery(document).ready(function($) {
          $('.up').on('click', function(e) {
              e.preventDefault();
              $('html, body').animate({ scrollTop: 0 }, 600); // 600 — тривалість анімації в мілісекундах
          });
      });


      jQuery(document).ready(function($) {
        // Показати/сховати головний каталог
        $('.m__catalog').on('click', function() {
            $('.m__catalog__main').slideToggle(300);
            $(this).toggleClass('cat__opened');
        });
    
        // Показати/сховати підкатегорії
        $('.sub__main').on('click', function() {
            const parent = $(this).closest('.m__sub');
            parent.find('.sub__hidden').slideToggle(300);
            parent.toggleClass('sub__opened');
        });
    });
       

   jQuery(document).ready(function($) {
      if ($(window).width() < 1024) {
          let lastScrollTop = 0;
          let blockVisible = false;
  
          $(window).on('scroll', function() {
              let currentScroll = $(this).scrollTop();
  
              if (currentScroll > lastScrollTop + 5) {
                  // Скрол вниз
                  if (!blockVisible) {
                      $('.block').css('display', 'flex').hide().fadeIn(200);
                      blockVisible = true;
                  }
              } else if (currentScroll < lastScrollTop - 5) {
                  // Скрол вгору
                  if (blockVisible) {
                      $('.block').fadeOut(200, function() {
                          $(this).css('display', 'none');
                      });
                      blockVisible = false;
                  }
              }
  
              lastScrollTop = currentScroll;
          });
      }
  }); 

  /* jQuery(document).ready(function($) {
    if ($(window).width() < 1024) {
        let blockVisible = false;

        $(window).on('scroll', function() {
            if (!blockVisible) {
                $('.block').css('display', 'flex').hide().fadeIn(200);
                blockVisible = true;
            }
        });
    }
}); */
  


  jQuery(document).ready(function($) {
    // Знайти вже відкритий блок (якщо такий є)
    const $openedItem = $('.prokat__item.prokat__opened');
  
    if ($openedItem.length) {
      const $openedHidden = $openedItem.next('.prokat__hidden');
      $openedHidden.slideDown(0); // Відкрити без анімації
    }
  
    // Подальша робота при кліку
    $('.prokat__item').on('click', function() {
      const $item = $(this);
      const $hiddenBlock = $item.next('.prokat__hidden');
  
      $hiddenBlock.slideToggle(300);
      $item.toggleClass('prokat__opened');
    });
  });


jQuery(document).ready(function($) {
  $('.number-input').each(function() {
    const $wrapper = $(this);
    const $input = $wrapper.find('input');

    $wrapper.find('.btn-increment').on('click', function() {
      $input[0].stepUp();
    });

    $wrapper.find('.btn-decrement').on('click', function() {
      $input[0].stepDown();
    });
  });
});


  jQuery(document).ready(function($) {
    $('.sub__changes .change').on('click', function() {
      // Знаходимо батьківський блок і знімаємо активність з інших елементів
      $(this).siblings().removeClass('change__active');
      // Додаємо активний клас до натиснутого елемента
      $(this).addClass('change__active');
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".product__tab__hidden");
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function () {
        // Знімаємо активність з усіх табів і контентів
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
  
        // Додаємо активність до натиснутого табу і відповідного контенту
        tab.classList.add("active");
        contents[index].classList.add("active");
      });
    });
  
    // Активуємо перший таб за замовчуванням
    if (tabs[0] && contents[0]) {
      tabs[0].classList.add("active");
      contents[0].classList.add("active");
    }
  });






jQuery(document).ready(function($) {
  function moveMobileElements() {
      $('.sub__product').each(function() {
          const $product = $(this);
          const $title = $product.find('.sub__product__title');
          const $mobTitleContainer = $product.find('.title__prod__mob');
          const $leftBlock = $product.find('.sub__poduct__left');

          const $questionBtn = $product.find('.add__question');
          const $mobileContainer = $product.find('.sub__mobile');

          // Переносимо заголовок
          if ($(window).width() < 1024) {
              if ($title.length && $mobTitleContainer.find('.sub__product__title').length === 0) {
                  $title.appendTo($mobTitleContainer);
              }

              // Переносимо кнопку "Задати питання"
              if ($questionBtn.length && $mobileContainer.find('.add__question').length === 0) {
                  $questionBtn.appendTo($mobileContainer);
              }
          } else {
              // Повертаємо заголовок на місце
              if ($title.length && $leftBlock.find('.sub__product__title').length === 0) {
                  $title.prependTo($leftBlock);
              }

              // Повертаємо кнопку "Задати питання" назад
              const $rightBlock = $product.find('.sub__right__right');
              if ($questionBtn.length && $rightBlock.find('.add__question').length === 0) {
                  $questionBtn.appendTo($rightBlock);
              }
          }
      });
  }

  moveMobileElements(); // при завантаженні
  $(window).on('resize', function() {
      moveMobileElements(); // при зміні розміру
  });
});

/* document.addEventListener('DOMContentLoaded', function () {
  const checkBlocks = document.querySelectorAll('.check__block');

  checkBlocks.forEach(block => {
    const checkbox = block.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
      block.classList.toggle('active', this.checked);
    });
  });
}); */

document.addEventListener('DOMContentLoaded', function () {
  const allProducts = document.querySelectorAll('.sub__product');

  allProducts.forEach(function (product) {
    const price1 = product.querySelector('.price1');
    const price2 = product.querySelector('.price2');
    const changes = product.querySelectorAll('.change');

    changes.forEach(function (change) {
      change.addEventListener('click', function () {
        if (this.classList.contains('change__active')) return;

        // Змінюємо активну кнопку
        changes.forEach(c => c.classList.remove('change__active'));
        this.classList.add('change__active');

        // Перемикаємо ціни
        if (this.textContent.trim() === 'шт') {
          price1.style.display = 'none';
          price2.style.display = 'inline';
        } else {
          price1.style.display = 'inline';
          price2.style.display = 'none';
        }
      });
    });
  });
});


// Додавання товару в корзину
$('.add__tovar').on('click', function() {
  var category = $('.select2-category option:selected').text();
  var specific = $('.select2-category2 option:selected').text();
  var name = $('.select2-category3 option:selected').text();
  var weight = $('.calc-weight').val();
  var length = $('.calc-length').val();

  if (!weight || !length || category.includes('Оберіть')) {
      alert("Будь ласка, заповніть усі поля.");
      return;
  }

  var productHTML = `
      <div class="basket__product">
        <div class="basket__left">
          <div class="basket__item"><strong>Найменування:</strong> <span class="prod__name">${category} / ${specific} / ${name}</span></div>
          <div class="basket__item"><strong>Довжина:</strong> <span class="prod__width">${length} м</span></div>
          <div class="basket__item"><strong>Вага:</strong> <span class="prod__weight">${weight} кг</span></div>
        </div>
        <div class="delete"><img src="/wp-content/themes/metalwest/assets/img/delete.svg" alt=""></div>
      </div>
  `;

  $('.calc__products').append(productHTML);

  updateBasketView();
});

// Видалення товару
$(document).on('click', '.basket__product .delete', function() {
  $(this).closest('.basket__product').remove();
  updateBasketView();
});

// Клік на "Оформити замовлення"
$(document).on('click', '.zakaz', function() {
  if ($('.calc__products .basket__product').length > 0) {
      $('.basket2').show();
  }
});

// Функція оновлення відображення корзини
function updateBasketView() {
  if ($('.calc__products .basket__product').length > 0) {
      $('.basket').show();
      $('.calc__none').hide();
      $('.calc__yes').show();
  } else {
      $('.basket2').hide();  // якщо пусто → ховаємо
      $('.calc__none').show();
      $('.calc__yes').hide();
  }
}

// Виклик при завантаженні сторінки
updateBasketView();



$('.ch input[type="checkbox"]').on('change', function() {
  $(this).closest('.check__block').find('.ch__hidden').toggle($(this).is(':checked'));
}); 


$('.links__item').hover(
  function() {
    $(this).find('.sub__links').stop(true, true).slideDown(200);
  },
  function() {
    $(this).find('.sub__links').stop(true, true).slideUp(200);
  }
);