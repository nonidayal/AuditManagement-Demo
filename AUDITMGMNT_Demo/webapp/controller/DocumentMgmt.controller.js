sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	'sap/m/library'
], function (Controller, JSONModel, mobileLibrary) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.DocumentMgmt", {

		onInit: function () {
			//var GlobalModel = this.getOwnerComponent().getModel("GlobalModel");
			this.getOwnerComponent().getRouter().getRoute("DocumentMgmt").attachPatternMatched(this.onRouteMatched, this);
			//var oModel = new JSONModel("test-resources/sap/ui/table/demokit/sample/TreeTable/JSONTreeBinding/Clothing.json");
			var oModel = new JSONModel("model/Documents.json");
			this.getView().setModel(oModel);
		},
		onRouteMatched: function (oEvent) {},
		handleLinkPress: function(oEvent){
			//var URLHelper = mobileLibrary.URLHelper;
			//URLHelper.redirect("www.sap.com", true);
			window.open("model/QualityComplianceAudit_Actions.pdf");
		},
		onCollapseAll: function() {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.collapseAll();
		},
		onExpandAll: function() {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.expandToLevel(5);
		}
	});

});