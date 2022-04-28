sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, Fragment, JSONModel) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.CreateAudit", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateAudit
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("CreateAudit").attachPatternMatched(this.onRouteMatched, this);
			var oCreateModel = new JSONModel();
			this.getView().setModel(oCreateModel, "CreateModel");
		},
		onCreateQstnList: function () {
			this.getOwnerComponent().getRouter().navTo("CreateQuestionList");
		},
		onCreateQstn: function () {
			this.getOwnerComponent().getRouter().navTo("CreateQuestions");
		},
		onRouteMatched: function (oEvent) {
			this.getView().getModel("CreateModel").setProperty("/mode", true);
			this.getView().getModel("CreateModel").setProperty("/fileTypes", ['xlsx']);

			if (oEvent.getParameter('arguments').display) {
				if (oEvent.getParameter('arguments').display === 'true') {
					this.getView().getModel("CreateModel").setProperty("/mode", false);
					this.getView().getModel("CreateModel").setProperty("/create", false);
					this.getView().byId("sStatusId").setState("Success");
					this.getView().byId("sStatusId").setText("In Progress");

					this.bEdit = true;
					this.getView().byId("sAuditCreatePageId").setTitle("Audit - 2000001");
					this.formDisplayData();
				}
			} else {
				this.bEdit = false;

				this.getView().byId("sStatusId").setState("Indication05");
				this.getView().byId("sStatusId").setText("Draft");
				this.getView().byId("sAuditCreatePageId").setTitle("Create Audit");
				this.getView().getModel("CreateModel").setProperty("/create", true);
				this.getView().getModel("CreateModel").setProperty("/data", {});
				this.getView().getModel("CreateModel").setProperty("/data", {
					BussUnit: '02'
				});
			}
		},
		formDisplayData: function () {
			var oDisplayData = {
				audit: 'Quality Compliance Audit',
				audittype: 'Internal Audit',
				planstart: '10.03.2020',
				planend: '10.03.2021',
				actualstart: '10.02.2019',
				actualend: '11.11.2020',
				site: ['01', '02'],
				BussUnit: '01',
				audittrigger: 'Yearly Audit',
				changedby: 'Karthikeyan Perumal',
				changedon: '11.12.2021',
				createdby: 'Karthikeyan Perumal',
				createdon: '12.12.2021',
				auditdesc: 'Saved Audit on 12 Feb',
				releasedby: 'Karthikeyan Perumal',
				releasedon: '12.12.2021',
				participants: [{
					Role: '01',
					bpnumber: '00003563',
					partdescription: 'Srini'
				}, {
					Role: '02',
					bpnumber: '00003963',
					partdescription: 'Karthikeyan'
				}],
				calcresult: '0.3',
				maxpoint: '5.5',
				degofful: '1.5',
				overasses: '02',
				valutnproc: '01',
				minres: 'Pass',
				addcommnts: 'Submitted but waiting for aproval',
				status: '01',
				addcmmnts: 'Passed with cond ful',
				descrdata: 'Need the audit to be approved on and before 12 Feb',
				summary: 'Audit was approved with notes',
				attachments: [{
						filename: 'Quality.pdf',
						attachdesc: 'Quality',
						doctype: 'pdf'
					}, {
						filename: 'Maintanance.xlxx',
						attachdesc: 'Maintanance',
						doctype: 'xlxx'
					}

					, {
						filename: 'RoutesPlan.pdf',
						attachdesc: 'Routes Plans',
						doctype: 'pdf'
					}

				],
				questions: [{
					qstnid: '204673894765',
					qstn: '1.1 Are all documents shown during audit in hard copies? Is all documents are legible and easily retrievable?',
					qstnlist: '1. Legal and Regulatory',
					noOfPoints: '',
					maxPoints: 10,
					qstnstatus: '01',
					remarks: 'Checked',
					bAction: true,
					element: 'Quality Compliance QuestionList',
					status: [{
						"key": "01",
						"value": "Yes"
					}, {
						"key": "02",
						"value": "No"
					}, {
						"key": "03",
						"value": "Not Applicable"
					}]
				}, {
					qstnid: '204645894765',
					element: 'Quality Compliance QuestionList',
					qstn: '1.2 Is legal register in place, where all legal documents details are compiled which must have document expiry date or validity,applied for, and reviewed by FSTl quarterly?',
					qstnlist: '1. Legal and Regulatory',
					noOfPoints: '02',
					maxPoints: 10,
					qstnstatus: '02',
					remarks: 'Checked',
					bAction: true,
					status: [{
						"key": "01",
						"value": "1"
					}, {
						"key": "02",
						"value": "2"
					}, {
						"key": "03",
						"value": "3"
					}, {
						"key": "04",
						"value": "4"
					}, {
						"key": "05",
						"value": "5"
					}, {
						"key": "06",
						"value": "6"
					}, {
						"key": "07",
						"value": "7"
					}, {
						"key": "08",
						"value": "8"
					}, {
						"key": "09",
						"value": "9"
					}, {
						"key": "10",
						"value": "10"
					}]
				}, {
					qstnid: '204645894765',
					qstn: '1.3 Is applicable guidelines for specific regulatory requirements in place? If applicable like Halal, Kosher etc.along with product approval in place?',
					qstnlist: '1. Legal and Regulatory',
					noOfPoints: '05',
					maxPoints: 10,
					qstnstatus: '',
					element: 'Quality Compliance QuestionList',
					remarks: 'Checked',
					bAction: true,
					status: [{
						"key": "01",
						"value": "Yes"
					}, {
						"key": "02",
						"value": "No"
					}, {
						"key": "03",
						"value": "Not Applicable"
					}]
				}, {
					qstnid: '204645894765',
					qstn: '1.4 Are all currently running products have NAFDAC/FDA approvals?',
					qstnlist: '1. Legal and Regulatory',
					noOfPoints: '',
					maxPoints: 10,
					qstnstatus: '02',
					remarks: 'Checked',
					element: 'Quality Compliance QuestionList',
					bAction: true,
					status: [{
						"key": "01",
						"value": "Yes"
					}, {
						"key": "02",
						"value": "No"
					}, {
						"key": "03",
						"value": "Not Applicable"
					}]
				}, {
					qstnid: '2046689894765',
					qstn: '2.1 Is food safety team leader appointed and nominated with letter of nomination signed by factory head?',
					qstnlist: '2. Food Safety Management',
					noOfPoints: '',
					maxPoints: 10,
					qstnstatus: '02',
					element: 'Food Safety QuestionList',
					remarks: '',
					bAction: true,
					status: [{
						"key": "01",
						"value": "Yes"
					}, {
						"key": "02",
						"value": "No"
					}, {
						"key": "03",
						"value": "Not Applicable"
					}]
				}, {
					qstnid: '2046689474765',
					qstn: '2.2 Is food safety team in place, which is cross functional team and atleast one microbiologist included along with competence records and professional qualification maintained?',
					qstnlist: '2. Food Safety Management',
					noOfPoints: '03',
					maxPoints: 10,
					element: 'Food Safety QuestionList',
					qstnstatus: '',
					remarks: '',
					bAction: true

				}, {
					qstnid: '2046689474765',
					qstn: '2.3 Is change management process in place and implemented? Are all type of changes pertaining to product, process, equipmment, practices, recipes, documented information maintained, retained in CDC format and approved?',
					qstnlist: '2. Food Safety Management',
					noOfPoints: '',
					maxPoints: 10,
					element: 'Food Safety QuestionList',
					qstnstatus: '',
					remarks: '',
					bAction: true,
					status: [{
						"key": "01",
						"value": "Yes"
					}, {
						"key": "02",
						"value": "No"
					}, {
						"key": "03",
						"value": "Not Applicable"
					}]
				}, {
					qstnid: '2046689474765',
					qstn: '2.4 Is Risk assesment on allergens management in place with control plan?',
					qstnlist: '2. Food Safety Management',
					noOfPoints: '',
					maxPoints: 10,
					element: 'Food Safety QuestionList',
					qstnstatus: '',
					remarks: '',
					bAction: true,
					status: [{
						"key": "01",
						"value": "Yes"
					}, {
						"key": "02",
						"value": "No"
					}, {
						"key": "03",
						"value": "Not Applicable"
					}]
				}],
				actions: [{
						action: 'Training',
						descr: 'Training',
						levelcompl: '50%',
						compltdby: 'Karthikeyan',
						highlvlqstn: 'Is food safety team leader appointed and nominated with letter of nomination signed by factory head',
						profile: 'Profile P1',
						valresult: 'Yes',
						actionstatus: 'In Progress'

					}, {
						action: 'Rework',
						descr: 'Rework',
						levelcompl: '33%',
						compltdby: 'Karthikeyan',
						highlvlqstn: 'Is food safety team leader appointed and nominated with letter of nomination signed by factory head',
						profile: 'Profile P4',
						valresult: 'Yes',
						actionstatus: 'Completed'

					}

				]
			};
			this.getView().getModel("CreateModel").setProperty("/data", oDisplayData);
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
		},
		onViewSummaryPress: function () {
			var oView = this.getView();
			if (!this._oSummaryDialog) {
				this._oSummaryDialog = Fragment.load({
					id: oView.getId(),
					name: "olam.qm.ZGT_AUDIT_MGMT.fragments.Summary",
					controller: this
				}).then(function (oDialog) {
					oDialog.setModel(oView.getModel("CreateModel"), "CreateModel");
					return oDialog;
				});
			}

			this._oSummaryDialog.then(function (oDialog) {
				oDialog.open();
			}.bind(this));
		},
		onCloseSummaryPress: function () {
			this._oSummaryDialog.then(function (oDialog) {
				oDialog.close();
			}.bind(this));
		},
		onEditPress: function () {
			this.getView().getModel("CreateModel").setProperty("/mode", true);
			this.getView().getModel("CreateModel").refresh(true);
		},
		onCancelPress: function () {
			this.getView().getModel("CreateModel").setProperty("/mode", false);
			this.getView().getModel("CreateModel").refresh(true);
		},
		onSavePress: function () {
			if (this.bEdit) {
				this.getView().getModel("CreateModel").setProperty("/mode", false);
				this.getView().getModel("CreateModel").refresh(true);
			}
		},
		onActionReqSelect: function (oEvent) {
			var oSelectedPath = oEvent.getSource().getBindingContext("CreateModel").getPath();
			if (oEvent.getSource().getSelectedKey() === '01') {
				// this.getView().byId("sAddActionId").setVisible(true);
				this.getView().getModel("CreateModel").setProperty(oSelectedPath + "/bAction", true);
			} else {
				// this.getView().byId("sAddActionId").setVisible(false);
				this.getView().getModel("CreateModel").setProperty(oSelectedPath + "/bAction", false);
			}
			this.getView().getModel("CreateModel").refresh(true);
		},
		onAddActionPress: function () {
			this.getOwnerComponent().getRouter().navTo("CreateAction");
		},
		onAddPress: function () {
			var aParticipants = this.getView().getModel("CreateModel").getProperty("/data/participants");
			if (!aParticipants) {
				this.getView().getModel("CreateModel").setProperty("/data", {
					participants: []
				});
				aParticipants = this.getView().getModel("CreateModel").getProperty("/data/participants");
			}
			var oParticipant = {
				Role: '',
				bpnumber: '',
				partdescription: ''
			};
			aParticipants.push(oParticipant);
			this.getView().getModel("CreateModel").setProperty("/data/participants", aParticipants);
			this.getView().getModel("CreateModel").refresh(true);

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
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateAudit
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateAudit
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateAudit
		 */
		//	onExit: function() {
		//
		//	}

	});

});