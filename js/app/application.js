
define(
	['knockout'], 
	function(ko) {

		function application() {

			var self=this;
			
			this.registerComponents=function(item) {

				if (typeof item.viewModel!='undefined') {
					ko.components.register(
						item.name, { viewModel:item.viewModel, template: item.template }
					);
				}
				else {
					ko.components.register(
						item.name, { template: item.template }
					);
				}

			};	
		
			this.applicationInitialise=function(settings) {

				settings.components.map(self.registerComponents);
				ko.applyBindings(settings.parameters);
			
			};
			
			return this;
		}

		return new application();
	}
);
