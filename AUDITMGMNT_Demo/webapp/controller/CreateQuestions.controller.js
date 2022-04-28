sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function (Controller, Fragment) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.CreateQuestions", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateQuestions
		 */
		onInit: function () {

		},
		onAddAttachmentPress: function () {
			var oView = this.getView();
			if (!this._pDialog) {
				this._pDialog = Fragment.load({
					id: oView.getId(),
					name: "olam.qm.ZGT_AUDIT_MGMT.fragments.Attachment",
					controller: this
				}).then(function (oDialog) {
					oDialog.setModel(oView.getModel("DataModel"), "DataModel");
					return oDialog;
				});
			}

			this._pDialog.then(function (oDialog) {
				oDialog.open();
			}.bind(this));
		},
		onCloseAttachment: function () {
			this._pDialog.then(function (oDialog) {
				oDialog.close();
			}.bind(this));
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateQuestions
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateQuestions
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateQuestions
		 */
		//	onExit: function() {
		//
		//	}

	});

});