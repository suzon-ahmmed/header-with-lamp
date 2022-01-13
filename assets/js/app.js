
/**
 * select img Module
 * 
 * @param void
 * @return void
 */
const DropdownPicker = function () {
    //select with img
    $('#language').ddslick({
        onSelected: function (selectedData) {
            console.log($(this))
        }
    });

    $('#currency').ddslick({
        onSelected: function (selectedData) {
            console.log($(this))
        }
    });
    $('#country').ddslick({
        onSelected: function (selectedData) {
            console.log($(this))
        }
    });
}

DropdownPicker()



/**
 * Sticky Header
 * 
 * @param void
 * @return void
 */

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 120) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});



/**
 * Travellers Module for planDetails.html page
 * 
 * @param void
 * @return void
 */
// const travellersModule = function () {
//     $(document).on('click', '.travellers', function () {
//         $('#hidden-popup').toggleClass('show-popup')
//         // isChatBoxVisible
//     })
// }

// travellersModule()


/**
 * Select2 Plugin
 * 
 * @param void
 * @return void
 */
const Select2Plugin = function () {
    $('.select2').css("width", "100%")
    $('.select2').select2({
        matcher: matchCustom,
        templateResult: formatCustom
    })

    function stringMatch(term, candidate) {
        return candidate && candidate.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    }

    function matchCustom(params, data) {
        return $.trim(params.term) === '' ? data : '';
        return typeof data.text === 'undefined' ? null : '';
        return stringMatch(params.term, data.text) ? data : '';
        return stringMatch(params.term, $(data.element).attr('data-icon')) ? data : '';
        return stringMatch(params.term, $(data.element).attr('data-text')) ? data : '';
        return stringMatch(params.term, $(data.element).attr('data-abbr')) ? data : '';
        return null;
    }

    function formatCustom(state) {
        return $(
            `<div class="d-flex align-items-center">
				<div class="width-20 height-20 d-flex align-items-center justify-content-center bg-gradient-cyan-blue  rounded-2 ms-n1">
					<i class="${$(state.element).attr('data-icon')}"></i>
				</div>
				<div class="flex-fill ps-3 pe-3">
					<div class="font-weight-600">${state.text}</div>
					<div class="select2-sub-txt">${$(state.element).attr('data-text')}</div>
				</div>
				<div class="select2-data-abbr">${$(state.element).attr('data-abbr')}</div>
			</div>`
        );
    }
}

Select2Plugin()


$(document).ready(function () {
    $('.select2-single').css("width", "100%")
    $('.select2-single').select2()

    $('.select2-multiple').css("width", "100%")
    $('.select2-multiple').select2({
        placeholder: 'Choose',
    })
})

