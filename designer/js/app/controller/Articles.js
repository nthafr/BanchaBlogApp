/*
 * File: js/app/controller/Articles.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Designer does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('BlogApp.controller.Articles', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'articlesList',
            selector: 'articleslist'
        },
        {
            ref: 'articleReader',
            selector: 'articlereader'
        }
    ],

    init: function() {
        this.control({
            "articleslist": {
                selectionchange: this.onArticleListSelectionChange
            },
            "gridpanel": {
                viewready: this.onGridpanelViewReady
            }
        });

        this.application.on({
            articlechanged: {
                fn: this.onArticleChanged
            }
        });
    },

    onArticleChanged: function(record) {
        // refresh the single article view
        var view = Ext.ComponentQuery.query('articlereader')[0];
        // not sure how exactly this.getArticleReaderView(); works

        // update the content
        view.tpl.overwrite(view.el, record.data);

        // update the title
        Ext.ComponentQuery.query('#articlePanel')[0].setTitle(record.get('title'));
    },

    onArticleListSelectionChange: function(tablepanel, selections, options) {
        // make an application wide event
        this.application.fireEvent('articlechanged',selections[0]);
    },

    onGridpanelViewReady: function(tablepanel, options) {
        // as default select the first articles list element
        var firstRecord = this.getStore('Articles').getAt(0);
        this.getArticlesList().getSelectionModel().select(firstRecord);

        // this other views will be informed by the triggered application event 'articlechanged';
    }

});