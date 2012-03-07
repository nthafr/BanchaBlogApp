/*
 * File: js/app/view/ui/ManageCommentsWindow.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Designer does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('BlogApp.view.ui.ManageCommentsWindow', {
    extend: 'Ext.window.Window',

    height: 500,
    width: 798,
    layout: {
        type: 'fit'
    },
    title: 'Manage Comments',
    xtype: 'managecommentswindows',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    store: 'Comments',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 517,
                            dataIndex: 'comment',
                            text: 'comment'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'created',
                            text: 'Date'
                        },
                        {
                            xtype: 'actioncolumn',
                            items: [
                                {
                                    altText: 'delete',
                                    handler: function(grid, rowIndex, colIndex) {
                                        var rec = grid.getStore().getAt(rowIndex);

                                        // this should normally be done by the controller, but Designer doesn't allow custom events as far as I can see
                                        grid.getStore().remove(rec);
                                        grid.getStore().sync();

                                    },
                                    icon: 'img/icons/delete.png',
                                    tooltip: 'delete'
                                }
                            ]
                        }
                    ],
                    viewConfig: {

                    }
                }
            ]
        });

        me.callParent(arguments);
    }

});