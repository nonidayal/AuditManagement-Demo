sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/core/util/MockServer",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, ODataModel, MockServer, Fragment, JSONModel) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.ManageQuesList", {

		onInit: function () {
			var oModel, oView;
			var oMockServer = new MockServer({
				rootUri: "sapuicompsmarttable/"
			});
			this._oMockServer = oMockServer;
			var vPath = jQuery.sap.getModulePath("olam.qm.ZGT_AUDIT_MGMT");
			// vPath = vPath + "/mockserver/metadata.xml";
			vPath = "/mockserver/metadata.xml";
			oMockServer.simulate(vPath, "/mockserver/");
			oMockServer.start();
			oModel = new ODataModel("sapuicompsmarttable", {
				defaultCountMode: "Inline"
			});
			oView = this.getView();
			oView.setModel(oModel);
			var oCreateModel = new JSONModel();
			this.getView().setModel(oCreateModel, "CreateModel");
			this.getOwnerComponent().getRouter().getRoute("ManageQuesList").attachPatternMatched(this.onRouteMatched, this);

		},
		onRouteMatched: function () {
			this.getView().getModel("CreateModel").setProperty("/fileTypes", ['xlsx']);
		},
		onSpreadsheetQuestionImportPress: function () {
			var oView = this.getView();
			if (!this._pSpreadsheetDialog) {
				this._pSpreadsheetDialog = Fragment.load({
					id: oView.getId(),
					name: "olam.qm.ZGT_AUDIT_MGMT.fragments.ImportSpreadsheet",
					controller: this
				}).then(function (oDialog) {
					oDialog.setModel(oView.getModel("CreateModel"), "CreateModel");
					return oDialog;
				});
			}

			this._pSpreadsheetDialog.then(function (oDialog) {
				oDialog.open();
			}.bind(this));
		},
		onCloseSpreadsheet: function () {
			this._pSpreadsheetDialog.then(function (oDialog) {
				oDialog.close();
			}.bind(this));
		},
		onQListPress: function () {
			this.getOwnerComponent().getRouter().navTo("CreateQuestionList", {
				display: 'true'
			});
		},
		onCopyPress: function () {
			var oView = this.getView();
			if (!this._pPlantDialog) {
				this._pPlantDialog = Fragment.load({
					id: oView.getId(),
					name: "olam.qm.ZGT_AUDIT_MGMT.fragments.SelectPlant",
					controller: this
				}).then(function (oDialog) {
					oDialog.setModel(oView.getModel("DataModel"), "DataModel");
					return oDialog;
				});
			}

			this._pPlantDialog.then(function (oDialog) {
				oDialog.open();
			}.bind(this));
		},
		onClosePlantDialog: function () {
			this._pPlantDialog.then(function (oDialog) {
				oDialog.close();
			}.bind(this));
		},
		onContinuePress: function () {
			this.getOwnerComponent().getRouter().navTo("CreateQuestionList", {
				display: 'true'
			});
		},
		onCreateQList: function () {
			this.getOwnerComponent().getRouter().navTo("CreateQuestionList");
		}

	});

});