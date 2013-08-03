/*
 * File: app/view/ArticleReader.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('BlogApp.view.ArticleReader', {
    extend: 'Ext.Component',
    alias: 'widget.articlereader',

    height: 150,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tpl: Ext.create('Ext.XTemplate', 
                '<i>{[this.getDate(values.date)]}, by {[this.getAuthorName(values.user_id)]}</i>',
                '<p>',
                '    {body}',
                '</p>',
                {
                    getDate: function(date) {
                        if(date) {
                            return Ext.Date.format(date, "Y-m-d");
                        }
                        return '';
                    },
                    getAuthorName: function(id) {
                        // get the users store
                        var store = Ext.StoreMgr.get('Users');

                        // if the record doesn't exists
                        if(!store || !store.getById(id)) {
                            return 'undefined';
                        }

                        // return the author's name
                        return store.getById(id).get('name');
                    }
                }
            )
        });

        me.callParent(arguments);
    }

});