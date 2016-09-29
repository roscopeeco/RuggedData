
requirejs.config(
	{
		baseUrl: 'js/lib',
		paths: {
			app: '../app',
			templates: '../../templates'
		}
	}
);

require(
	['jquery', 'knockout', 'app/application'],
	function($, ko, application) {
		
		var settings={
			components:[
				{name:'weather', viewModel:  { require: 'app/weather' },	template: { require: 'text!templates/app/weather.html' } }
			],
			parameters:{
				weatherParameters:{
					postcode:'BH17 0GD',
					latlong:'50.740679,-1.978917',
					refreshFrequency:1
				}
			}
		};

		application.applicationInitialise(settings);
		
	}
);	



