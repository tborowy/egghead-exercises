describe('app', function ()
{
    'use strict';
    var transformer;
    var api;
    var responseA;
    var responseB;

    var parseResponseA = [{
        login: 'mojombo', type: 'User', url: 'https://api.github.com/users/mojombo', avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=3'
    }, {
        login: 'defunkt', type: 'User', url: 'https://api.github.com/users/defunkt', avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=3'
    }];
    var parseResponseB = [{
        login: 'kevwil', type: 'User', url: 'https://api.github.com/users/kevwil', avatarUrl: 'https://avatars.githubusercontent.com/u/35?v=3'
    }, {
        login: 'KirinDave', type: 'User', url: 'https://api.github.com/users/KirinDave', avatarUrl: 'https://avatars.githubusercontent.com/u/36?v=3'
    }, {
        login: 'jamesgolick', type: 'User', url: 'https://api.github.com/users/jamesgolick', avatarUrl: 'https://avatars.githubusercontent.com/u/37?v=3'
    }, {
        login: 'atmos', type: 'User', url: 'https://api.github.com/users/atmos', avatarUrl: 'https://avatars.githubusercontent.com/u/38?v=3'
    }, {
        login: 'errfree', type: 'Organization', url: 'https://api.github.com/users/errfree', avatarUrl: 'https://avatars.githubusercontent.com/u/44?v=3'
    }];

    beforeEach(function ()
    {
        module('services');
        inject(function ($injector)
        {
            transformer = $injector.get('ApiResponse');
            //api = $injector.get('Api');
        });

    });

    //describe('api', function ()
    //{
    //    it('should return an empty array when it receives an empty array', function ()
    //    {
    //        api.getUsers();
    //        expect(http).toHaveBeenCalledWith();
    //    });
    //
    //});

    describe('api.response', function ()
    {
        it('should return an empty array when it receives an empty array', function ()
        {
            expect(transformer('[]')).toEqual([]);
        });

        it('should parse the response to 2 items with login, type, url, avatarUrl defined', function ()
        {
            expect(transformer(responseA)).toEqual(parseResponseA);
        });
        it('should parse the response to 5 items with login, type, url, avatarUrl defined', function ()
        {
            expect(transformer(responseB)).toEqual(parseResponseB);
        });

        beforeEach(function ()
        {
            responseA = JSON.stringify([{
                'login': 'mojombo',
                'id': 1,
                'avatar_url': 'https://avatars.githubusercontent.com/u/1?v=3',
                'gravatar_id': '',
                'url': 'https://api.github.com/users/mojombo',
                'html_url': 'https://github.com/mojombo',
                'followers_url': 'https://api.github.com/users/mojombo/followers',
                'following_url': 'https://api.github.com/users/mojombo/following{/other_user}',
                'gists_url': 'https://api.github.com/users/mojombo/gists{/gist_id}',
                'starred_url': 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
                'subscriptions_url': 'https://api.github.com/users/mojombo/subscriptions',
                'organizations_url': 'https://api.github.com/users/mojombo/orgs',
                'repos_url': 'https://api.github.com/users/mojombo/repos',
                'events_url': 'https://api.github.com/users/mojombo/events{/privacy}',
                'received_events_url': 'https://api.github.com/users/mojombo/received_events',
                'type': 'User',
                'site_admin': false
            },
                {
                    'login': 'defunkt',
                    'id': 2,
                    'avatar_url': 'https://avatars.githubusercontent.com/u/2?v=3',
                    'gravatar_id': '',
                    'url': 'https://api.github.com/users/defunkt',
                    'html_url': 'https://github.com/defunkt',
                    'followers_url': 'https://api.github.com/users/defunkt/followers',
                    'following_url': 'https://api.github.com/users/defunkt/following{/other_user}',
                    'gists_url': 'https://api.github.com/users/defunkt/gists{/gist_id}',
                    'starred_url': 'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
                    'subscriptions_url': 'https://api.github.com/users/defunkt/subscriptions',
                    'organizations_url': 'https://api.github.com/users/defunkt/orgs',
                    'repos_url': 'https://api.github.com/users/defunkt/repos',
                    'events_url': 'https://api.github.com/users/defunkt/events{/privacy}',
                    'received_events_url': 'https://api.github.com/users/defunkt/received_events',
                    'type': 'User',
                    'site_admin': true
                }]);

            responseB = JSON.stringify([{
                'login': 'kevwil',
                'id': 35,
                'avatar_url': 'https://avatars.githubusercontent.com/u/35?v=3',
                'gravatar_id': '',
                'url': 'https://api.github.com/users/kevwil',
                'html_url': 'https://github.com/kevwil',
                'followers_url': 'https://api.github.com/users/kevwil/followers',
                'following_url': 'https://api.github.com/users/kevwil/following{/other_user}',
                'gists_url': 'https://api.github.com/users/kevwil/gists{/gist_id}',
                'starred_url': 'https://api.github.com/users/kevwil/starred{/owner}{/repo}',
                'subscriptions_url': 'https://api.github.com/users/kevwil/subscriptions',
                'organizations_url': 'https://api.github.com/users/kevwil/orgs',
                'repos_url': 'https://api.github.com/users/kevwil/repos',
                'events_url': 'https://api.github.com/users/kevwil/events{/privacy}',
                'received_events_url': 'https://api.github.com/users/kevwil/received_events',
                'type': 'User',
                'site_admin': false
            },
                {
                    'login': 'KirinDave',
                    'id': 36,
                    'avatar_url': 'https://avatars.githubusercontent.com/u/36?v=3',
                    'gravatar_id': '',
                    'url': 'https://api.github.com/users/KirinDave',
                    'html_url': 'https://github.com/KirinDave',
                    'followers_url': 'https://api.github.com/users/KirinDave/followers',
                    'following_url': 'https://api.github.com/users/KirinDave/following{/other_user}',
                    'gists_url': 'https://api.github.com/users/KirinDave/gists{/gist_id}',
                    'starred_url': 'https://api.github.com/users/KirinDave/starred{/owner}{/repo}',
                    'subscriptions_url': 'https://api.github.com/users/KirinDave/subscriptions',
                    'organizations_url': 'https://api.github.com/users/KirinDave/orgs',
                    'repos_url': 'https://api.github.com/users/KirinDave/repos',
                    'events_url': 'https://api.github.com/users/KirinDave/events{/privacy}',
                    'received_events_url': 'https://api.github.com/users/KirinDave/received_events',
                    'type': 'User',
                    'site_admin': false
                },
                {
                    'login': 'jamesgolick',
                    'id': 37,
                    'avatar_url': 'https://avatars.githubusercontent.com/u/37?v=3',
                    'gravatar_id': '',
                    'url': 'https://api.github.com/users/jamesgolick',
                    'html_url': 'https://github.com/jamesgolick',
                    'followers_url': 'https://api.github.com/users/jamesgolick/followers',
                    'following_url': 'https://api.github.com/users/jamesgolick/following{/other_user}',
                    'gists_url': 'https://api.github.com/users/jamesgolick/gists{/gist_id}',
                    'starred_url': 'https://api.github.com/users/jamesgolick/starred{/owner}{/repo}',
                    'subscriptions_url': 'https://api.github.com/users/jamesgolick/subscriptions',
                    'organizations_url': 'https://api.github.com/users/jamesgolick/orgs',
                    'repos_url': 'https://api.github.com/users/jamesgolick/repos',
                    'events_url': 'https://api.github.com/users/jamesgolick/events{/privacy}',
                    'received_events_url': 'https://api.github.com/users/jamesgolick/received_events',
                    'type': 'User',
                    'site_admin': false
                },
                {
                    'login': 'atmos',
                    'id': 38,
                    'avatar_url': 'https://avatars.githubusercontent.com/u/38?v=3',
                    'gravatar_id': '',
                    'url': 'https://api.github.com/users/atmos',
                    'html_url': 'https://github.com/atmos',
                    'followers_url': 'https://api.github.com/users/atmos/followers',
                    'following_url': 'https://api.github.com/users/atmos/following{/other_user}',
                    'gists_url': 'https://api.github.com/users/atmos/gists{/gist_id}',
                    'starred_url': 'https://api.github.com/users/atmos/starred{/owner}{/repo}',
                    'subscriptions_url': 'https://api.github.com/users/atmos/subscriptions',
                    'organizations_url': 'https://api.github.com/users/atmos/orgs',
                    'repos_url': 'https://api.github.com/users/atmos/repos',
                    'events_url': 'https://api.github.com/users/atmos/events{/privacy}',
                    'received_events_url': 'https://api.github.com/users/atmos/received_events',
                    'type': 'User',
                    'site_admin': false
                },
                {
                    'login': 'errfree',
                    'id': 44,
                    'avatar_url': 'https://avatars.githubusercontent.com/u/44?v=3',
                    'gravatar_id': '',
                    'url': 'https://api.github.com/users/errfree',
                    'html_url': 'https://github.com/errfree',
                    'followers_url': 'https://api.github.com/users/errfree/followers',
                    'following_url': 'https://api.github.com/users/errfree/following{/other_user}',
                    'gists_url': 'https://api.github.com/users/errfree/gists{/gist_id}',
                    'starred_url': 'https://api.github.com/users/errfree/starred{/owner}{/repo}',
                    'subscriptions_url': 'https://api.github.com/users/errfree/subscriptions',
                    'organizations_url': 'https://api.github.com/users/errfree/orgs',
                    'repos_url': 'https://api.github.com/users/errfree/repos',
                    'events_url': 'https://api.github.com/users/errfree/events{/privacy}',
                    'received_events_url': 'https://api.github.com/users/errfree/received_events',
                    'type': 'Organization',
                    'site_admin': false
                }]);

        });

    });
});
