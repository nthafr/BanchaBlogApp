/*
 * File: app/controller/Comments.js
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

Ext.define('BlogApp.controller.Comments', {
    extend: 'Ext.app.Controller',

    stores: [
        'Comments'
    ],
    views: [
        'ManageCommentsWindow'
    ],

    refs: [
        {
            ref: 'commentForm',
            selector: 'commentform'
        },
        {
            ref: 'commentsPanel',
            selector: 'commentspanel'
        },
        {
            autoCreate: true,
            ref: 'manageWindow',
            selector: 'managewindow',
            xtype: 'managecommentswindows'
        },
        {
            ref: 'manageTool',
            selector: 'commentspanel tool[type=gear]'
        }
    ],

    onCommentSubmit: function(button, e, eOpts) {
        /*
        * if you just want to submit data to the server use this
        * (the override for ext designer fo rthis doesn't yet work, it's really compley, see designer-overrrides.js)
        */
        //this.getCommentForm().submit();

        /*
        * but since we also want to have the data inside our store, 
        * we directly add it to the store and use store.sync()
        */
        var commentText = this.getCommentForm().getValues().comment;
        if(!commentText || commentText.length===0) {
            return false;
        }

        this.getCommentsStore().add({
            'article_id': this.active_article.get('id'), // see Comments.onArticleChanged
            'user_id'   : this.getController('Authentification').active_user.get('id'),
            'comment'   : commentText
        });

        // now you would normally save to server
        // this.getCommentsStore().sync();
        // But we don't need this because we use the autoSync mode

        // reset form
        this.getCommentForm().getForm().reset();
    },

    onManageToolClick: function(tool, e, eOpts) {
        // just show the manage window
        this.getManageWindow().show();
    },

    onArticleChanged: function(record) {
        // refresh the comments
        var store = this.getCommentsStore();

        // get the corresponding articles comments
        store.clearFilter(true); // Clear the filter collection without updating the UI
        store.filter({
            property:'article_id',
            exactMatch: true,
            value: record.get('id')
        });
        store.sort('created', 'ASC');


        // allways keep a reference to the active article if, for committing comments
        this.active_article = record;
    },

    onLoggedIn: function(userRecord) {
        /**
        * Only show the manage button to admins and moderators
        */
        if(userRecord.get('role') !== 'admin' && userRecord.get('role') !== 'moderator') {
            this.getManageTool().hide();
        }
    },

    init: function(application) {
        this.control({
            "commentform button[action=submitComment]": {
                click: this.onCommentSubmit
            },
            "commentspanel tool[type=gear]": {
                click: this.onManageToolClick
            }
        });

        application.on({
            articlechanged: {
                fn: this.onArticleChanged,
                scope: this
            },
            loggedin: {
                fn: this.onLoggedIn,
                scope: this
            }
        });
    }

});
