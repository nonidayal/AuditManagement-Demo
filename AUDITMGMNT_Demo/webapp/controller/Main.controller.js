sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.Main
		 */
		onInit: function () {
			var GlobalModel = this.getOwnerComponent().getModel("GlobalModel");
			this.getView().setModel(GlobalModel, "GlobalModel");
		},

		onTilePress: function (oEvent) {
			var header = oEvent.getSource().getHeader();
			if (header === "Audit Planning") {
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/selectionMode", "None");
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/enableApprove", false);
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/enableReject", false);
				this.getOwnerComponent().getRouter().navTo("RouteAuditMgmt");
			} else if (header === "Create Audit") {
				this.getOwnerComponent().getRouter().navTo("CreateAudit");
			} else if (header === "Create Question List") {
				this.getOwnerComponent().getRouter().navTo("CreateQuestionList");
			} else if (header === "Create Question") {
				this.getOwnerComponent().getRouter().navTo("CreateQuestions");
			} else if (header === "Manage Audits") {
				this.getOwnerComponent().getRouter().navTo("ManageAudits");
			} else if (header === "Track Open Actions") {
				this.getOwnerComponent().getRouter().navTo("TrackActions");
			} else if (header === "Track Audits") {
				this.getOwnerComponent().getRouter().navTo("TrackAudits");
			} else if (header === "Approve Audits") {
				this.getOwnerComponent().getRouter().navTo("ApproveAudits");
			} else if (header === "Create Action") {
				this.getOwnerComponent().getRouter().navTo("CreateAction");
			} else if (header === "Approve Audit Plans") {
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/selectionMode", "MultiSelect");
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/enableApprove", true);
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/enableReject", true);
				this.getOwnerComponent().getRouter().navTo("RouteAuditMgmt");
			} else if (header === "Create Audit Plan") {
				var mode = "Create";
				var auditPlan = "New";
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("AuditPlan_Create", {
					Mode: mode,
					AuditPlan: auditPlan
				});
			} else if (header === "Dashboard") {
				this.getOwnerComponent().getRouter().navTo("Dashboard");
			} else if (header === "Report Management") {
				this.getOwnerComponent().getRouter().navTo("DocumentMgmt");
			} else if (header === "Manage Question Lists") {
				this.getOwnerComponent().getRouter().navTo("ManageQuesList");
			}
		}

	});

});