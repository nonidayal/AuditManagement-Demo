sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.AuditPlan_Create", {

		onInit: function () {
			var GlobalModel = this.getOwnerComponent().getModel("GlobalModel");
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/APContactSet", []);
			this.getOwnerComponent().getRouter().getRoute("AuditPlan_Create").attachPatternMatched(this.onRouteMatched, this);
			this.getView().setModel(GlobalModel, "GlobalModel");
		},
		onRouteMatched: function (oEvent) {
			var oArgs = oEvent.getParameter("arguments");
			var mode = oArgs.Mode;
			var auditPlan = oArgs.AuditPlan;
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/Mode", mode);
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/AuditPlan", auditPlan);
			if (mode === "Display") {
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/editMode", false);
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/Title", "Display Audit Plan : " + auditPlan);
				this.getAuditPlanDetails(auditPlan);
			} else {
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/editMode", true);
				this.getOwnerComponent().getModel("GlobalModel").setProperty("/Title", "Create Audit Plan");
				this.createNewAuditPlanTemplete();
			}
		},
		onAdd: function (oEvent) {
			var contactSet = [];
			contactSet = this.getOwnerComponent().getModel("GlobalModel").getProperty("/AuditPlanDetails/APContactSet");
			var template = {
				"Role": "",
				"BPNum": "",
				"Description": ""
			};
			contactSet.push(template);
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/AuditPlanDetails/APContactSet", contactSet);
		},
		getAuditPlanDetails: function (auditPlan) {
			debugger;
			//var oModel = this.getOwnerComponent().getModel("GlobalModel");
			var auditPlanDetails = {
				"AuditPlan": "100001",
				"AuditPlanDesc": "QCS Audit_Jan_2021",
				"AuditType": "Internal Audit",
				"Audit": "2000002",
				"AuditDesc": "Quality Compliance Audit",
				"Plant": "4866",
				"CreatedOn": new Date(),
				"CreatedBy": "Jeffrey",
				"Status": "In Execution",
				"Id": "2",
				"ChangedOn": new Date(),
				"ChangedBy": "Jeffrey",
				"ValidFrom": new Date(),
				"ValidTo": new Date(),
				"DetailDesc": "This is a Quality compliance internal audit being conducted to check 10 different quality parameters",
				"BusinessUnit": "02",
				"AddtionalComments": "AddtionalComments",
				"APContactSet": [{
					"Role": "05",
					"BPNum": "123457",
					"Description": ""
				}, {
					"Role": "02",
					"BPNum": "182654",
					"Description": ""
				}],
				"APAuditSet": [{
					"Audit": "2000002",
					"AuditDesc": "Quality Compliance Audit",
					"AuditType": "Internal Audit",
					"Plant":"3536",
					"AuditStatus":"In Execution"
				},
				{
					"Audit": "2000003",
					"AuditDesc": "Quality Compliance Audit",
					"AuditType": "Internal Audit",
					"Plant":"9311",
					"AuditStatus":"In Execution"
				}]
			};
			auditPlanDetails.CreatedOn.setDate(10);
			auditPlanDetails.ValidFrom.setDate(10);
			auditPlanDetails.ValidTo.setDate(31);
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/AuditPlanDetails", auditPlanDetails);
		},
		createNewAuditPlanTemplete: function () {
			var auditPlanDetails = {
				"AuditPlan": "",
				"AuditPlanDesc": "",
				"AuditType": "",
				"Audit": "",
				"AuditDesc": "",
				"Plant": "",
				"CreatedOn": new Date(),
				"CreatedBy": "Karthikeyan Perumal RD",
				"Status": "Being Created",
				"Id": "2",
				"ChangedOn": new Date(),
				"ChangedBy": "Karthikeyan Perumal RD",
				"DetailDesc": "",
				"BusinessUnit":"",
				"AddtionalComments":"",
				"APContactSet": [],
				"APAuditSet": []
			};
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/AuditPlanDetails", auditPlanDetails);
		},
		onSave: function (oEvent) {
			var mode = this.getOwnerComponent().getModel("GlobalModel").getProperty("/Mode");
			var auditPlan = this.getOwnerComponent().getModel("GlobalModel").getProperty("/AuditPlan");
		},
		onChange: function (oEvent) {
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/editMode", true);
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/Mode", "Change");
		},
		onCancel: function (oEvent) {
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/editMode", false);
			this.getOwnerComponent().getModel("GlobalModel").setProperty("/Mode", "Display");
			this.getOwnerComponent().getModel("GlobalModel").refresh();
		},
		onCreateAudit: function(oEvent)
		{
			this.getOwnerComponent().getRouter().navTo("CreateAudit");
		}
	});

});