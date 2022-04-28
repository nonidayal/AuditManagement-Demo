sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, Fragment, JSONModel) {
	"use strict";

	return Controller.extend("olam.qm.ZGT_AUDIT_MGMT.controller.CreateQuestionList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateQuestionList
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("CreateQuestionList").attachPatternMatched(this.onRouteMatched, this);
			var oCreateModel = new JSONModel();
			this.getView().setModel(oCreateModel, "CreateModel");

		},
		onRouteMatched: function (oEvent) {
			this.getView().getModel("CreateModel").setProperty("/fileTypes", ['xlsx']);
			if (oEvent.getParameter('arguments').display) {
				if (oEvent.getParameter('arguments').display === 'true') {
					var oData = {
						QuestionList: 'Quality Compliance QuestionList',
						QuestionDescr: 'Quality Compliance QuestionList',
						hprof: '02',
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
					};
					this.getView().getModel('CreateModel').setProperty('/data', oData);
				}
			} else {
				this.getView().byId('sPageId').setTitle('Create Question List');
				this.getView().getModel('CreateModel').setProperty('/data', {});
			}
			this.getView().getModel('CreateModel').refresh(true);
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
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateQuestionList
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateQuestionList
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf olam.qm.ZGT_AUDIT_MGMT.view.CreateQuestionList
		 */
		//	onExit: function() {
		//
		//	}

	});

});