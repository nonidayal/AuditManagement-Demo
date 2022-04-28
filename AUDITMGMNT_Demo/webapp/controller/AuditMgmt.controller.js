sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/core/util/MockServer"
], function (Controller, ODataModel, MockServer) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.AuditMgmt", {
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("RouteAuditMgmt").attachPatternMatched(this.onRouteMatched, this);
			var oModel, oView;
			var oMockServer = new MockServer({
				rootUri: "sapuicompsmarttable/"
			});
			this._oMockServer = oMockServer;
			debugger;
			var vPath = jQuery.sap.getModulePath("olam.qm.ZGT_AUDIT_MGMT");
			vPath = vPath + "/mockserver/metadata.xml";
			//vPath = "./mockserver/metadata.xml";
			vPath = "/mockserver/metadata.xml";
			oMockServer.simulate(vPath, "/mockserver/");
			//oMockServer.simulate("./localService/metadata.xml", "./localService/");
			oMockServer.start();
			oModel = new ODataModel("sapuicompsmarttable", {
				defaultCountMode: "Inline"
			});
			oView = this.getView();
			oView.setModel(oModel);
		},
		onRouteMatched: function () {
			
		},
		onCreateAuditPlan: function()
		{
			var mode = "Create";
			var auditPlan = "New";
			//this.getOwnerComponent().getModel("GlobalModel").setProperty("/Mode", "Create");
			//this.getOwnerComponent().getRouter().navTo("AuditPlan_Create");
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("AuditPlan_Create", {
				Mode: mode,
				AuditPlan: auditPlan
			});
		},
		onListItemPress : function(oEvent)
		{
			var mode = "Display";
			var auditPlan = "100002";
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("AuditPlan_Create", {
				Mode: mode,
				AuditPlan: auditPlan
			});
		},
		onCreateAudit: function()
		{
			this.getOwnerComponent().getRouter().navTo("CreateAudit");
		}
	});
});