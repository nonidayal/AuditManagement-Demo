/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"olam/qm/ZGT_AUDIT_MGMT/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});