notifications.create({
    title: 'Avoid Click', 
    body: 'Clicking on this will not dismiss this', 
    category: 'Test',
    onClick: null,
    onClose: null,
    onSelect: {
        __NOOP__: "event_dismiss"
    }
})

