(function () {
    tinymce.create('tinymce.plugins.CustomHTML', {
        init: function (ed, url) {
            ed.addButton('custom', {
                title: 'Custom HTML',
                image: '../img/example.gif',
                onclick: function () {
                    ed.execCommand('mceInsertContent', false, '<span class="custom">Some HTML</span>');
                }
            });
        }
    });
    tinymce.PluginManager.add('custom', tinymce.plugins.CustomHTML);
})();
