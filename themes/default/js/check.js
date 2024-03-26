//$(window).load(function(){
$(document).ready(function(){
	//$(function () {
		$('.checkall').on('click', function () {
			$(this).closest('.filetree').find(':checkbox').prop('checked', this.checked);
		});
		$('.checkall').on('click', function () {
			$(this).closest('.table').find(':checkbox').prop('checked', this.checked);
		});
		$('.checkall').on('click', function () {
			$(this).closest('.gallery').find(':checkbox').prop('checked', this.checked);
		});
		$('.check_images').on('click', function () {
			$(this).closest('.gallery').find(':checkbox').prop('checked', this.checked);
		});
		$('.check_thumb').on('click', function () {
			$(this).closest('.gallery').find(':checkbox').prop('checked', this.checked);
		});
		$('.check_background').on('click', function () {
			$(this).closest('.gallery').find(':checkbox').prop('checked', this.checked);
		});
		$('.check_slider').on('click', function () {
			$(this).closest('.gallery').find(':checkbox').prop('checked', this.checked);
		});
		$('.check_virtual').on('click', function () {
			$(this).closest('.gallery').find(':checkbox').prop('checked', this.checked);
		});
		$('.check_pdf').on('click', function () {
			$(this).closest('.file_type').find(':checkbox').prop('checked', this.checked);
		});
		$('.check_files').on('click', function () {
			$(this).closest('.file_type').find(':checkbox').prop('checked', this.checked);
		});
		$('.checkall').on('click', function () {
			$(this).closest('.advanced').find(':checkbox').prop('checked', this.checked);
		});
	//});
});
//});

function deleted_images(){
var a,b;
var j=0;
var aname=document.myform['post-check[]'];
	if(j==0)
	{
		alert('Please select at least one check box');
		return false;
	}
}
