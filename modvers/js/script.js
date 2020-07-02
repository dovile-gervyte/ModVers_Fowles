$(document).ready(function(){

	//Display versioned TEI files in a container with ID #tei-1.
	//This example assumes that the container takes up the entire screen.

	$('#tei').data('teiDisplay', {
		xmlFile: 'data/barnes3.xml',
		annotations: 'data/annotation_3.json',
		highlights: 'data/annotation_3.json',
		fixFirst: false,
		//height: 300,
		//locs: 'a3,a4,a5',
		//witnesses: 'ver, tx, tsc2',
		dev: false
	});

	$('#tei').teiDisplay();


	//Display versioned TEI files in a container with ID #tei-single.
	//This example assumes that the container exists in a column of text.

	$('#tei-single').data('teiDisplay', {
		xmlFile: 'data/barnes1.xml',
		fixFirst: true,
		fullscreen: false,
		height: 600,
		annotations: 'data/annotations11.json',
		highlights: 'data/annotations11.json',
		//witnesses: 'v4n8,v4n11',
		dev: false
	});

	$('#tei-single').teiDisplay();


	$('#t3').data('teiDisplay', {
		xmlFile: 'data/barnes.xml',
		fixFirst: true,
		fullscreen: false,
		height: 700,
		annotations: 'data/annotations11.json',
		highlights: 'data/annotations11.json',
		//witnesses: 'v4n8,v4n11',
		dev: false
	});

	$('#t3').teiDisplay();

})//onReady
