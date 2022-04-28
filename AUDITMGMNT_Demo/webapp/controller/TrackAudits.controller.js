sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/core/util/MockServer"
], function (Controller, ODataModel, MockServer) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.TrackAudits", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.TrackAudits
		 */
		onInit: function () {
			var oModel, oView;
			var oMockServer = new MockServer({
				rootUri: "sapuicompsmarttable/"
			});
			this._oMockServer = oMockServer;
			var vPath = jQuery.sap.getModulePath("olam.qm.ZGT_AUDIT_MGMT");
			vPath = vPath + "/mockserver/metadata.xml";
			oMockServer.simulate(vPath, "./mockserver/");
			oMockServer.start();
			oModel = new ODataModel("sapuicompsmarttable", {
				defaultCountMode: "Inline"
			});
			oView = this.getView();
			oView.setModel(oModel);
		},
		validateStatus: function (sStatus) {

			// Boarder values for different status of weight

			if (sStatus === '') {
				return "None";
			} else if (sStatus === 'Status') {
				return "Success";
			} else if (sStatus) {
				return "Warning";
			} else {
				return "Error";
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.TrackAudits
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.TrackAudits
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.TrackAudits
		 */
		//	onExit: function() {
		//
		//	}

	});

});