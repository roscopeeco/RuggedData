
define(
	['jquery', 'knockout'], 
	function($, ko, application) {

		function weather(params) {
			
			var self=this;

			var CONSTANTS={
				URLS:{
					GET:'https://api.darksky.net/forecast/e0e1febb86423b91e3d984eefc7d7a30/'+params.options.latlong+'?callback=?'
				}
			};

			this.refreshFrequency=60000*params.options.refreshFrequency;
			
			this.location='Location '+params.options.postcode+', '+params.options.latlong;
/*			BH17 0GD, 50.740679,-1.978917'; */
			
			this.data=ko.observable({});
			this.loaded=ko.observable(false);	
			this.loading=ko.observable(false);	
			
			this.temperature=ko.observable('');
			
			this.currently={
				time:ko.observable(''),
				summary:ko.observable(''),
				temperature:ko.observable(''),
				humidity:ko.observable(''),
				windSpeed:ko.observable(''),
				windBearing:ko.observable(''),
				visibility:ko.observable(''),
				cloudCover:ko.observable('')
			};
			
			this.currentlySummary=ko.pureComputed(
				function() {
					return 'Currently '+this.currently.temperature()+' and '+this.currently.summary().toLowerCase();
				},
				this
			);
			
			this.get=function() {

				self.loading(true);
			
				/* Loads weather data */
				$.getJSON(
					CONSTANTS.URLS.GET, 
					function(data) {
						self.data(data);

						self.currently.time(new Date(data.currently.time*1000));
						self.currently.summary(data.currently.summary);
						self.currently.temperature(parseInt(data.currently.temperature)+'F');
						self.currently.humidity(data.currently.humidity);
						self.currently.windSpeed(data.currently.windSpeed);
						self.currently.windBearing(data.currently.windBearing);
						self.currently.visibility(data.currently.visibility);
						self.currently.cloudCover(data.currently.cloudCover);	
				
						self.loading(false);
						self.loaded(true);	
						var skycons = new Skycons({"color":"black"});
						skycons.add(document.getElementById('weathericon'), data.currently.icon);
						skycons.play();
					}
				);
				
			};
			
			this.get();

			/* refresh every minute */
			setInterval(this.get, this.refreshFrequency);

			return this;
		};

		return weather;
	}
);
