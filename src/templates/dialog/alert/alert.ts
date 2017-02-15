﻿/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */
/// <reference path="../../../../node_modules/@microsoft/office-js-helpers/dist/office.helpers.d.ts" />

(() => {
    Office.initialize = () => {
        $(document).ready(() => {
            $('#open').click(() => {
                let dialog = new OfficeHelpers.Dialog(`${location.origin}/templates/dialog/alert/dialog.html`, 150, 75);
                return dialog.result;
            });
        });
    };

})();
