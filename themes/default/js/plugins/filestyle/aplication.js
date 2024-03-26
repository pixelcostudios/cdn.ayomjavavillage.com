$('#input01').filestyle()

$('#input02').filestyle({
	buttonText: 'My filestyle'
});

$('#input03').filestyle({
	input: false,
	classButton: 'btn btn-primary'
});

$('#input04').filestyle({
	icon: false
});

$('#input05').filestyle({
	classButton: 'btn btn-warning'
});

$('#input06').filestyle({
	classInput: 'input-small'
});

$('#input07').filestyle({
	classIcon: 'icon-plus',
	buttonText: 'Add'
});

$('#input08').filestyle({
	buttonText: 'File',
	classButton: 'btn btn-success'
});

$('#clear').click(function () {
	$('#input08').filestyle('clear');
});

$('#input09').filestyle({
	buttonText: 'File',
	classButton: 'btn btn-primary'
});

$('#toggleInput').click(function () {
	var fs = $('#input09');
	if (fs.filestyle('input'))
		fs.filestyle('input', false);
	else
	   	fs.filestyle('input', true);
});

$('#input10').filestyle({
	buttonText: 'File',
	classButton: 'btn btn-primary'
});

$('#toggleIcon').click(function () {
	var fs = $('#input10');
	if (fs.filestyle('icon'))
		fs.filestyle('icon', false);
	else
	   	fs.filestyle('icon', true);
});

$('#input_images').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_icon').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_thumb').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_background').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_detail').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_pdf').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_files').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_avatar').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_logo').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_logo2').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_header').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_footer').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_logo_dashboard').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_favicon').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_favicon_dashboard').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input12').filestyle();
$('#input12').filestyle('buttonText', '');

$('.tab-content').eq(1).find(':file').filestyle();