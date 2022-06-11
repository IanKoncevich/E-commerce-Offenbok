$(document).ready(function () {
	/*Checkbox check if checked*/
	function Check(id) {
		if ($(id).is(":checked")) {
			return true;
		} else {
			return false;
		}
	}

	/*Create tag*/
	function tagAdd(id, text) {
		var element = document.createElement("div");
		element.setAttribute("class", "tag-drop-body"); //set class
		element.setAttribute("id", id + "-tag"); //set id
		document.getElementById('tgs-cont').appendChild(element);
		$("#" + id + "-tag").html(`<div class="name-tag-m">${text}</div><div class="close-tag-m" id="${id +"-tag-close"}" data-id="${id}">✖</div>`);
		tagsLength();
	}

	/*Remove tag*/
	function tagDelete(id) {
		var el = document.getElementById(id);
		el.remove();
		tagsLength();
	}

	/*Uncheck chebox*/
	function Uncheck(id) {
		$('#' + id).prop('checked', false); // Unchecks it
	}


	/*tag on click close*/
	$("#tgs-cont").on("click", ".close-tag-m", function () {
		var id = event.target.id;
		var data_id = $('#' + id).data("id");
		//alert(data_id);
		tagDelete(data_id + "-tag"); //delete tag
		Uncheck(data_id); //uncheck checnox
	});

	/*get lenght of tags*/
	function tagsLength() {
		var numItems = $('.tag-drop-body').length;
		if (numItems > 0) {
			$('.active-filter').css("display", "block"); //show 'active filter' text
		} else {
			$('.active-filter').css("display", "none"); //hide 'active filter' text
		}
	}

	/*Clear all check and tags*/
	function Clearall() {
		/*Remove tags*/
		const boxes = document.querySelectorAll('.tag-drop-body');

		boxes.forEach(box => {
			box.remove();
		});
		/* Unckeck checks*/
		$('.inpt-check').prop('checked', false);
	}

	/*Drop down*/
	$(".overlay-real-button").click(function (event) {
		var id = event.target.id;
		var data_id = $('#' + id).data("id");
		//console.log(data_id);
		var dropdownLabel = document.getElementById("dropdown-label");

		var dropdownFood = document.getElementById("dropdown-food-" + data_id);
		dropdownFood.classList.toggle("is-open");


	});

   function openDrop(){
      $('#show-hide-drop').addClass("drop-viewed-mn");
		$('.hide-all-back').addClass("viwed-back-m");

      /*Change style of search when mobile*/
      $('.select-container').addClass("strong-bigger-searc-c");
   }

   function hideDrop(){
      $('#show-hide-drop').removeClass("drop-viewed-mn");
		$('.hide-all-back').removeClass("viwed-back-m");

      /*Change style of search when mobile*/
      $('.select-container').removeClass("strong-bigger-searc-c");
   }

	/*Click checkbox*/
	$(".inpt-check").click(function (event) {
		var id_inpt = event.target.id;
		//console.log(id_inpt);
		var text = $('#' + id_inpt).data("name"); //get text label name
		var check_id = '#' + id_inpt; //input id

		if (Check(check_id) === true) { //check is checkbox checked
			tagAdd(id_inpt, text) //create tag
		} else {
			tagDelete(id_inpt + "-tag"); //delete tag
		}
	});

	$("#clear-all-tgs-ch").click(function (event) {
		Clearall();
		tagsLength();
		hideDrop();
	});

   

   /*Open close drop doan and back black*/
	$("#open-byse-click").click(function (event) {
		openDrop();
      
	});

   $("#open-drop-dwn-j").click(function (event) {
		openDrop();
	});


	$(".hide-all-back").click(function (event) {
		hideDrop();
	});
});