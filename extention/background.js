browser.contextMenus.create({
    id: 'word-selection',
    title: browser.i18n.getMessage('contextMenuTitle'),
    contexts: ['selection']
});