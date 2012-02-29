/*
 * File: js/app/view/ui/MyViewport.js
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

Ext.define('BlogApp.view.ui.MyViewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'BlogApp.view.ArticlesList',
        'BlogApp.view.ArticleReader',
        'BlogApp.view.CommentsList'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'articleslist',
                    region: 'west',
                    split: true,
                    width: 226
                },
                {
                    xtype: 'panel',
                    itemId: 'articlePanel',
                    layout: {
                        type: 'border'
                    },
                    title: 'Article Name',
                    region: 'center',
                    items: [
                        {
                            xtype: 'articlereader',
                            region: 'center',
                            padding: 10,
                            tpl: [
                                '{body}'
                            ],
                            width: 150
                        },
                        {
                            xtype: 'panel',
                            height: 150,
                            maxHeight: 500,
                            title: 'Comments',
                            region: 'south',
                            split: true,
                            items: [
                                {
                                    xtype: 'form',
                                    bodyPadding: 10,
                                    items: [
                                        {
                                            xtype: 'commentslist'
                                        },
                                        {
                                            xtype: 'fieldset',
                                            title: 'Add a comment',
                                            items: [
                                                {
                                                    xtype: 'textareafield',
                                                    fieldLabel: '',
                                                    anchor: '100%'
                                                },
                                                {
                                                    xtype: 'button',
                                                    text: 'submit'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});