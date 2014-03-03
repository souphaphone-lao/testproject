Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
layout: {
        type: 'vbox',
        align: 'stretch'
    },
            items: [{
                    title: 'Hello Ext',
                    html : 'Hello! Welcome to Ext JS.'
                },{
                    title: 'next panel',
                    contentEl: 'test-div',
                    tbar: [{
                            xtype: 'button',
                            text: 'Button 1',
                            iconAlign: 'top',
                            icon: '/favicon.ico'
                    },{
                            xtype: 'button',
                            text: 'Button 2',
                            iconAlign: 'top',
                            icon: '/favicon.ico'
                    },{
                            width: 100,
                            defaultType: 'menuitem',
                            plain: true,
                            //floating: false,  // usually you want this set to True (default)
                            //renderTo: Ext.getBody(),  // usually rendered by it's containing component
                            items: [{
                                text: 'plain item 1'
                            },{
                                text: 'plain item 2'
                            },{
                                text: 'plain item 3'
                            }],
                            xtype: 'menu'
                    }]
             },{
                title: 'Simple Form',
                bodyPadding: 5,
                width: 350,

                // The form will submit an AJAX request to this URL when submitted
                url: 'saveform',

                // Fields will be arranged vertically, stretched to full width
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },

                // The fields
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'First Name',
                    name: 'first',
                    allowBlank: false
                },{
                    fieldLabel: 'Last Name',
                    name: 'last',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Age',
                    name: 'age',
                    allowBlank: false,
                    xtype: 'numberfield',
                    minValue: 1,
                    maxValue: 100
                },{
                    fieldLabel: 'Married',
                    name: 'married',
                    checked: false,
                    xtype: 'checkbox',
                    inputValue: 1,
                    uncheckedValue: 0
                }],

                // Reset and Submit buttons
                buttons: [{
                    text: 'Reset',
                    handler: function() {
                        this.up('form').getForm().reset();
                    }
                }, {
                    text: 'Submit',
                    formBind: true, //only enabled once the form is valid
                    disabled: true,
                    handler: function() {
                        var form = this.up('form').getForm();
                        if (form.isValid()) {
                            form.submit({
                                success: function(form, action) {
                                   Ext.Msg.alert('Success', action.result.msg);
                                    Ext.data.StoreManager.lookup('simpsonsStore').reload();
                                },
                                failure: function(form, action) {
                                    Ext.Msg.alert('Failed', action.result.msg);
                                }
                            });
                        }
                    }
                }],
                xtype: 'form'
            },{
                
                title: 'Simpsons',
                xtype: 'gridpanel',
                store:
                 {
                    autoLoad: true,
                    storeId:'simpsonsStore',
                    fields:['id', 'firstname', 'lastname','age'],
                    proxy: {
                        type: 'ajax',
                        url: '/input/getform',
                        reader: {
                            type: 'json',
                            root: 'rows'
                        }
                    }
                },


                columns: [
                    { text: 'Name',  dataIndex: 'id' },
                    { text: 'Email', dataIndex: 'firstname', flex: 1 },
                    { text: 'Phone', dataIndex: 'lastname' },
                    { text: 'Phone', dataIndex: 'age' }
                ],
                height: 200,
                width: 400,            
            }]
        });
    }
});
