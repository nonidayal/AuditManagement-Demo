/*global QUnit*/

sap.ui.define([
	"olam/qm/ZGT_AUDIT_MGMT/controller/AuditMgmt.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AuditMgmt Controller");

	QUnit.test("I should test the AuditMgmt controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});