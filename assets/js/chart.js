$(document).ready(function() {

	// Bar Chart
	
	Morris.Bar({
		element: 'bar-charts',
		data: [
			{ y: 'Segunda', a: 4,},
			{ y: 'Terça', a: 3,},
			{ y: 'Quarta', a: 2,},
			{ y: 'Quinta', a: 1,},
			{ y: 'Sexta', a: 1,},
			{ y: 'Sábado', a: 4,},
			{ y: 'Domingo', a: 0,}
		],
		xkey: 'y',
		ykeys: ['a',],
		labels: ['Consultas Agendadas',],
		lineColors: ['#f43b48','#453a94'],
		lineWidth: '3px',
		barColors: ['#bea07e',],
		resize: true,
		redraw: true
	});
	
	// Line Chart
	
	Morris.Bar({
		element: 'doughnut-charts',
		data: [
			{ y: 'Segunda', a: 4, b: 3},
			{ y: 'Terça', a: 3, b: 3},
			{ y: 'Quarta', a: 2, b: 2},
			{ y: 'Quinta', a: 1, b: 1},
			{ y: 'Sexta', a: 1, b: 0},
			{ y: 'Sábado', a: 4, b: 2},
			{ y: 'Domingo', a: 0, b: 0}
		],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Boletos Gerados', 'Boletos Pagos'],
		lineColors: ['#f43b48','#ff7782'],
		lineWidth: '3px',
		barColors: ['#bea07e', '#ff7782'],
		resize: true,
		redraw: true
	});
});