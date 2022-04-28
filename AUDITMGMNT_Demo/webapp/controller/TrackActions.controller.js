sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.TrackActions", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.TrackActions
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("TrackActions").attachPatternMatched(this.onRouteMatched, this);
		},
		onRouteMatched: function () {
			if (!this.getView().getModel("CreateModel")) {
				var oCreateModel = new JSONModel();
				this.getView().setModel(oCreateModel, "CreateModel");
			}
			this.formDisplayData();
		},
		formDisplayData: function () {
			var oDisplayData = {

				actions: [{
						action: '1098654677',
						descr: 'Food Safety',
						levelcompl: 'L3',
						compltdby: 'Karthikeyan',
						highlvlqstn: '298564874563',
						profile: 'Profile P1',
						valresult: 'Yes'

					}, {
						action: '1098654634',
						descr: 'Food Safety Q3',
						levelcompl: 'L3',
						compltdby: 'Karthikeyan',
						highlvlqstn: '298564874563',
						profile: 'Profile P4',
						valresult: 'Yes'

					}, {
						action: '1098654664',
						descr: 'Food Safety Q4',
						levelcompl: 'L2',
						compltdby: 'Karthikeyan',
						highlvlqstn: '292464874563',
						profile: 'Profile P5',
						valresult: 'No'

					}, {
						action: '1098659664',
						descr: 'Food Safety Q8',
						levelcompl: 'L2',
						compltdby: 'Karthikeyan',
						highlvlqstn: '292460974563',
						profile: 'Profile P99',
						valresult: 'Yes'

					}, {
						action: '1015659664',
						descr: 'Food Safety Q098',
						levelcompl: 'L3',
						compltdby: 'Srini',
						highlvlqstn: '282460974563',
						profile: 'Profile P79',
						valresult: 'Yes'

					}, {
						action: '1085659664',
						descr: 'Food Safety Q058',
						levelcompl: 'L3',
						compltdby: 'Srini',
						highlvlqstn: '282460874563',
						profile: 'Profile P89',
						valresult: 'Yes'

					}

				]
			};
			this.getView().getModel("CreateModel").setProperty("/data", oDisplayData);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.TrackActions
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.TrackActions
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.TrackActions
		 */
		//	onExit: function() {
		//
		//	}

	});

});