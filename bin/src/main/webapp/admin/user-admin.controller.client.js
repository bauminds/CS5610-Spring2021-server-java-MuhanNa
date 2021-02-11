(function () {
    const users = [
        {id: 123, username: 'alice', firstName: 'Alice'},
        {id: 234, username: 'bob', firstName: 'Alice'},
        {id: 345, username: 'charlie', firstName: 'Alice'},
        {id: 456, username: 'dan', firstName: 'Alice'}
    ]
    var rowTemplate;
    var tbody;

    jQuery(main);

    function main() {
        rowTemplate = jQuery('.wbdv-template');
        tbody = jQuery('tbody');
        renderUsers(users);
    }

    function renderUsers(users) {
        for (var u in users) {
            const user = users[u]
            const rowClone = rowTemplate.clone();
            rowClone.removeClass('wbdv-hidden');
            rowClone.find('.wbdv-username').html(user.username);
            tbody.append(rowClone);
        }
    }
})()