(function ()
{
    'use strict';

    var app = angular.module('app', []);

    var sequence = 100;
    var users = {};

    /**
     * @excludeMutations
     */
    [
        {
            id: sequence++,
            name: 'User',
            email: 'user@gmail.com',
            age: 21
        }
    ].every(function (value)
            {
                users[value.id] = value;
                return true;
            });

    app.service('User', function ()
    {
        this.save = function (user)
        {
            if (users[user.id]) {
                users[user.id].name = user.name;
                users[user.id].email = user.email;
                users[user.id].age = user.age;
            } else {
                user.id = sequence++;
                users[user.id] = user;
            }
            return users;
        };

        this.get = function (id)
        {
            return users[id];
        };

        this.remove = function (id)
        {
            var userToDelete = users[id];
            delete users[id];
            return userToDelete;
        };

        this.getAll = function ()
        {
            return users;
        };

        this.count = function ()
        {
            var length = 0;
            for (var key in users) { // jshint ignore:line
                ++length;
            }
            return length;
        };
    });
})();
