function navigateTo(page) {
    const content = document.getElementById('content');
    let htmlContent = '';

    switch (page) {
        case 'work':
            htmlContent = '<h1>Work Page</h1><p>Welcome to the Work page.</p>';
            break;
        case 'capabilities':
            htmlContent = '<h1>Capabilities Page</h1><p>Welcome to the Capabilities page.</p>';
            break;
        case 'revolve':
            htmlContent = '<h1>Revolve Page</h1><p>Welcome to the Revolve page.</p>';
            break;
        case 'return':
            htmlContent = '<h1>Return Page</h1><p>Welcome to the Return page.</p>';
            break;
        case 'ryde':
            htmlContent = '<h1>Ryde Page</h1><p>Welcome to the Ryde page.</p>';
            break;
        case 'contact':
            htmlContent = '<h1>Contact Page</h1><p>Welcome to the Contact page.</p>';
            break;
        default:
            htmlContent = '<h1>Welcome to the Homepage</h1><p>Click on the links in the header to navigate.</p>';
    }

    content.innerHTML = htmlContent;
}
